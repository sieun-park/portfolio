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
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    prevBtn.style.display = "none";

                }else{
                    preview();
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    nextBtn.style.display = "none";

                }else{
                    preview();
                }
            }

            preview();
            previewBox.classList.add("show");

            closeIcon.onclick = ()=>{
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");

            }

        }
    }
}
