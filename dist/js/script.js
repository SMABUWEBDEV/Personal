// Navbar Fixed
window.onscroll=function(){
    const header=document.querySelector('header');
    const fixedNav=header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
};

// Hamburger
const hamburger = document.querySelector('#hamburger'); // Menambahkan titik sebelum kelas 'hamburger'
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
let clientID = "3G3o5OBjyqa9MSygP_oIFu3q0JxdW7LmZ9yZSbjoIRg";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");


fetch(endpoint) 
    .then(function (response){
        return response.json();
    })
    .then(function(jsonData){
        imageElement.src = jsonData.urls.small;
        
    })

var today = new Date();
var dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var dayOfWeek = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var dayName = dayNames[dayOfWeek];
var monthName = monthNames[month];