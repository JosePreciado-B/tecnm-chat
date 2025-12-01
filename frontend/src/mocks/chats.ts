import { Chat } from "../types/chat";

export const mockChats: Chat[] = [
  {
    id: "c1",
    esGrupo: true,
    nombre: "Grupo 3A - Ing. Sistemas",
    descripcion: "Chat de avisos y tareas del grupo 3A",
    ultimoMensaje: "¿Quién ya terminó el proyecto de patrones?",
    ultimaFecha: "2025-12-01T12:34:00Z",
    participantesIds: ["u1", "u3"],
    mensajesNoLeidos: 2
  },
  {
    id: "c2",
    esGrupo: false,
    nombre: "Tutorías ITT",
    descripcion: "Comunicación con tutor académico",
    ultimoMensaje: "No olvides la reunión de mañana en el laboratorio",
    ultimaFecha: "2025-12-01T09:15:00Z",
    participantesIds: ["u1", "u2"],
    mensajesNoLeidos: 0
  }
];
