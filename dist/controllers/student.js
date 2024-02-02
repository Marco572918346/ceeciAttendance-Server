"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentsByCourse = exports.getStudent = exports.getStudents = void 0;
const user_1 = __importDefault(require("../models/user"));
const status_1 = __importDefault(require("../models/status"));
const course_1 = __importDefault(require("../models/course"));
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const listStudents = await User.findAll()
    // res.json(listStudents)
    // // res.json({
    // //     msg: 'get Students'
    // // })
    try {
        const listStudents = yield user_1.default.findAll({
            include: [
                {
                    model: status_1.default,
                    as: 'userStatus',
                    attributes: ['name']
                },
                {
                    model: course_1.default,
                    as: 'course',
                    attributes: ['name', 'area']
                }
            ]
        });
        res.json(listStudents);
    }
    catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getStudents = getStudents;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const student = yield user_1.default.findByPk(id);
    if (student) {
        res.json(student);
    }
    else {
        res.status(404).json({
            msg: `No existe un estudiante con el id ${id}`
        });
    }
});
exports.getStudent = getStudent;
const getStudentsByCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    try {
        const listStudents = yield user_1.default.findAll({
            include: [
                {
                    model: status_1.default,
                    as: 'userStatus',
                    attributes: ['name']
                },
                {
                    model: course_1.default,
                    as: 'course',
                    attributes: ['name', 'area'],
                    where: { id: courseId } // Filtrar por el ID del curso
                }
            ]
        });
        res.json(listStudents);
    }
    catch (error) {
        console.error('Error fetching students by course:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getStudentsByCourse = getStudentsByCourse;
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
