import { Router } from 'express';
import { calculadora } from "./calculadora";
const router = Router();

router.route('/sumar').post(calculadora.sumar);
router.route('/resta').post(calculadora.resta);
router.route('/info').get(calculadora.info);


export default router;