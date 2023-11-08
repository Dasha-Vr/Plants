console.log('1.При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n 2.Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n 3.В разделе contacts реализован select с выбором городов +25\n Итог: 100 баллов');

const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const scr = document.querySelector('.main');
const buttonServiceOne = document.querySelector('.one-s');
const blur1 = document.querySelector('.forBlurOne');
const blur2 = document.querySelector('.forBlurTwo');
const blur3 = document.querySelector('.forBlurThree');
const blur4 = document.querySelector('.forBlurFour');
const blur5 = document.querySelector('.forBlurFive');
const blur6 = document.querySelector('.forBlurSix');
const buttonServiceTwo = document.querySelector('.two-s');
const buttonServiceThree = document.querySelector('.three-s');
const inner = document.querySelector('.service');
const innerTwo = document.querySelector('.inner-items');
const buttons = document.querySelector('.buttons');
const priceOne = document.querySelector('.price-one');
const priceBasics = document.querySelector('price-basics');
const orderOne = document.querySelector('.order-one');
const priceTwo = document.querySelector('.price-two');
const orderTwo = document.querySelector('.order-two');
const orderThree = document.querySelector('.order-three');
const priceThree = document.querySelector('.price-three');
const contactItem = document.querySelector('.contacts-item')
const townsOpenOne = document.querySelector('.towns-open-one')
const CanandaiguaSelectet = document.querySelector('.contacts-text-Canandaigua')
const NYSelectet = document.querySelector('.contacts-text-NY')
const YonkersSelectet = document.querySelector('.contacts-text-Yonkers')
const SherrillSelectet = document.querySelector('.contacts-text-Sherrill')
const CanContacts = document.querySelector('.Canandaigua-contacts')
const townsOpenTwo = document.querySelector('.towns-open-two')
const NYContacts = document.querySelector('.NY-contacts')
const townsOpenThree = document.querySelector('.towns-open-three')
const YonContacts = document.querySelector('.Yonkers-contacts')
const townsOpenFour = document.querySelector('.towns-open-four')
const SherrillContacts = document.querySelector('.Sherrill-contacts')
const CallCan = document.querySelector('.call-Can-button')



townsOpenFour.addEventListener('click', function () {
    contactItem.classList.toggle('open-Sherrill')
    contactItem.classList.remove('open-Yonkers')
    contactItem.classList.remove('open-Canandaigua')
    contactItem.classList.remove('open-NY')
});

YonContacts.addEventListener('click', function () {
    contactItem.classList.remove('open-Yonkers')
});

SherrillContacts.addEventListener('click', function () {
    contactItem.classList.remove('open-Sherrill')
});

townsOpenThree.addEventListener('click', function () {
    contactItem.classList.toggle('open-Yonkers')
    contactItem.classList.remove('open-Canandaigua')
    contactItem.classList.remove('open-NY')
    contactItem.classList.remove('open-Sherrill')
});

NYSelectet.addEventListener('click', function (){
    contactItem.classList.remove('open-NY')

});

YonkersSelectet.addEventListener('click', function (){
    contactItem.classList.remove('open-Yonkers')

});

SherrillSelectet.addEventListener('click', function (){
    contactItem.classList.remove('open-Sherrill')

});

townsOpenTwo.addEventListener('click', function () {
    contactItem.classList.toggle('open-NY')
    contactItem.classList.remove('open-Canandaigua')
    contactItem.classList.remove('open-Yonkers')
    contactItem.classList.remove('open-Sherrill')
});

NYContacts.addEventListener('click', function () {
    contactItem.classList.remove('open-NY')
});

CanContacts.addEventListener('click', function () {
    contactItem.classList.remove('open-Canandaigua')
    
});

townsOpenOne.addEventListener('click', function () {
    contactItem.classList.toggle('open-Canandaigua')
    contactItem.classList.remove('open-NY')
    contactItem.classList.remove('open-Yonkers')
    contactItem.classList.remove('open-Sherrill')
});

CanandaiguaSelectet.addEventListener('click', function (){
    contactItem.classList.remove('open-Canandaigua')

});



contactItem.addEventListener('click', function () {
    contactItem.classList.toggle('contact-open')
    

});

orderOne.addEventListener('click', function () {
    priceOne.classList.toggle('basics')
    
    
});

orderTwo.addEventListener('click', function () {
    priceTwo.classList.toggle('basics-two')
    
    
});


orderThree.addEventListener('click', function () {
    priceThree.classList.toggle('basics-three')
    
    
});

priceThree.addEventListener('click', function () {
    priceThree.classList.toggle('basics-three')
    priceTwo.classList.remove('basics-two')
    priceOne.classList.remove('basics')
    
    
});

priceOne.addEventListener('click', function () {
    priceOne.classList.toggle('basics')
    priceTwo.classList.remove('basics-two')
    priceThree.classList.remove('basics-three')
    
});

priceTwo.addEventListener('click', function () {
    priceTwo.classList.toggle('basics-two')
    priceOne.classList.remove('basics')
    priceThree.classList.remove('basics-three')
});



buttonServiceOne.addEventListener('click', function () {
    buttons.classList.toggle('click-one');
    inner.classList.toggle('focus');
    innerTwo.classList.toggle('focus');
    
});


buttonServiceTwo.addEventListener('click', function()  {
    buttons.classList.toggle('click-two');
    inner.classList.toggle('focus-two');
    innerTwo.classList.toggle('focus-two');

});


buttonServiceThree.addEventListener('click', function () {
    buttons.classList.toggle('click-three');
    inner.classList.toggle('focus-three');
    innerTwo.classList.toggle('focus-three');
    
});






btn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');

});

nav.addEventListener ('click', () => {
    nav.classList.remove('nav-open');

});



scr.addEventListener ('click', () => {
    nav.classList.remove('nav-open');

});

btn.addEventListener('click', () => {
    btn.classList.toggle('hamburger__line-rotate');
});

scr.addEventListener('click', () => {
    btn.classList.remove('hamburger__line-rotate');
});

nav.addEventListener ('click', () => {
    btn.classList.remove('hamburger__line-rotate');

});




