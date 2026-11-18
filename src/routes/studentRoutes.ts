import { Router } from 'express';
import { createStudent, deleteStudent, getStudentById, getStudents, updateStudent } from '../controllers/studentController.js';

const router = Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;