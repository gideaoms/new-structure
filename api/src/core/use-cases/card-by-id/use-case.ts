import { Models, Repositories } from "../../core";
import { isError } from "../../utils/is-error";

export class UseCase {
  constructor(
    private readonly repositories: { card: Repositories.Card.Repository }
  ) {}

  async exec(cardId: string) {
    let card = await this.repositories.card.findById(cardId);
    if (isError(card)) {
      return new Error(card.message);
    }
    return Models.Card.toJson(card);
  }
}
