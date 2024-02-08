import { Models, Providers, Repositories } from "../../core";
import { isError } from "../../utils/is-error";

export class UseCase {
  constructor(
    private readonly providers: { session: Providers.Session.Provider },
    private readonly repositories: { card: Repositories.Card.Repository }
  ) {}

  async exec(authorization: string, teamId: string) {
    let currentUser = await this.providers.session.findUserByTeamId(
      authorization,
      teamId
    );
    if (isError(currentUser)) {
      return new Error(currentUser.message);
    }
    let ownerId = currentUser.id;
    let cards = await this.repositories.card.findMany(ownerId);
    return cards.filter(Models.Card.isActive);
  }
}
