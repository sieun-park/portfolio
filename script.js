const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].onclick = ()=>{
            console.log(i);
            previewBox.classList.add("show");
        }
    }
}
