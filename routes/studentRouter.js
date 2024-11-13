import express from 'express';
import _ from 'lodash';
import { z } from 'zod';
// import studentsJson from '../assets/students.js';

export const router = express.Router();
// const mockStudents = studentsJson;

router.get('/', getStudents);
router.get('/:studentId', getStudentById);
router.post('/', createStudent);
router.put('/', updateStudent);
router.delete('/:studentId', deleteStudent);

export async function getStudents(req, res, next) {
  try {
    res.status(200).send({
      message: `Hi Mom!`
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function getStudentById(req, res, next) {
  try {
    res.status(200).send({
      message: `Hi Mom!`
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function createStudent(req, res, next) {
  try {
    res.status(200).send({
      message: `Hi Mom!`
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}


export async function updateStudent(req, res, next) {
  try {
    res.status(200).send({
      message: `Hi Mom!`
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function deleteStudent(req, res, next) {
  try {
    res.status(200).send({
      message: `Hi Mom!`
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}