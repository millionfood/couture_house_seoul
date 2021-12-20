const HOME = "/"
const MISSION = "/mission"
const ARCHIVE = "/archive"
const USER = "/user"
const USERINFO = "/userInfo"
const LOGIN = "/admin"
const LOGOUT = "/logout"
const UPLOAD = "/upload"
const DEAIL = "/detail/:id"


export const routes ={
    home : HOME,
    mission : MISSION,
    archive : ARCHIVE,
    user : USER,
    userInfo : USERINFO,
    login : LOGIN,
    logout : LOGOUT,
    upload : UPLOAD,
    detail(id){
        if(id){
            return `/detail/${id}`
        }else{
            return DEAIL
        }
    }
}

