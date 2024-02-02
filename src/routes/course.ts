import { Router } from 'express';
import { getCourse, getCourses } from '../controllers/course';

const router = Router();

router.get('/', getCourses);
router.get('/:id', getCourse);
// router.delete('/:id', deleteCourse);
// router.post('/', postCourse);
// router.put('/:id', updateCourse);

export default router;