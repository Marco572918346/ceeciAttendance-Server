import { Router } from 'express';
import { getRollList, getRollsList, postRollList } from '../controllers/rolllist';

const router = Router();

router.get('/', getRollsList);
router.get('/:id', getRollList);
// router.delete('/:id', deleteRollListpostRollList);
router.post('/', postRollList);
// router.put('/:id', updateRollListpostRollList);

export default router;