import { Router } from 'express';
import { calculadora } from "./calculadora";
const router = Router();

router.route('/sumar').post(calculadora.sumar);


export default router;