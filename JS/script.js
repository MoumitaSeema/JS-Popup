const popupImgElmArr = Array.from(document.querySelectorAll(".popup_img"))
const popupModalElm = document.querySelector(".popup_modal")
// console.log( popupModalElm.children[0].children[0]);
const popupModalImgElm = document.querySelector(".popup_modal_img")
const closeElm = document.querySelector(".close")

popupImgElmArr.map((item)=>{
    
    item.addEventListener("click",() => {
    let imgsrc = item.children[0].children[0].getAttribute("src")
    popupModalElm.setAttribute("src", imgsrc)
    popupModalElm.style.display = "flex"
    popupModalImgElm.style.transform = "scale(1.8)"
})
closeElm.addEventListener("click", () => {
    popupModalElm.style.display = "none"
})

})



