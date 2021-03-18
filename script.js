const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = ()=>{

            clickImgIndex = newIndex;
            console.log(i);
            function preview(){
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length-1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    prevBtn.style.display = "none";
                }else{
                    nextBtn.style.display = "block";
                }
                preview();
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    nextBtn.style.display = "none";
                }else{
                    prevBtn.style.display = "block";
                }
                preview();

            }

            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";


            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";


            }

        }
    }
}

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = documenr.querySelector(".navbar ul");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick(){
    navbarToggler.classList.toggle("open-navber-toggler");
    navbarMenu.classList.toggle("open");
}
  