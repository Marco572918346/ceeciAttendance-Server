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
exports.getCourse = exports.getCourses = void 0;
const course_1 = __importDefault(require("../models/course"));
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCourses = yield course_1.default.findAll();
    res.json(listCourses);
});
exports.getCourses = getCourses;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const course = yield course_1.default.findByPk(id);
    if (course) {
        res.json(course);
    }
    else {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        });
    }
});
exports.getCourse = getCourse;
