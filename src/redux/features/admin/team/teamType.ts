export interface ITeamMember {
  id: string;
  fullName: string;
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
  fullName: string;
  email: string;
  role: string;
}
