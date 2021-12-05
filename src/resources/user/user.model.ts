export type Role = "ADMIN" | "USER";
type Status = "PENDING" | "ACTIVE" | "BLOCKED";

export interface CreateUserDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
}

export interface UpdateUserDTO extends CreateUserDTO {
  readonly role: Role;
  readonly status: Status;
  readonly makretingPermission: boolean;
}

export interface ReadableUser {
  readonly id: number;
  readonly email: string;
  readonly status: Status;
  readonly lastName: string;
  readonly firstName: string;
  readonly role: Role;
  readonly accessToken?: string;
  readonly makretingPermission: boolean
}
