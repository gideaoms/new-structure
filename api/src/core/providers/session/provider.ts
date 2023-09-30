import { UserModel } from "../../models/module";

export type Provider = {
  findUserByTeamId(
    authorization: string,
    teamId: string
  ): Promise<UserModel.Model | Error>;
};
