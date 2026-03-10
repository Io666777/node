import {Router} from 'express'
import * as eService from './exam.service.js'

const router = Router();

router
    .route('/')
    .get(async(req,res)=>{
        const e = await eService.getAll();
        res.json(e);
    })
    .post(async(req,res)=>{
        const newT = await eService.create(req.body);
        res.json(newT);
    });
    router
    .route('/:id')
    .get(async(req,res)=>{
        const e =await eService.getById(req.params.id);
        res.json(e)
    })
    .put(async(req,res)=>{
        const update = await eService.update(req.params.id, req.body);
    })
    .delete(async(req,res)=>{
        const remove = await eService.remove(req.params.id);
    });
    router.route('/:id:teacher')
    .get(async(req,res)=>{
        const exams = await eService.getTeacherExams(req.params.id);
    });
export default router;