const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i;
        gallery[i].onclick = ()=>{
            console.log(i); 
            function preview(){
                let selectedImgUrl = gallery[i].querySelector("img").src;
                previewImg.scr = selectedImgUrl;
                console.log(selectedImgUrl);
            }
            preview();
            previewBox.classList.add("show");
            closeIcon.onclick = ()=>{
                previewBox.classList.remove("show");

            }
        
        }
    }
}
