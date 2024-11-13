import express from 'express';
export const router = express.Router();


router.get('/', getInformation);
router.get('/:yourParam', getInformation2);
router.post('/', addInformation);

export async function getInformation(req, res, next) {
  try {
    res.status(200).send("Welcome!");
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function getInformation2(req, res, next) {
  try {
    const { params } = req
    res.status(200).send({
      data: [
        { name: params.yourParam || 'dog', weight: 45 },
        { name: 'rat', weight: 1.25 }
      ],
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function addInformation(req, res, next) {
  const { body } = req;
  try {
    res.status(200).send({ yourBody: body });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}