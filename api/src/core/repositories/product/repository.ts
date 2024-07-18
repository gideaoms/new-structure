import { Models } from "../../core";

export module Product {
  export type Repository = {
    findMany: (cardId: string) => Promise<Models.Product.Model[]>
  }
}