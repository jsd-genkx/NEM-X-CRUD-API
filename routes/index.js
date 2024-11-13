
import express from 'express';
import { router as teacherRouter } from './teacherRouter.js';
import { router as studentRouter } from './studentRouter.js';

const router = express.Router()

router.get('/', (req, res) => {
  res.json('Hello, world! This is API');
});

router.use('/teacher', teacherRouter);
router.use('/student', studentRouter);

export default router;