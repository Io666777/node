import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();
const authController = new AuthController();

router.post('/', (req, res) => authController.createUser(req, res));

export default router;

