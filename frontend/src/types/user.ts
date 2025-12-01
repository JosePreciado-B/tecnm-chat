export type UserStatus = "disponible" | "ocupado" | "en_clase" | "desconectado";

export interface User {
  id: string;
  nombre: string;
  numeroControl: string;
  carrera: string;
  semestre: number;
  avatarUrl?: string;
  estado: UserStatus;
}
