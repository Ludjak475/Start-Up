var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
function myFunction() {
    var name = document.loginForm.name.value;
    var number = document.loginForm.number.value;
    var booksname =document.loginForm.booksname.value;
    var addition=document.loginForm.additional.value;
    var descreption=document.loginForm.descreption.value;
    var adress=document.loginForm.adress.value;
    var message=document.loginForm.message.value;
    if( name.length==0 || number.length !==8 || booksname.length==0 || descreption.length==0 || message.length==0){
        return alert("Submition Failed");
    }else{
        return alert("Submitted Succesfully")
    }
}
