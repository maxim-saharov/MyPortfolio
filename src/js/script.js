//
'use strict'

const outputDateSeconds = () => {
   const date = new Date()
   let output = String(
      date.getHours()
      + ':' + date.getMinutes()
      + ':' + date.getSeconds()
      + ':' + date.getMilliseconds()
   )
   output = output + ''
   return output
}

const
   hamburger = document.querySelector( '.hamburger' ),
   menu = document.querySelector( '.menu' ),
   closeElem = document.querySelector( '.menu__close' ),
   menuItem = document.querySelectorAll( '.menu__link' )

hamburger.addEventListener( 'click', () => {
   menu.classList.add( 'active' )
} )

closeElem.addEventListener( 'click', () => {
   menu.classList.remove( 'active' )
} )

const counters = document.querySelectorAll( '.skills__ratings-counter' ),
   lines = document.querySelectorAll( '.skills__ratings-line span' )

counters.forEach( (item, i) => {
   lines[i].style.width = item.innerHTML
} )

// убираем меню при нажатии
menuItem.forEach( item => {
   item.addEventListener( 'click', () => {
      menu.classList.remove( 'active' )
   } )
} )


//region btnToTop

const btnToTop = document.getElementById( 'btnToTop' )

function scrollFunction() {

   if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
      btnToTop.style.display = 'block'

   } else {
      btnToTop.style.display = 'none'
   }
}

// When the user scrolls down __px from the top of the document, show the button
window.onscroll = function () {
   scrollFunction()
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0 // For Safari
   document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

//endregion


//region btnCallBack
//console.log( 'старт', outputDateSeconds() )

let btnCallBack = document.getElementById( '3db4d4' )

let sayHi = () => {

   if (btnCallBack) {
      if (btnCallBack.classList.contains( 'btn-call-back' )) {
         //console.log( 'уже есть клас', outputDateSeconds() )
      } else {
         btnCallBack.classList.add( 'btn-call-back' )
         const btnCallBackChildNode0 = btnCallBack.childNodes[0]
         btnCallBackChildNode0.style.zIndex = '50'
         //console.log( 'добавили клас', outputDateSeconds() )
      }

   } else {
      btnCallBack = document.getElementById( '3db4d4' )

      if (btnCallBack) {
         btnCallBack.classList.add( 'btn-call-back' )
         //console.log( 'добавили клас сразу', outputDateSeconds() )

         const btnCallBackChildNode0 = btnCallBack.childNodes[0]
         btnCallBackChildNode0.style.zIndex = '50'
         //console.log( 'childNodes', childNodes.style )

      } else {
         //console.log( 'элемент null', outputDateSeconds() )
      }
   }
}

sayHi()

let timerId = setInterval( () => {
   sayHi()
}, 100 )

setTimeout( () => {
   clearInterval( timerId )
   //console.log( 'stop', outputDateSeconds() )
}, 1000 )
//endregion











