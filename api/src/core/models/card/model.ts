import { Models } from "../../core";

export module Card {
  export type Status = "active" | "inactive" | "done";

  export type Model = {
    id: string;
    teamId: string;
    team?: Models.Team.Model;
    status: Status;
  };

  export type Json = {
    id?: string;
    team?: Models.Team.Json;
  };

  export function toJson(card: Model) {
    return {
      id: card.id,
      team: card.team && Models.Team.toJson(card.team),
    } satisfies Json;
  }

  export function build(card: Partial<Model>) {
    let { id, teamId, status } = empty();
    return {
      id: card.id ?? id,
      teamId: card.teamId ?? teamId,
      status: card.status ?? status,
      team: card.team,
    } satisfies Model;
  }

  export function empty() {
    return {
      id: "",
      teamId: "",
      status: "inactive",
    } satisfies Model;
  }

  export function isActive(card: Model) {
    return card.status === "active";
  }
}
