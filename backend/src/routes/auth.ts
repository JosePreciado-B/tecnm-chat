import { Router } from "express";
import { users } from "../data/users";

export const authRouter = Router();

// Nota: Este endpoint es solo de DEMO.
// No valida contraseñas, solo devuelve un usuario fijo.
authRouter.post("/login", (req, res) => {
  const user = users[0];
  return res.json({
    user,
    token: "token-demo-no-seguro"
  });
});
