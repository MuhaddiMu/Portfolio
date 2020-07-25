/* eslint-disable*/
if (process.client) {
  jQuery.noConflict()

  jQuery(document).ready(function() {
    // Variables

    var body = jQuery('body')
    var screenWidth = body.width()
    var baseURL = window.location.protocol + '//' + window.location.host + '/'

    body.delay(100).animate({ opacity: 1 }, 100, 'easeInOutCirc')

    jQuery('#side #nav ul li a').click(function() {
      window.location.href = baseURL + this.hash
    })

    if (screenWidth > 880) {
      jQuery('#control')
        .css({ left: '-36%' })
        .delay(300)
        .animate({ left: '0' }, 700, 'easeInOutCirc')
      jQuery('#main')
        .css({ opacity: 0 })
        .delay(1000)
        .animate({ opacity: 1 }, 900, 'easeInOutCirc')
      height = jQuery(window).height() - 580
    } else {
      height = jQuery(window).height() - 682
    }
    var screenWidth = body.width()

    if (screenWidth > 880) {
      jQuery('#control')
        .css({ left: '-36%' })
        .delay(300)
        .animate({ left: '0' }, 700, 'easeInOutCirc')
      jQuery('#main')
        .css({ opacity: 0 })
        .delay(1000)
        .animate({ opacity: 1 }, 900, 'easeInOutCirc')
      height = jQuery(window).height() - 580
    } else {
      height = jQuery(window).height() - 682
    }

    var nav = jQuery('#nav')
    navLink = jQuery('#nav li, #secondary_nav li')

    /* CSS */

    nav.find('li:first').addClass('active')

    var topMenu = jQuery('#nav ul'),
      topMenuHeight = topMenu.outerHeight() + 15,
      menuItems = topMenu.find('a'),
      scrollItems = menuItems.map(function() {
        var item = jQuery(jQuery(this).attr('href'))
        if (item.length) return item
      })
    jQuery(window).scroll(function() {
      var fromTop = jQuery(this).scrollTop() + topMenuHeight
      var cur = scrollItems.map(function() {
        if (jQuery(this).offset().top < fromTop) return this
      })
      cur = cur[cur.length - 1]
      var id = cur && cur.length ? cur[0].id : ''
      menuItems
        .parent()
        .removeClass('active')
        .end()
        .filter('[href="#' + id + '"]')
        .parent()
        .addClass('active')
    })
  })
}
