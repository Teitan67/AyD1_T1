import { Request, Response } from 'express'

class Calculadora{
    public async sumar(req: Request, res: Response): Promise<Response>{
        const data      = req.body;
        const result    = data.num1 +data.num2
        return res.json({result:result})
    }
    public async resta(req: Request, res: Response): Promise<Response>{
        const data      = req.body;
        const result    = data.num1 -data.num2
        return res.json({result:result})
    }
    public async multiplicar(req: Request, res: Response): Promise<Response>{
        const data      = req.body;
        const result    = data.num1  *data.num2
        return res.json({result:result})
    }
    public async info(req: Request, res: Response): Promise<Response>{
        return res.json({carnet:"201709144",nombre:"Oscar Roberto Velásquez León"})
    }
}


export const calculadora=new Calculadora()