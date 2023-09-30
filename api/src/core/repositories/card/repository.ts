import { CardModel } from "../../models/module";

export type Repository = {
  findMany(ownerId: string): Promise<CardModel.Model[]>;
};
