import morgan from 'morgan';
import express, {Application} from 'express';
import cors from 'cors';
import Routes from './routes';

export class App{
    
    app: Application;

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }
    async listen(){
        const puerto = 3000
        await this.app.listen(puerto);
        console.log('Servidor escuchando en el puerto ',puerto);
    }

    routes(){
        this.app.use(Routes);
    }

}

async function main(){
    const app = new App();
    await app.listen();
}

main();