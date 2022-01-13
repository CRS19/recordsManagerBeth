export enum UserRolEnum {
  ADMINISTRADOR = 'administrador',
  ESTUDIANTE = 'estudiante',
}

export interface ILoggedInfo {
  isLoggedIn: boolean;
  rol: UserRolEnum;
}
