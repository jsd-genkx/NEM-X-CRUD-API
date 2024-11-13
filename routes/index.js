
import express from 'express';
import { router as noobRouter } from './noobRouter.js';
import { router as catRouter } from './catRouter.js';
import { router as mailRouter } from './mailRouter.js';
import { router as paymentRouter } from './paymentRouter.js';

const router = express.Router()

router.get('/', (req, res) => {
  res.json('Hello, world! This is API');
});

router.use('/noob', noobRouter);
router.use('/cat', catRouter);
router.use('/mail', mailRouter);
router.use('/payment', paymentRouter);

export default router;