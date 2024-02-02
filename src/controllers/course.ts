import { Request, Response } from 'express';
import Course from '../models/course';

export const getCourses = async (req: Request, res: Response) => {
    const listCourses = await Course.findAll()

    res.json(listCourses)
}

export const getCourse = async (req: Request, res: Response) => {
    const { id } = req.params;

    const course = await Course.findByPk(id);

    if (course) {
        res.json(course)
    } else {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        })
    }
}
