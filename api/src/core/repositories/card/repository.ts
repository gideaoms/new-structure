import { Models } from "../../core";
import { Product } from "../product/repository";

export module Card {
  export type Repository = {
    product: Product.Repository;
    findMany: (ownerId: string) => Promise<Models.Card.Model[]>;
    findById: (cardId: string) => Promise<Models.Card.Model | Error>;
  };
}
