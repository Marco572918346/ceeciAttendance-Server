import { Request, Response } from 'express';
import User from '../models/user';
import Status from '../models/status';
import Course from '../models/course';

export const getStudents = async (req: Request, res: Response) => {
    // const listStudents = await User.findAll()

    // res.json(listStudents)
    // // res.json({
    // //     msg: 'get Students'
    // // })
    try {
        const listStudents = await User.findAll({
            include: [
                {
                  model: Status,
                  as: 'userStatus',
        
                  attributes: ['name']
                },
                {
                  model: Course,
                  as: 'course',
        
                  attributes: ['name', 'area']
                }
              ]
        });

        res.json(listStudents);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getStudent = async (req: Request, res: Response) => {
    const { id } = req.params;

    const student = await User.findByPk(id);

    if (student) {
        res.json(student)
    } else {
        res.status(404).json({
            msg: `No existe un estudiante con el id ${id}`
        })
    }
}

export const getStudentsByCourse = async (req: Request, res: Response) => {
    const { courseId } = req.params;

    try {
        const listStudents = await User.findAll({
            include: [
                {
                    model: Status,
                    as: 'userStatus',
                    attributes: ['name']
                },
                {
                    model: Course,
                    as: 'course',
                    attributes: ['name', 'area'],
                    where: { id: courseId } // Filtrar por el ID del curso
                }
            ]
        });

        res.json(listStudents);
    } catch (error) {
        console.error('Error fetching students by course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// export const deleteProduct = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const product = await Producto.findByPk(id);

//     if (!product) {
//         res.status(404).json({
//             msg: `No existe un producto con el id ${id}`
//         })
//     } else {
//         await product.destroy();
//         res.json({
//             msg: 'El producto fue eliminado con exito!'
//         })
//     }

// }

// export const postProduct = async (req: Request, res: Response) => {
//     const { body } = req;

//     try {
//         await Producto.create(body);

//         res.json({
//             msg: `El producto fue agregado con exito!`
//         })
//     } catch (error) {
//         console.log(error);
//         res.json({
//             msg: `Upps ocurrio un error, comuniquese con soporte`
//         })
//     }
// }

// export const updateProduct = async (req: Request, res: Response) => {
//     const { body } = req;
//     const { id } = req.params;

//     try {

//         const product = await Producto.findByPk(id);

//     if(product) {
//         await product.update(body);
//         res.json({
//             msg: 'El producto fue actualziado con exito'
//         })

//     } else {
//         res.status(404).json({
//             msg: `No existe un producto con el id ${id}`
//         })
//     }
        
//     } catch (error) {
//         console.log(error);
//         res.json({
//             msg: `Upps ocurrio un error, comuniquese con soporte`
//         })
//     }

    
// }