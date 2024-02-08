export module Team {
  export type Model = {
    id: string;
  };

  export type Json = {
    id?: string;
  };

  export function toJson(team: Model) {
    return {
      id: team.id,
    } satisfies Json;
  }
}
