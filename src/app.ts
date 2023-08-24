import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes/routes";

class App {
    private app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errorHandling();
    }

    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    errorHandling() {
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            if(err instanceof Error) {
                return res.status(400).json({
                    message: err.message
                });
            }

            return res.status(500).json({
                message: 'Internal Server Error: ' + err
            });
        });
    };

    routes() {
        this.app.use(router);
    }

    listen(port: number) {
        this.app.listen(process.env.PORT || port, () => console.log('Server is running on port ' + port));
    }
}

export { App };
