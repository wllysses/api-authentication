import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/db";

export class UsersValidate {

  async emailAlReadyRegistered(req: Request, res: Response, next: NextFunction) {

    const { email } = req.body;

    const emailAlReadyRegistered = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (emailAlReadyRegistered) {
      return res.status(400).json({
        ok: false,
        message: 'E-mail já cadastrado.'
      })
    }

    next();
  }

  async validatePassword(req: Request, res: Response, next: NextFunction) {

    const { password, confirm_password } = req.body;

    if (password !== confirm_password) {
      return res.status(400).json({
        ok: false,
        message: 'As senhas precisam ser idênticas.'
      });
    }

    next();
  }

  async validateFields(req: Request, res: Response, next: NextFunction) {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        ok: false,
        message: 'Preencha todos os campos.'
      });
    }

    next();
  }
}
