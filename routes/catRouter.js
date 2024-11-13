import express from 'express';
export const router = express.Router();
router.get('/', getCat);

export async function getCat(req, res, next) {
  try {
    const { query } = req;
    res.status(200).send({
      data: { name: 'cat1', weight: query.weight || 8 },
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}