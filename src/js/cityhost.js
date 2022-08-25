//
// это просто для изучения этого скрипта
//<script defer src='https://callback.cityhost.ua/js/' data-lang='ru'></script>

!function (a) {
   return 'undefined' != typeof window.callbackcityhost ? null : (window.callbackcityhost = !0, void a.addEventListener( 'DOMContentLoaded', function () {
      function f() {
         if ('undefined' != typeof d) {
            var a = XMLHttpRequest, b = new a
            b.open( 'POST', e + 'f', !0 ), b.onload = function () {
               h( this.responseText )
            }, b.send()
         }
      }

      function g(a) {
         return '{}' == JSON.stringify( a ) || '[]' == JSON.stringify( a )
      }

      function h(b) {
         function f() {
            var b = a.getElementById( 'cbch_modal_callback_button' )
            b.classList.contains( 'showtext' ) ? b.classList.remove( 'showtext' ) : b.classList.add( 'showtext' )
         }

         var c
         if ('string' == typeof b && 0 != b.length) {
            var d = JSON.parse( b )
            if ('object' == typeof d && null != d.css && null != d.html && '' != d.css && '' != d.html) {
               for (var e = 0; e < d.css.length; e++) c = a.createElement( 'link' ), c.rel = 'stylesheet', c.href = d.css[e], a.body.appendChild( c )
               c = a.createElement( 'div' ), c.id = '3db4d4', c.innerHTML = d.html, a.body.appendChild( c )
               var h = a.getElementsByClassName( 'cbk-phote-phone' ), j = a.getElementsByClassName( 'cbk-phote-text' )
               1 == h.length && 1 == j.length && setInterval( f, 1e3 )
               var k = a.querySelector( '#cbch_modal_callback_button' )
               if (void 0 != typeof d.button_classes && null != d.button_classes && !g( d.button_classes )) for (key in d.button_classes) k.classList.add( d.button_classes[key] )
               i()
            }
         }
      }

      function i() {
         function b() {
            var b = a.getElementById( 'cbch_modal_callback' )
            if (b.style.display = 'block', !a.getElementById( 'cbch_modal_callback_background' )) {
               var c = a.createElement( 'div' )
               c.id = 'cbch_modal_callback_background', c.onclick = function () {
                  d()
               }, a.body.appendChild( c )
            }
         }

         function c() {
            var b = a.getElementById( 'cbch_modal_callback' )
            b.style.display = 'none'
            var c = a.getElementById( 'cbch_modal_callback_background' )
            a.body.removeChild( c )
         }

         function d() {
            c()
         }

         function f(b) {
            if (b.preventDefault(), 'undefined' == typeof e) return !1
            a.querySelector( '#cbch_modal_callback button[type=submit]' ).disabled = 'disabled', a.querySelector( '#cbch_modal_callback .cbch_status' ).innerHTML = ''
            var c = 'onload' in new XMLHttpRequest ? XMLHttpRequest : XDomainRequest, d = new c
            d.open( 'POST', e + 'c', !0 ), d.timeout = 1e4, d.onload = function () {
               g( JSON.parse( this.responseText ) )
            }, d.onerror = function () {
               a.querySelector( '#cbch_modal_callback button[type=submit]' ).disabled = ''
            }, d.ontimeout = function () {
               a.querySelector( '#cbch_modal_callback button[type=submit]' ).disabled = ''
            }
            var f = a.querySelector( '#cbch_modal_callback input[name=cbname]' ).value,
               h = a.querySelector( '#cbch_modal_callback input[name=cbphone]' ).value,
               i = a.querySelector( '#cbch_modal_callback input[name=cbcaptcha]' ).value
            return d.send( JSON.stringify( {name: f, phone: h, captcha: i} ) ), !1
         }

         function g(b) {
            b.ok ? a.querySelector( '#cbch_modal_callback > div' ).innerHTML = '<span class="cbch_result">' + b.msg + '</span>' : (a.querySelector( '#cbch_modal_callback button[type=submit]' ).disabled = '', a.querySelector( '#cbch_modal_callback .cbch_status' ).innerHTML = b.msg)
         }

         a.querySelector( '#cbch_modal_callback form' ).onsubmit = f, a.getElementById( 'cbch_modal_callback_button' ).addEventListener( 'click', b ), a.querySelector( '#cbch_modal_callback a.cbch_close' ).onclick = c
      }

      var b = a.querySelector( 'script[src*="callback.cityhost.ua"]' ),
         c = null != b.getAttribute( 'data-lang' ) ? b.getAttribute( 'data-lang' ) + '/' : '',
         d = b.src.match( new RegExp( 'https?://[^/]+' ) ), e = d + '/' + c
      f()
   } ))
}( document )