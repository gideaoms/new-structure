import { SessionProvider } from "../../providers/module";
import { CardRepository } from "../../repositories/module";

export class UseCase {
  constructor(
    private readonly sessionProvider: SessionProvider.Provider,
    private readonly cardRepository: CardRepository.Repository
  ) {}

  async exec(authorization: string, teamId: string) {
    const currentUser = await this.sessionProvider.findUserByTeamId(
      authorization,
      teamId
    );
    if (currentUser instanceof Error) {
      return new Error(currentUser.message);
    }
    const ownerId = currentUser.id;
    return this.cardRepository.findMany(ownerId);
  }
}
