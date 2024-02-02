import { Router } from 'express';
import { getStudent, getStudents, getStudentsByCourse } from '../controllers/student';

const router = Router();

router.get('/', getStudents);
router.get('/byCourse/:courseId', getStudentsByCourse);
router.get('/:id', getStudent);
// router.delete('/:id', deleteStudent);
// router.post('/', postStudent);
// router.put('/:id', updateStudent);

export default router;




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