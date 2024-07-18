import { Models, Providers, Repositories } from "../../../core";
import { isError } from "../../../utils/is-error";

export class UseCase {
  constructor(
    private readonly providers: { session: Providers.Session.Provider },
    private readonly repositories: { card: Repositories.Card.Repository }
  ) { }

  async exec(authorization: string, teamId: string, cardId: string) {
    let session = await this.providers.session
      .findUserByTeamId(authorization, teamId);
    if (isError(session)) {
      return new Error(session.message);
    }
    let products = await this.repositories.card.product.findMany(cardId);
    return products;
  }
}
