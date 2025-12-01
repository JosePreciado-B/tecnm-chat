export interface Message {
  id: string;
  chatId: string;
  remitenteId: string;
  contenido: string;
  fechaEnvio: string; // ISO date string
  leidoPorIds: string[];
}
