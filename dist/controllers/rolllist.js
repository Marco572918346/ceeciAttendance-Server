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
exports.postRollList = exports.getRollList = exports.getRollsList = void 0;
const rolllist_1 = __importDefault(require("../models/rolllist"));
const getRollsList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listRollsList = yield rolllist_1.default.findAll();
    res.json(listRollsList);
});
exports.getRollsList = getRollsList;
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
const getRollList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const rolllist = yield rolllist_1.default.findByPk(id);
    if (rolllist) {
        res.json(rolllist);
    }
    else {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        });
    }
});
exports.getRollList = getRollList;
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
const postRollList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataRollList = Object.assign({}, req.body);
        const rollList = yield rolllist_1.default.create(dataRollList);
        return res.status(200).json({
            rollList,
            message: "Se agregó una nueva lista de usuario"
        });
    }
    catch (error) {
        console.error('Error al crear el RollList:', error);
        return res.status(400).json({
            error: true,
            message: `Ocurrió un error con la petición: ${error.message}`
        });
    }
});
exports.postRollList = postRollList;
