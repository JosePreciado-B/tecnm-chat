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
