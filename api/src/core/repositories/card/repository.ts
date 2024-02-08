import { Models } from "../../core";

export module Card {
  export type Repository = {
    findMany: (ownerId: string) => Promise<Models.Card.Model[]>;
    findById: (cardId: string) => Promise<Models.Card.Model | Error>;
  };
}
