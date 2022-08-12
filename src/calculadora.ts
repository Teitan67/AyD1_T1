import { Request, Response } from 'express'

class Calculadora{
    public async sumar(req: Request, res: Response): Promise<Response>{
        const data      = req.body;
        const result    = data.num1 +data.num2
        return res.json({result:result})
    }
}


export const calculadora=new Calculadora()