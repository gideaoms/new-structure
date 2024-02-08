import { Models } from "../../core";

export module Session {
  export type Provider = {
    findUserByTeamId(
      authorization: string,
      teamId: string
    ): Promise<Models.User.Model | Error>;
  };
}
