const mainImgBox = document.querySelector(".detail_img_box");
const subImgBoxContainer = document.querySelector(".detail_img_sub")


const setImgBlockHeight = () =>{
    const subImgBox = subImgBoxContainer.querySelectorAll(".detail_img_box");
    mainImgBox.style.height = mainImgBox.offsetWidth+ "px";
    Array.from(subImgBox).forEach(e=>{
        e.style.height = e.offsetWidth + "px";
    })
}

if(mainImgBox != null){
    console.log("work")
    setImgBlockHeight();
}