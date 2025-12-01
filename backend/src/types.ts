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

export interface Chat {
  id: string;
  esGrupo: boolean;
  nombre: string;
  descripcion?: string;
  ultimoMensaje?: string;
  ultimaFecha?: string;
  participantesIds: string[];
  mensajesNoLeidos: number;
}

export interface Message {
  id: string;
  chatId: string;
  remitenteId: string;
  contenido: string;
  fechaEnvio: string;
  leidoPorIds: string[];
}
