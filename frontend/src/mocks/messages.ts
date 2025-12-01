import { Message } from "../types/message";

export const mockMessages: Message[] = [
  {
    id: "m1",
    chatId: "c1",
    remitenteId: "u3",
    contenido: "Recuerden que la entrega del proyecto de análisis avanzado es el viernes.",
    fechaEnvio: "2025-12-01T11:00:00Z",
    leidoPorIds: ["u1"]
  },
  {
    id: "m2",
    chatId: "c1",
    remitenteId: "u1",
    contenido: "¿Alguien ya hizo la parte del diagrama de clases?",
    fechaEnvio: "2025-12-01T11:30:00Z",
    leidoPorIds: ["u3"]
  },
  {
    id: "m3",
    chatId: "c2",
    remitenteId: "u2",
    contenido: "No olvides la reunión de mañana en el laboratorio de cómputo.",
    fechaEnvio: "2025-12-01T09:15:00Z",
    leidoPorIds: ["u1"]
  }
];
