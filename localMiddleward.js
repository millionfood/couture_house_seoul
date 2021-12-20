import multer from "multer";

const uploadImage = multer({dest:"uploads/img/"})

export const localMiddleware = (req,res,next) =>{
    res.locals.user = req.session.user || null;
    console.log(res.locals.user)
    next();
}

export const onlyPublic = (req,res,next) =>{
    if(req.session.user){
        res.redirect('/')
    }
    next();
}

export const onlyPrivate = (req,res,next) =>{
    if(!req.session.user){
        res.redirect('/')
    }
    next();
}

export const uploadImg = uploadImage.single("imgFile");