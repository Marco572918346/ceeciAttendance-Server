"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const router = (0, express_1.Router)();
router.get('/', student_1.getStudents);
router.get('/byCourse/:courseId', student_1.getStudentsByCourse);
router.get('/:id', student_1.getStudent);
// router.delete('/:id', deleteStudent);
// router.post('/', postStudent);
// router.put('/:id', updateStudent);
exports.default = router;
// import { Router } from 'express';
// import { getStudent, getStudents } from '../controllers/student';
// import User from '../models/user';
// import Course from '../models/course';
// const router = Router();
// router.get('/', getStudents);
// router.get('/:id', getStudent);
// router.get('/users/:courseId', async (req, res) => {
//     try {
//         const students = await User.findAll({
//             include: [{
//                 model: Course,
//                 where: { id: req.params.courseId },
//             }],
//         });
//         res.json(students);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error al obtener estudiantes por curso.' });
//     }
// });
// // router.delete('/:id', deleteStudent);
// // router.post('/', postStudent);
// // router.put('/:id', updateStudent);
// export default router;
