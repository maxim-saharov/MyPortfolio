//

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





