export interface ITeamMember {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

export interface ITeamListResponse {
  message: string;
  data: ITeamMember[];
}

export interface ISingleTeamResponse {
  message: string;
  data: ITeamMember;
}

export interface ICreateOrUpdateTeamInput {
  full_name: string;
  email: string;
  role: string;
}
