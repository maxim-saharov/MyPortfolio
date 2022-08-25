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


document.addEventListener( 'DOMContentLoaded', () => {

   console.log( 'DOM готов!' )

   //region hamburger
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
   //endregion


   //region btnToTop

   const btnToTop = document.getElementById( 'btnToTop' )

   // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
   }

   btnToTop.addEventListener( 'click', topFunction )


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
   //endregion


   //region btnCallBack
   console.log( 'старт', outputDateSeconds() )

   let btnCallBackEl = document.getElementById( '3db4d4' )

   let fooBtnCallBack = () => {

      if (btnCallBackEl) {
         if (btnCallBackEl.classList.contains( 'btn-call-back' )) {
            console.log( 'уже есть клас', outputDateSeconds() )
         } else {
            btnCallBackEl.classList.add( 'btn-call-back' )
            const btnCallBackChildNode0 = btnCallBackEl.childNodes[0]
            btnCallBackChildNode0.style.zIndex = '50'
            console.log( 'добавили клас', outputDateSeconds() )
         }

      } else {
         btnCallBackEl = document.getElementById( '3db4d4' )

         if (btnCallBackEl) {
            btnCallBackEl.classList.add( 'btn-call-back' )
            console.log( 'добавили клас сразу', outputDateSeconds() )

            const btnCallBackChildNode0 = btnCallBackEl.childNodes[0]
            btnCallBackChildNode0.style.zIndex = '50'

         } else {
            console.log( 'элемент null', outputDateSeconds() )
         }
      }
   }

   fooBtnCallBack()

   let timerId = setInterval( () => {
      fooBtnCallBack()
   }, 100 )

   setTimeout( () => {
      clearInterval( timerId )
      console.log( 'stop', outputDateSeconds() )
   }, 2000 )
   //endregion


   //region formContacts
   const formContacts = document.getElementById( 'form-contacts' )

   function onSubmit(event) {
      event.preventDefault()
      console.log( event )
      alert( 'Все формы и отправки на почту работают на сайте \n' +
         'https://maxim-saharov.com.ua/Pulse \n' +
         'здесь можно оставить заявку через кнопку "Call back"' )

   }

   formContacts.addEventListener( 'submit', onSubmit )
   //endregion

} )














