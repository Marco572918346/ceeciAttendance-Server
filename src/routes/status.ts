import { Router } from 'express';
import { getStatus, getStatuses } from '../controllers/status';

const router = Router();

router.get('/', getStatuses);
router.get('/:id', getStatus);
// router.delete('/:id', deleteStatus);
// router.post('/', postStatus);
// router.put('/:id', updateStatus);

export default router;