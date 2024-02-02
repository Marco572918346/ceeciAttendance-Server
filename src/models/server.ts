import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesStudent from '../routes/student';
import routesCourse from '../routes/course';
import routesStatus from '../routes/status';
import routesRollList from '../routes/rolllist';
import db from '../db/connection';
// import db from '../db/connectionLocal';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ?? '4001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/users', routesStudent)
        this.app.use('/api/courses', routesCourse)
        this.app.use('/api/statuses', routesStatus)
        this.app.use('/api/rollslist', routesRollList)
    }

    midlewares() {
        // Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        } 
    }
}

export default Server;