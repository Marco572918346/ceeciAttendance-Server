import { Request, Response } from 'express';
import Status from '../models/status';

export const getStatuses = async (req: Request, res: Response) => {
    const listStatuses = await Status.findAll()

    res.json(listStatuses)
}

export const getStatus = async (req: Request, res: Response) => {
    const { id } = req.params;

    const status = await Status.findByPk(id);

    if (status) {
        res.json(status)
    } else {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        })
    }
}
