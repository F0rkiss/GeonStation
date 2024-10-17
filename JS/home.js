const splashScreen = document.querySelector('.splashScreen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() => {
        splashScreen.classList.add('display-none');
    }, 1000);
})