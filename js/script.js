window.addEventListener('scroll',function(){
    const wScroll = window.pageYOffset;
    const aboutContent1 = document.querySelector('.about-content1');
    const aboutContent2 = document.querySelector('.about-content2');
    const aboutContent3 = document.querySelector('.about-content3');
    const about = document.querySelector("#about");
    if(wScroll >= (about.offsetTop-300)){
        about.style.backgroundColor="orange";
        about.style.transition="1s";
    }else{
        about.style.backgroundColor="white";
        about.style.transition="1s";
    }
    if(wScroll>= 1080 && wScroll<=1839){
        aboutContent1.style.display="none";
        aboutContent2.style.display="block";
        aboutContent2.classList.add('fade-in-left');
        aboutContent3.style.display="none";
    }else if(wScroll>=1840){
        aboutContent1.style.display="none";
        aboutContent2.style.display="none";
        aboutContent3.style.display="block";
        aboutContent3.classList.add('fade-in-left');
    }
    else{
        aboutContent1.style.display="block";
        aboutContent1.classList.add('fade-in-left');
        aboutContent2.style.display="none";
        aboutContent3.style.display="none";
    }
    console.log(wScroll);
});

const tourOption1 = document.querySelector('.tour-option1');
const tourOption2 = document.querySelector('.tour-option2');
const tourOption3 = document.querySelector('.tour-option3');
const tourOption4 = document.querySelector('.tour-option4');
const tourOption5 = document.querySelector('.tour-option5');
const tourOption6 = document.querySelector('.tour-option6');

const jakarta = document.querySelector('.tour-jakarta');
const bandung = document.querySelector('.tour-bandung');
const yogyakarta = document.querySelector('.tour-yogyakarta');
const malang = document.querySelector('.tour-malang');
const bali = document.querySelector('.tour-bali');
const padang = document.querySelector('.tour-padang');

tourOption1.addEventListener('click',function(){
    jakarta.style.display="block";
    jakarta.classList.add('fade-in')
    bandung.style.display="none";
    yogyakarta.style.display="none";
    malang.style.display="none";
    bali.style.display="none";
    padang.style.display="none";
});

tourOption2.addEventListener('click',function(){
    jakarta.style.display="none";
    bandung.style.display="block";
    bandung.classList.add('fade-in')
    yogyakarta.style.display="none";
    malang.style.display="none";
    bali.style.display="none";
    padang.style.display="none";
});

tourOption3.addEventListener('click',function(){
    jakarta.style.display="none";
    bandung.style.display="none";
    yogyakarta.style.display="block";
    yogyakarta.classList.add('fade-in')
    malang.style.display="none";
    bali.style.display="none";
    padang.style.display="none";
});

tourOption4.addEventListener('click',function(){
    jakarta.style.display="none";
    bandung.style.display="none";
    yogyakarta.style.display="none";
    malang.style.display="block";
    malang.classList.add('fade-in')
    bali.style.display="none";
    padang.style.display="none";
});

tourOption5.addEventListener('click',function(){
    jakarta.style.display="none";
    bandung.style.display="none";
    yogyakarta.style.display="none";
    malang.style.display="none";
    bali.style.display="block";
    bali.classList.add('fade-in')
    padang.style.display="none";
});

tourOption6.addEventListener('click',function(){
    jakarta.style.display="none";
    bandung.style.display="none";
    yogyakarta.style.display="none";
    malang.style.display="none";
    bali.style.display="none";
    padang.style.display="block";
    padang.classList.add('fade-in')
});