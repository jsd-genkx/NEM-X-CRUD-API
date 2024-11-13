import express from 'express';
import _ from 'lodash';
import { z } from 'zod';
import teachersJson from '../assets/teachers.js';

export const router = express.Router();
const mockTeachers = teachersJson;

router.get('/', getTeachers);
router.get('/:teacherId', getTeacherById);
router.post('/', createTeacher);
router.put('/', updateTeacher);
router.delete('/:teacherId', deleteTeacher);

export async function getTeachers(req, res, next) {
  try {
    res.status(200).send({
      data: mockTeachers
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function getTeacherById(req, res, next) {
  try {
    const { params } = req;
    const teacher = mockTeachers.find(
      mockTeacher => String(mockTeacher.id) === params.teacherId
    );
    res.status(200).send({
      data: teacher
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function createTeacher(req, res, next) {
  try {
    const { body } = req;
    /* start validation */
    const schema = z.object({
      name: z.string().min(1).max(150),
      description: z.string().min(3).max(300),
      address: z.object({
        province: z.string().min(3).max(300),
      }),
    });
    try {
      schema.parse(body);
    } catch (e) {
      throw new Error(e);
    }
    /* end validation */
    const newTeacher = {
      id: Math.round(Math.random() * 10000000000),
      name: body.name,
      description: body.description,
      address: {
        "province": _.get(body, 'address.province')
      }
    };
    mockTeachers.push(newTeacher);
    res.status(200).send({
      message: 'New teacher created!',
      data: newTeacher
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function updateTeacher(req, res, next) {
  try {
    const { body } = req;
    /* start validation */
    const schema = z.object({
      id: z.number(),
      name: z.string().min(1).max(150),
      description: z.string().min(3).max(300),
      address: z.object({
        province: z.string().min(3).max(300),
      }),
    });
    try {
      schema.parse(body);
    } catch (e) {
      throw new Error(e);
    }
    const teacherIndex = mockTeachers.findIndex(mockTeacher => mockTeacher.id === body.id);
    if (teacherIndex === -1) {
      throw { message: 'No teacher for this id' };
    }
    /* end validation */
    const updatedTeacher = {
      id: body.id,
      name: body.name,
      description: body.description,
      address: {
        "province": _.get(body, 'address.province')
      }
    };
    mockTeachers[teacherIndex] = updatedTeacher;
    res.status(200).send({
      message: 'New teacher created!',
      data: updatedTeacher
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}

export async function deleteTeacher(req, res, next) {
  try {
    const { params } = req;
    const teacherIndex = mockTeachers.findIndex(
      mockTeacher => mockTeacher.id === Number(params.teacherId)
    );
    if (teacherIndex === -1) {
      throw { message: 'No teacher for this id' };
    }
    const deletedTeacher = mockTeachers.splice(teacherIndex, 1);
    res.status(200).send({
      message: `Teacher ${params.teacherId} deleted!`,
      data: deletedTeacher[0]
    });
  } catch (err) {
    res.status(400).send({
      status: "failure",
      message: err.message
    });
  }
}