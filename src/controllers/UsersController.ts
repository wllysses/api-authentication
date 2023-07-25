import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../database/db";

export class UsersController {

  async createUser(req: Request, res: Response, next: NextFunction) {

    const { full_name, email, password, confirm_password } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                full_name,
                email,
                password,
                confirm_password
            }
        });

        return res.status(201.).json({
            ok: true,
            message: 'Cadastro realizado com sucesso!',
            user: {
                name: user.full_name,
                email: user.email
            }
        });
    } catch(err) {
        next(err);
    };
  };

  async authUser(req: Request, res: Response, next: NextFunction) {

    const { email, password } = req.body;
  
    try {
        const userLogin = await prisma.user.findFirst({
            where: {
                AND: [{ email }, { password }]
            }
        });

        if(!userLogin) {
            return res.status(400).json({
                ok: false,
                message: 'E-mail ou senha incorretos.'
            });
        };

        const token = jwt.sign({ email }, process.env.SECRET_KEY!);

        return res.status(200).json({
            ok: true,
            message: `Seja bem-vindo(a), ${userLogin.full_name}.`,
            token,
            user: {
                name: userLogin.full_name,
                email: userLogin.email
            }
        });
    } catch(err) {
        next(err);
    };
  };
};
