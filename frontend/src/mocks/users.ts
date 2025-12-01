import { User } from "../types/user";

export const mockUsers: User[] = [
  {
    id: "u1",
    nombre: "Sebastián",
    numeroControl: "20211365",
    carrera: "Ingeniería en Informática",
    semestre: 10,
    estado: "disponible",
    avatarUrl: undefined
  },
  {
    id: "u2",
    nombre: "Tutor Académico ITT",
    numeroControl: "TUTOR-01",
    carrera: "Departamento de Sistemas",
    semestre: 0,
    estado: "ocupado",
    avatarUrl: undefined
  },
  {
    id: "u3",
    nombre: "Grupo 3A",
    numeroControl: "GRUPO-3A",
    carrera: "Ingeniería en Sistemas",
    semestre: 3,
    estado: "en_clase",
    avatarUrl: undefined
  }
];

export const currentUser = mockUsers[0];
