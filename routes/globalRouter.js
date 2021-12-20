import express from "express";
import { archive, detail, getLogin, getUpload, home, logout, mission, postLogin, postUpload, userInfo } from "../controller/controller";
import { onlyPrivate, onlyPublic, uploadImg } from "../localMiddleward";
import { routes } from "../routes";

const globalRouter = express.Router();

globalRouter.get("/",home);
globalRouter.get(routes.mission,mission);
globalRouter.get(routes.archive,archive);

globalRouter.get(routes.login,onlyPublic,getLogin);
globalRouter.post(routes.login,onlyPublic,postLogin);

globalRouter.get(routes.userInfo,onlyPrivate,userInfo);

globalRouter.get(routes.upload,onlyPrivate,getUpload);
globalRouter.post(routes.upload,onlyPrivate,uploadImg,postUpload);

globalRouter.get(routes.detail(),detail);

globalRouter.get(routes.logout,onlyPrivate,logout);

export default globalRouter;