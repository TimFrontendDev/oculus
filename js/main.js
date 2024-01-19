'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(e){
    e.addEventListener('click', open);
})

function open(event){
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(i){
        i.classList.remove('tabs__content-item--active');
    })

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

//Для menu--active

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
})