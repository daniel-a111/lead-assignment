import express from 'express';
import * as controllers from './controllers';

const router = express.Router();
router.get('', controllers.getLeadList);
router.post('', controllers.createNewLead);
router.get('/:id', controllers.getSingleLead);
router.put('/:id', controllers.updateLead);
router.delete('/:id', controllers.deleteLead);

export default router;