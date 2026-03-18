import { Router } from 'express';
import aController from './abiturient.controller';

const router = Router();
 
router.get('/', aController.getAll);           
router.post('/', aController.create);    
     
router.get('/:id', aController.getById);       
router.patch('/:id', aController.update);     
router.delete('/:id', aController.remove);      
 
router.get('/:id/exams', aController.getExams);

export default router;