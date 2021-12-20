const imgBlocks = document.querySelectorAll(".imgBlock_img");

const setImgBlockHeight = () =>{
    Array.from(imgBlocks).forEach(e=>{
        e.style.height = e.offsetWidth+"px";
    })
}

window.addEventListener('resize', setImgBlockHeight);

setImgBlockHeight();