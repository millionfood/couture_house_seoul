import { connection } from "../db"

export const home = (req,res)=>{
    // if(req.session.num == undefined && req.session.user == undefined){
    //     req.session.num = 1;
    //     req.session.user = {
    //         name: 'jinhyeok',
    //         age: 22
    //     }
    //     console.log(`${req.session.num} 번 접속ㅜㅜ`)
    //     console.log("user : ",req.session.user)
    // }else{
    //     req.session.num += 1;
    //     console.log(`${req.session.num} 번 접속`)
    //     console.log("user : ",req.session.user)
    // }
    connection.query(`SELECT id, path, title, description FROM chs ORDER BY id DESC`,(err,result)=>{
        if(err){
            console.error("select query error...");
                console.log(err);
                res.render('home',{result});
        }else{
            console.log("select query ok~~")
            res.render('home',{result});
        }
    })
    
} 

export const mission = (req,res)=>{
    res.render('mission')
}

export const archive = (req,res)=>{
    res.render('archive')
}

export const getLogin = (req,res)=>{
    res.render('login')
}

export const postLogin = (req,res) =>{
    // console.log("session :",req.session.user)
    const {
        body:{id, password}
    } = req;
    connection.query(`SELECT id, password FROM chsadmin WHERE id=?`,id,(err,result)=>{
        if(err||result[0]==undefined){
            console.log("id error :",err);
            res.redirect("/admin")
        }else{
            const dbpw = result[0].password;
            if(dbpw == password){
                console.log('login success')
                req.session.user = {
                    name:'sun'
                }
                res.redirect("/")
            }else{
                console.log("pw error")
                res.redirect("/admin")
            }
        }
    })

    


}

export const userInfo = (req,res)=>{
    res.render('userInfo')
}

export const getUpload = (req,res) => {
    res.render('upload')
}

export const postUpload = (req,res) =>{

    const {
        body:{title,description},
        file:{path}
    } = req;

    const pathForMysql = String(path).replaceAll("\\","\\\\");
    connection.query(`insert into chs(path,title,description) values('${pathForMysql}','${title}','${description == null? "" : description}')`,(err,result)=>{
        if(err){
            console.error("insert query error..");
            console.log(err);
            res.redirect("/upload")
        }else{
            console.log("insert query is ok~")
            res.redirect("/")
        }
    })
}

export const logout = (req,res) =>{
    if (req.session.user) {
        req.session.destroy(
            function (err) {
                if (err) {
                    console.log('세션 삭제시 에러');
                    return;
                }
                console.log('세션 삭제 성공');
                //파일 지정시 제일 앞에 / 를 붙여야 root 즉 public 안에서부터 찾게 된다
                res.redirect('/');
            }
        );          //세션정보 삭제

    } else {
        console.log('로그인 되어있지 않습니다.');
        res.redirect('/login');
    }
}