import { Request, Response } from 'express';
import RollList from '../models/rolllist';

export const getRollsList = async (req: Request, res: Response) => {
    const listRollsList = await RollList.findAll()

    res.json(listRollsList)
}

// export const getRollsList = async (req: Request, res: Response) => {
//     // const listRollsList = await RollList.findAll()

//     // res.json(listRollsList)
//     // // res.json({
//     // //     msg: 'get RollsList'
//     // // })
//     try {
//         const listRollsList = await RollList.findAll({
//             include: [
//                 {
//                     model: User,
//                     as: 'rools',
//                     attributes: ['name', 'lastname', 'secondLastname'],
//                 },
//                 {
//                   model: Course,
//                   as: 'course',
        
//                   attributes: ['name', 'area']
//                 }
//               ]
//         });

//         res.json(listRollsList);
//     } catch (error) {
//         console.error('Error fetching RollsList:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

export const getRollList = async (req: Request, res: Response) => {
    const { id } = req.params;

    const rolllist = await RollList.findByPk(id);

    if (rolllist) {
        res.json(rolllist)
    } else {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        })
    }
}

// export const postRollList = async (req: Request, res: Response) => {
    

//     try {
//         const { body } = req;
//         await RollList.create(body);

//         res.status(200).json({
//             msg: `El RollList fue agregado con exito!`
//         })
//     } catch (error) {
//         console.log(error);
//         res.json({
//             msg: `Upps ocurrio un error, comuniquese con soporte`
//         })
//     }
// }

export const postRollList = async (req: Request, res: Response): Promise<Response> => {
    try {
        const dataRollList = { ...req.body };
        const rollList = await RollList.create(dataRollList);
        return res.status(200).json({
            rollList,
            message: "Se agregó una nueva lista de usuario"
        });
    } catch (error: any) {
        console.error('Error al crear el RollList:', error);
        return res.status(400).json({
            error: true,
            message: `Ocurrió un error con la petición: ${error.message}`
        });
    }
};