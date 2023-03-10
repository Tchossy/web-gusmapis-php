/*-----------------------------------------------------------------------------
Tchossy Solution | Angola

author:  tchossy
email:      info@tchossy.com
website:    http://www.tchossy.com
-----------------------------------------------------------------------------*/

jQuery(function ($) {
  'use strict'

  /*------------------------------------------------------------------------------*/
  /* Preloader
/*------------------------------------------------------------------------------*/
  // makes sure the whole site is loaded
  $(window).on('load', function () {
    $('.loader-blob').fadeOut(),
      $('#preloader')
        .delay(300)
        .fadeOut('slow', function () {
          $(this).remove()
        })
  })

  /*------------------------------------------------------------------------------*/
  /* header_search
/*------------------------------------------------------------------------------*/

  $('.header_search').each(function () {
    $('.search_btn', this).on('click', function (e) {
      e.preventDefault()
      e.stopPropagation()

      $('.header_search_content').toggleClass('on')

      if ($('.header_search a').hasClass('open')) {
        $('.header_search a i').removeClass('ti-close').addClass('ti-search')

        $(this).removeClass('open').addClass('sclose')
      } else {
        $('.header_search a').removeClass('sclose').addClass('open')

        $('.header_search a i').removeClass('ti-search').addClass('ti-close')
      }
    })
  })
  /*------------------------------------------------------------------------------*/
  /* header_logo / Nav
/*------------------------------------------------------------------------------*/

  $(document).ready(function () {
    if (matchMedia('only screen and (min-width: 1200px)').matches) {
      $('.header.logo-change')
        .find('img')
        .attr({ src: './images/logo-light.svg' })
    }
  })

  jQuery(window).resize(function () {
    var retina = window.devicePixelRatio > 1 ? true : false

    if (matchMedia('only screen and (max-width: 1200px)').matches) {
      $('.header.logo-change .site-branding')
        .find('img')
        .attr({ src: './images/logo-img.svg' })
    } else {
      $('.header.logo-change .site-branding')
        .find('img')
        .attr({ src: './images/logo-light.svg' })
    }
  })
  /*------------------------------------------------------------------------------*/
  /* Fixed-header
/*------------------------------------------------------------------------------*/

  $(window).scroll(function () {
    if (matchMedia('only screen and (min-width: 1200px)').matches) {
      if ($(window).scrollTop() >= 50) {
        $('.ttm-stickable-header').addClass('fixed-header')
        $('.header.logo-change .ttm-stickable-header')
          .addClass('fixed-header')
          .find('img')
          .attr({ src: './images/logo-img.svg' })
      } else {
        $('.ttm-stickable-header').removeClass('fixed-header')
        $('.header.logo-change .ttm-stickable-header')
          .removeClass('fixed-header')
          .find('img')
          .attr({ src: './images/logo-light.svg' })
      }
    }
  })

  /*------------------------------------------------------------------------------*/
  /* Menu
/*------------------------------------------------------------------------------*/

  function menuhover_item() {
    var tm_menu_item, tm_leftmenu, tm_menu_width, tm_parentli_width
    var tm_sepline = jQuery('.ttm-sepline')
    var active_item = jQuery(
      '#site-header-menu .site-navigation .main-menu > ul:not(.social-icons)'
    ).children('.active')
    if (active_item.length != 0) {
      tm_sepline
        .width(active_item.width())
        .css({ left: active_item.position().left, opacity: 1 })
        .data('origLeft', tm_sepline.position().left)
        .data('origWidth', tm_sepline.width())
    } else {
      tm_sepline.css('opacity', 0)
    }
    jQuery(
      '#site-header-menu .site-navigation .main-menu > ul:not(.social-icons) > li'
    )
      .children('a')
      .hover(
        function () {
          tm_menu_item = jQuery(this)
          tm_leftmenu = tm_menu_item.parent().position().left
          tm_menu_width = tm_menu_item.parent().width()
          tm_sepline
            .stop()
            .animate({ left: tm_leftmenu, width: tm_menu_width, opacity: 1 })
        },
        function () {
          tm_sepline.stop().animate({
            left: tm_sepline.data('origLeft'),
            width: tm_sepline.data('origWidth')
          })
          if (active_item.length == 0) {
            tm_sepline.stop().animate({ opacity: 0 })
          }
        }
      )
    jQuery('#site-header-menu .site-navigation .main-menu ul ul > li')
      .children('a')
      .hover(
        function () {
          tm_menu_item = jQuery(this)
          tm_leftmenu = tm_menu_item
            .parent('ul.menu>.mega-menu-item')
            .closest('li').left
          tm_menu_width = tm_menu_item
            .parent()
            .closest('.main-menu > ul >li')
            .width()
          tm_sepline
            .stop()
            .animate({ left: tm_leftmenu, width: tm_menu_width, opacity: 1 })
        },
        function () {
          tm_sepline.stop().animate({
            left: tm_sepline.data('origLeft'),
            width: tm_sepline.data('origWidth')
          })
          if (active_item.length == 0) {
            tm_sepline.stop().animate({ opacity: 0 })
          }
        }
      )
  }

  jQuery(
    'header #site-header-menu .site-navigation .main-menu > ul.menu'
  ).append("<li class='ttm-sepline'><span class='sep-img'></span></li>")
  menuhover_item()

  var menu = {
    initialize: function () {
      this.Menuhover()
    },

    Menuhover: function () {
      var getNav = $('nav.main-menu'),
        getWindow = $(window).width(),
        getHeight = $(window).height(),
        getIn = getNav.find('ul.menu').data('in'),
        getOut = getNav.find('ul.menu').data('out')

      if (matchMedia('only screen and (max-width: 1200px)').matches) {
        // Enable click event
        $('nav.main-menu ul.menu').each(function () {
          // Dropdown Fade Toggle
          $('a.mega-menu-link', this).on('click', function (e) {
            e.preventDefault()
            var t = $(this)
            t.toggleClass('active').next('ul').toggleClass('active')
          })

          // Megamenu style
          $('.megamenu-fw', this).each(function () {
            $('.col-menu', this).each(function () {
              $('.title', this).off('click')
              $('.title', this).on('click', function () {
                $(this)
                  .closest('.col-menu')
                  .find('.content')
                  .stop()
                  .toggleClass('active')
                $(this).closest('.col-menu').toggleClass('active')
                return false
                e.preventDefault()
              })
            })
          })
        })
      }
    }
  }

  $('.btn-show-menu-mobile').on('click', function (e) {
    $(this).toggleClass('is-active')
    $('.menu-mobile').toggleClass('show')
    return false
    e.preventDefault()
  })

  // Initialize
  $(document).ready(function () {
    menu.initialize()
  })

  /* side-menu */
  $('.side-menu-container').each(function () {
    $('.side-menu > a', this).on('click', function (e) {
      e.preventDefault()
      $('.side-overlay').toggleClass('on')
      $('body').toggleClass('on-side')
    })
  })
  $('.side .close-side').on('click', function (e) {
    e.preventDefault()
    $('.side-overlay').removeClass('on')
    $('body').removeClass('on-side')
  })

  var $bannerSlider = jQuery('.banner_slider')
  var $bannerFirstSlide = $('div.slide:first-child')

  $bannerSlider.on('init', function (e, slick) {
    var $firstAnimatingElements = $bannerFirstSlide.find('[data-animation]')
    slideanimate($firstAnimatingElements)
  })
  $bannerSlider.on(
    'beforeChange',
    function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        'div.slick-slide[data-slick-index="' + nextSlide + '"]'
      ).find('[data-animation]')
      slideanimate($animatingElements)
    }
  )
  $bannerSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 4000,
          swipe: true
        }
      }
    ]
  })

  function slideanimate(elements) {
    var animationEndEvents =
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    elements.each(function () {
      var $this = $(this)
      var $animationDelay = $this.data('delay')
      var $animationType = 'animated ' + $this.data('animation')
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      })

      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType)
      })
    })
  }

  /*------------------------------------------------------------------------------*/
  /* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/

  $('[data-appear-animation]').each(function () {
    var self = $(this)
    var animation = self.data('appear-animation')
    var delay = self.data('appear-animation-delay')
      ? self.data('appear-animation-delay')
      : 0

    if ($(window).width() > 959) {
      self.html('0')
      self.waypoint(
        function (direction) {
          if (!self.hasClass('completed')) {
            var from = self.data('from')
            var to = self.data('to')
            var interval = self.data('interval')
            self.numinate({
              format: '%counter%',
              from: from,
              to: to,
              runningInterval: 2000,
              stepUnit: interval,
              onComplete: function (elem) {
                self.addClass('completed')
              }
            })
          }
        },
        { offset: '85%' }
      )
    } else {
      if (animation == 'animateWidth') {
        self.css('width', self.data('width'))
      }
    }
  })

  /*------------------------------------------------------------------------------*/
  /* Skillbar
/*------------------------------------------------------------------------------*/
  $('.ttm-progress-bar').each(function () {
    $(this).find('.progress-bar').width(0)
  })

  $('.ttm-progress-bar').each(function () {
    $(this)
      .find('.progress-bar')
      .animate(
        {
          width: $(this).attr('data-percent')
        },
        2000
      )
  })

  // Part of the code responsible for loading percentages:

  $('.progress-bar-percent[data-percentage]').each(function () {
    var progress = $(this)
    var percentage = Math.ceil($(this).attr('data-percentage'))

    $({ countNum: 0 }).animate(
      { countNum: percentage },
      {
        duration: 2000,
        easing: 'linear',
        step: function () {
          // What todo on every count
          var pct = ''
          if (percentage == 0) {
            pct = Math.floor(this.countNum) + '%'
          } else {
            pct = Math.floor(this.countNum + 1) + '%'
          }
          progress.text(pct)
        }
      }
    )
  })

  /*------------------------------------------------------------------------------*/
  /* Tab
/*------------------------------------------------------------------------------*/

  $('.ttm-tabs > .tabs')
    .children('li')
    .on('click', function (e) {
      var tab = $(this).closest('.ttm-tabs > .tabs > .tab'),
        index = $(this).closest('.ttm-tabs > .tabs > li').index()

      $(this)
        .parents('.ttm-tabs')
        .children('.tabs')
        .children('li.active ')
        .removeClass('active')

      $(this).addClass('active')
      $(this)
        .addClass('active')
        .parents('.ttm-tabs')
        .children('.content-tab')
        .find('.content-inner')
        .not('.content-inner:eq(' + index + ')')
        .slideUp()
      $(this)
        .addClass('active')
        .parents('.ttm-tabs')
        .children('.content-tab')
        .find('.content-inner:eq(' + index + ')')
        .slideDown()

      e.preventDefault()
    })

  /*------------------------------------------------------------------------------*/
  /* Accordion
/*------------------------------------------------------------------------------*/

  var allPanels = $('.accordion > .toggle').children('.toggle-content').hide()

  $('.toggle-title').on('click', function (e) {
    e.preventDefault()
    var $this = $(this)
    $this
      .parent()
      .parent()
      .find('.toggle .toggle-title a')
      .removeClass('active')

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show')
      $this.next().slideUp('easeInExpo')
    } else {
      $this
        .parent()
        .parent()
        .find('.toggle .toggle-content')
        .removeClass('show')
      $this
        .parent()
        .parent()
        .find('.toggle .toggle-content')
        .slideUp('easeInExpo')
      $this.next().toggleClass('show')
      $this.next().removeClass('show')
      $this.next().slideToggle('easeInExpo')
      $this.next().parent().children().children().addClass('active')
    }
  })

  $(function () {
    jQuery(
      '.img-fluid:not(.alignleft, .alignright, .slider_arrow, .auto_size)'
    ).attr('height', '100%')
  })
  $(function () {
    jQuery(
      '.img-fluid:not(.alignleft, .alignright, .slider_arrow, .auto_size)'
    ).attr('width', '100%')
  })

  /*------------------------------------------------------------------------------*/
  /* Isotope
/*------------------------------------------------------------------------------*/

  $(function () {
    if ($().isotope) {
      var $container = $('.isotope-project')
      $container.imagesLoaded(function () {
        $container.isotope({
          itemSelector: '',
          transitionDuration: '1s'
        })
      })

      $('.portfolio-filter li').on('click', function () {
        var selector = $(this).find('a').attr('data-filter')
        $('.portfolio-filter li').removeClass('active')
        $(this).addClass('active')
        $container.isotope({ filter: selector })
        return false
      })
    }
  })

  /*------------------------------------------------------------------------------*/
  /* Prettyphoto
/*------------------------------------------------------------------------------*/
  $(function () {
    // Normal link
    jQuery(
      'a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]'
    ).each(function () {
      if (
        jQuery(this).attr('target') != '_blank' &&
        !jQuery(this).hasClass('prettyphoto') &&
        !jQuery(this).hasClass('modula-lightbox')
      ) {
        var attr = $(this).attr('data-gal')
        if (
          typeof attr !== typeof undefined &&
          attr !== false &&
          attr != 'prettyPhoto'
        ) {
          jQuery(this).attr('data-rel', 'prettyPhoto')
        }
      }
    })

    jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto()
    jQuery('a.ttm_prettyphoto').prettyPhoto()
    jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto()
    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({ hook: 'data-gal' })
  })
  $(document).ready(function () {
    var e =
      '<div class="prt_floting_customsett">' +
      '<a href="mailto: suporte@gusmapis.com" class="tmtheme_fbar_icons"><i class="fa fa-headphones"></i><span>Suporte_Gusmapis</span></a>' +
      '</div>'

    $('body').append(e)
  })

  /*------------------------------------------------------------------------------*/
  /* Slick_slider
/*------------------------------------------------------------------------------*/
  $('.slick_slider').slick({
    speed: 1000,
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    centerMode: false,

    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  /*------------------------------------------------------------------------------*/
  /* Back to top
/*------------------------------------------------------------------------------*/

  // ===== Scroll to Top ====
  jQuery('#totop').hide()

  $(window).on('scroll', function () {
    if (jQuery(this).scrollTop() >= 500) {
      // If page is scrolled more than 50px
      jQuery('#totop').fadeIn(200) // Fade in the arrow
      jQuery('#totop').addClass('top-visible')
    } else {
      jQuery('#totop').fadeOut(200) // Else fade out the arrow
      jQuery('#totop').removeClass('top-visible')
    }
  })

  jQuery('#totop').on('click', function () {
    // When arrow is clicked
    jQuery('body,html').animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    )
    return false
  })
})

/*------------------------------------------------------------------------------*/
/* margin padding
/*------------------------------------------------------------------------------*/

$(function () {
  jQuery('.ttm-expandcontent-yes').each(function () {
    var cmt_column_div = ''
    var scrren_size = jQuery(window).width()
    var box_size = jQuery(this).parent().width()
    var extra_size = (scrren_size - box_size) / 2
    if (jQuery(this).hasClass('ttm-right-span')) {
      cmt_column_div =
        ', .ttm-expandcontent-yes-wrapper > .expandcontent:not(.tm_column_wrapper)'
      jQuery(
        '.ttm-expandcontent-yes-wrapper > .cmt-col-wrapper-bg-layer' +
          cmt_column_div,
        jQuery(this)
      ).css('margin-right', '-' + extra_size + 'px')
    } else if (jQuery(this).hasClass('ttm-left-span')) {
      cmt_column_div =
        ', .ttm-expandcontent-yes-wrapper > .expandcontent:not(.cmt_column_wrapper)'
      jQuery(
        '.ttm-expandcontent-yes-wrapper > .cmt-col-wrapper-bg-layer' +
          cmt_column_div,
        jQuery(this)
      ).css('margin-left', '-' + extra_size + 'px')
    }
  })
})

!(function (e) {
  'use strict'
  e(window).on('load', function () {
    e('.preloader').fadeOut()
  }),
    e('.preloader').length > 0 &&
      e('.preloaderCls').each(function () {
        e(this).on('click', function (t) {
          t.preventDefault(), e('.preloader').css('display', 'none')
        })
      }),
    (e.fn.vsmobilemenu = function (t) {
      var s = e.extend(
        {
          menuToggleBtn: '.vs-menu-toggle',
          bodyToggleClass: 'vs-body-visible',
          subMenuClass: 'vs-submenu',
          subMenuParent: 'vs-item-has-children',
          subMenuParentToggle: 'vs-active',
          meanExpandClass: 'vs-mean-expand',
          appendElement: '<span class="vs-mean-expand"></span>',
          subMenuToggleClass: 'vs-open',
          toggleSpeed: 400
        },
        t
      )
      return this.each(function () {
        var t = e(this)
        function a() {
          t.toggleClass(s.bodyToggleClass)
          var a = '.' + s.subMenuClass
          e(a).each(function () {
            e(this).hasClass(s.subMenuToggleClass) &&
              (e(this).removeClass(s.subMenuToggleClass),
              e(this).css('display', 'none'),
              e(this).parent().removeClass(s.subMenuParentToggle))
          })
        }
        t.find('li').each(function () {
          var t = e(this).find('ul')
          t.addClass(s.subMenuClass),
            t.css('display', 'none'),
            t.parent().addClass(s.subMenuParent),
            t.prev('a').append(s.appendElement),
            t.next('a').append(s.appendElement)
        })
        var o = '.' + s.meanExpandClass
        e(o).each(function () {
          e(this).on('click', function (t) {
            var a
            t.preventDefault(),
              (a = e(this).parent()),
              e(a).next('ul').length > 0
                ? (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).next('ul').slideToggle(s.toggleSpeed),
                  e(a).next('ul').toggleClass(s.subMenuToggleClass))
                : e(a).prev('ul').length > 0 &&
                  (e(a).parent().toggleClass(s.subMenuParentToggle),
                  e(a).prev('ul').slideToggle(s.toggleSpeed),
                  e(a).prev('ul').toggleClass(s.subMenuToggleClass))
          })
        }),
          e(s.menuToggleBtn).each(function () {
            e(this).on('click', function () {
              a()
            })
          }),
          t.on('click', function (e) {
            e.stopPropagation(), a()
          }),
          t.find('div').on('click', function (e) {
            e.stopPropagation()
          })
      })
    }),
    e('.vs-menu-wrapper').vsmobilemenu()
  var t,
    s,
    a,
    o = '',
    n = '.scrollToTop'
  function i(t) {
    var s = t,
      a = 'is-invalid',
      o = '[name="email"]',
      n = '[name="name"],[name="email"],[name="subject"],[name="message"]',
      i = e(t).next('.form-messages')
    function l() {
      var t,
        l = e(s).serialize()
      ;(t = (function () {
        var t,
          i = !0
        function l(o) {
          o = o.split(',')
          for (var n = 0; n < o.length; n++)
            (t = s + ' ' + o[n]),
              e(t).val()
                ? (e(t).removeClass(a), (i = !0))
                : (e(t).addClass(a), (i = !1))
        }
        l(n),
          e(s + ' ' + o).val() &&
          e(s + ' ' + o)
            .val()
            .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
            ? (e(s + ' ' + o).removeClass(a), (i = !0))
            : (e(s + ' ' + o).addClass(a), (i = !1))
        return i
      })()),
        t &&
          jQuery
            .ajax({ url: e(s).attr('action'), data: l, type: 'POST' })
            .done(function (t) {
              i.removeClass('error'),
                i.addClass('success'),
                i.text(t),
                e(s + ' input:not([type="submit"]),' + s + ' textarea').val('')
            })
            .fail(function (e) {
              i.removeClass('success'),
                i.addClass('error'),
                '' !== e.responseText
                  ? i.html(e.responseText)
                  : i.html(
                      'Oops! An error occured and your message could not be sent.'
                    )
            })
    }
    e(s).on('submit', function (e) {
      e.preventDefault(), l()
    })
  }
  function l(e) {
    return parseInt(e, 10)
  }
  e(window).on('scroll', function () {
    var t, s, a, i, l
    ;(t = e('.sticky-active')),
      (s = 'active'),
      (a = 'will-sticky'),
      (i = e(window).scrollTop()),
      (l = t.css('height')),
      t.parent().css('min-height', l),
      e(window).scrollTop() > 800
        ? (t.parent().addClass(a), i > o ? t.removeClass(s) : t.addClass(s))
        : (t.parent().css('min-height', '').removeClass(a), t.removeClass(s)),
      (o = i),
      e(this).scrollTop() > 500
        ? e(n).addClass('show')
        : e(n).removeClass('show')
  }),
    e(n).each(function () {
      e(this).on('click', function (t) {
        return (
          t.preventDefault(),
          console.log('scroll to top clicked'),
          e('html, body').animate({ scrollTop: 0 }, 1e3),
          !1
        )
      })
    }),
    e('[data-bg-src]').length > 0 &&
      e('[data-bg-src]').each(function () {
        var t = e(this).attr('data-bg-src')
        e(this).css('background-image', 'url(' + t + ')'),
          e(this).removeAttr('data-bg-src').addClass('background-image')
      }),
    e('.vs-hero-carousel').each(function () {
      var t = e(this),
        s = e => t.data(e)
      t
        .on('sliderDidLoad', function (s, a) {
          var o = '.ls-custom-dot',
            n = 'data-slide-go',
            i = a.slides.current.index,
            l = 1
          e(o).each(function () {
            e(this).attr(n, l),
              l++,
              e(this).on('click', function (s) {
                s.preventDefault()
                var a = e(this).attr(n)
                t.layerSlider(parseInt(a))
              })
          }),
            setTimeout(() => {
              t.find('.ls-custom-arrow').each(function () {
                e(this).on('click', function (s) {
                  s.preventDefault()
                  var a = e(this).attr('data-change-slide')
                  t.layerSlider(a)
                })
              })
            }, 1e3),
            e(o + '[' + n + '="' + i + '"').addClass('active')
        })
        .on('slideChangeDidComplete', function (t, s) {
          var a = s.slides.current.index
          e('.ls-custom-dot[data-slide-go="' + a + '"')
            .addClass('active')
            .siblings()
            .removeClass('active')
        }),
        t.layerSlider({
          allowRestartOnResize: !0,
          maxRatio: s('maxratio') ? s('maxratio') : 1,
          type: s('slidertype') ? s('slidertype') : 'responsive',
          pauseOnHover: !!s('pauseonhover'),
          navPrevNext: !!s('navprevnext'),
          hoverPrevNext: !!s('hoverprevnext'),
          hoverBottomNav: !!s('hoverbottomnav'),
          navStartStop: !!s('navstartstop'),
          navButtons: !!s('navbuttons'),
          loop: !1 !== s('loop'),
          autostart: !!s('autostart'),
          height: s('height') ? s('height') : 1080,
          responsiveUnder: s('responsiveunder') ? s('responsiveunder') : 1220,
          layersContainer: s('container') ? s('container') : 1220,
          showCircleTimer: !!s('showcircletimer'),
          skinsPath: 'layerslider/skins/',
          globalBGColor: !!s('ls-bg') && s('ls-bg'),
          globalBGImage: !!s('ls-bg-img') && s('ls-bg-img'),
          thumbnailNavigation: !1 !== s('thumbnailnavigation')
        })
    }),
    e('.vs-carousel').each(function () {
      var t = e(this),
        s = e => t.data(e),
        a =
          '<button type="button" class="slick-prev"><i class="' +
          s('prev-arrow') +
          '"></i></button>',
        o =
          '<button type="button" class="slick-next"><i class="' +
          s('next-arrow') +
          '"></i></button>'
      e('[data-slick-next]').each(function () {
        e(this).on('click', function (t) {
          t.preventDefault(), e(e(this).data('slick-next')).slick('slickNext')
        })
      }),
        e('[data-slick-prev]').each(function () {
          e(this).on('click', function (t) {
            t.preventDefault(), e(e(this).data('slick-prev')).slick('slickPrev')
          })
        }),
        1 == s('arrows') &&
          (t.closest('.arrow-wrap').length ||
            t.closest('.container').parent().addClass('arrow-wrap')),
        t.slick({
          dots: !!s('dots'),
          fade: !!s('fade'),
          arrows: !!s('arrows'),
          speed: s('speed') ? s('speed') : 1e3,
          asNavFor: !!s('asnavfor') && s('asnavfor'),
          autoplay: (s('autoplay'), !1),
          infinite: 0 != s('infinite'),
          slidesToShow: s('slide-show') ? s('slide-show') : 1,
          adaptiveHeight: !!s('adaptive-height'),
          centerMode: !!s('center-mode'),
          autoplaySpeed: s('autoplay-speed') ? s('autoplay-speed') : 8e3,
          centerPadding: s('center-padding') ? s('center-padding') : '0',
          focusOnSelect: !!s('focuson-select'),
          pauseOnFocus: !!s('pauseon-focus'),
          pauseOnHover: !!s('pauseon-hover'),
          variableWidth: !!s('variable-width'),
          vertical: !!s('vertical'),
          verticalSwiping: !!s('vertical'),
          prevArrow: s('prev-arrow')
            ? a
            : '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
          nextArrow: s('next-arrow')
            ? o
            : '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
          rtl: 'rtl' == e('html').attr('dir'),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                arrows: !!s('xl-arrows'),
                dots: !!s('xl-dots'),
                slidesToShow: s('xl-slide-show')
                  ? s('xl-slide-show')
                  : s('slide-show'),
                centerMode: !!s('xl-center-mode'),
                centerPadding: 0
              }
            },
            {
              breakpoint: 1400,
              settings: {
                arrows: !!s('ml-arrows'),
                dots: !!s('ml-dots'),
                slidesToShow: s('ml-slide-show')
                  ? s('ml-slide-show')
                  : s('slide-show'),
                centerMode: !!s('ml-center-mode'),
                centerPadding: 0
              }
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: !!s('lg-arrows'),
                dots: !!s('lg-dots'),
                slidesToShow: s('lg-slide-show')
                  ? s('lg-slide-show')
                  : s('slide-show'),
                centerMode: !!s('lg-center-mode') && s('lg-center-mode'),
                centerPadding: 0
              }
            },
            {
              breakpoint: 992,
              settings: {
                arrows: !!s('md-arrows'),
                dots: !!s('md-dots'),
                slidesToShow: s('md-slide-show') ? s('md-slide-show') : 1,
                centerMode: !!s('md-center-mode') && s('md-center-mode'),
                centerPadding: 0
              }
            },
            {
              breakpoint: 767,
              settings: {
                arrows: !!s('sm-arrows'),
                dots: !!s('sm-dots'),
                slidesToShow: s('sm-slide-show') ? s('sm-slide-show') : 1,
                centerMode: !!s('sm-center-mode') && s('sm-center-mode'),
                centerPadding: 0
              }
            },
            {
              breakpoint: 576,
              settings: {
                arrows: !!s('xs-arrows'),
                dots: !!s('xs-dots'),
                slidesToShow: s('xs-slide-show') ? s('xs-slide-show') : 1,
                centerMode: !!s('xs-center-mode') && s('xs-center-mode'),
                centerPadding: 0
              }
            }
          ]
        })
    }),
    i('.ajax-contact'),
    i('.ajax-contact2'),
    i('.ajax-contact3'),
    (t = '.sidemenu-wrapper'),
    (s = '.sideMenuCls'),
    (a = 'show'),
    e('.sideMenuToggler').on('click', function (s) {
      s.preventDefault(), e(t).addClass(a)
    }),
    e(t).on('click', function (s) {
      s.stopPropagation(), e(t).removeClass(a)
    }),
    e(t + ' > div').on('click', function (s) {
      s.stopPropagation(), e(t).addClass(a)
    }),
    e(s).on('click', function (s) {
      s.preventDefault(), s.stopPropagation(), e(t).removeClass(a)
    }),
    e('.popup-image').magnificPopup({
      type: 'image',
      gallery: { enabled: !0 }
    }),
    e('.popup-video').magnificPopup({ type: 'iframe' }),
    (e.fn.sectionPosition = function (t, s, a) {
      e(this).each(function () {
        var o,
          n,
          i,
          r,
          c,
          d,
          p = e(this)
        ;(o = Math.floor(p.height() / 2)),
          (n = l(p.attr(a))),
          (i = p.attr(t)),
          (r = p.attr(s)),
          (c = l(e(r).css('padding-top'))),
          (d = l(e(r).css('padding-bottom'))),
          'top-half' === i
            ? (e(r).css('padding-bottom', d + o + 'px'),
              p.css('margin-top', '-' + o + 'px'))
            : 'bottom-half' === i
            ? (e(r).css('padding-top', c + o + 'px'),
              p.css('margin-bottom', '-' + o + 'px'))
            : 'top' === i
            ? (e(r).css('padding-bottom', d + n + 'px'),
              p.css('margin-top', '-' + n + 'px'))
            : 'bottom' === i &&
              (e(r).css('padding-top', c + n + 'px'),
              p.css('margin-bottom', '-' + n + 'px'))
      })
    })
  var r,
    c = '[data-sec-pos]'
  function d(e) {
    var t = e.siblings('.indicator'),
      s = e.css('width'),
      a = e.css('height'),
      o = e.position().left,
      n = e.position().top
    e.addClass('active').siblings().removeClass('active'),
      t.css({ left: o + 'px', top: n + 'px', width: s, height: a })
  }
  if (
    (e(c).length &&
      e(c).imagesLoaded(function () {
        e(c).sectionPosition('data-sec-pos', 'data-pos-for', 'data-pos-amount')
      }),
    e('.filter-active, .filter-active2').imagesLoaded(function () {
      var t = '.filter-active',
        s = '.filter-active2',
        a = '.filter-item'
      if (e(t).length > 0)
        var o = e(t).isotope({
          itemSelector: a,
          filter: '*',
          masonry: { columnWidth: 1 }
        })
      if (e(s).length > 0)
        o = e(s).isotope({
          itemSelector: a,
          filter: '*',
          masonry: { columnWidth: a }
        })
      e('.filter-menu-active').on('click', 'button', function (t) {
        t.preventDefault()
        var s = e(this).attr('data-filter')
        o.isotope({ filter: s }),
          e(this).addClass('active'),
          e(this).siblings('.active').removeClass('active')
      })
    }),
    e((r = '.onepage-nav, .main-menu, .vs-mobile-menu')).length > 0 &&
      e(r).each(function () {
        e(this)
          .find('a')
          .each(function () {
            e(this).on('click', function (t) {
              var s = e(this.getAttribute('href'))
              s.length &&
                (t.preventDefault(),
                event.preventDefault(),
                e('html, body')
                  .stop()
                  .animate({ scrollTop: s.offset().top - 10 }, 1e3))
            })
          })
      }),
    new WOW({
      boxClass: 'wow',
      animateClass: 'wow-animated',
      offset: 0,
      mobile: !1,
      live: !0,
      scrollContainer: null,
      resetAnimation: !1
    }).init(),
    e('.login-tab a').each(function () {
      var t = e(this)
      t.hasClass('active') && d(t),
        t.on('mouseover', function () {
          d(e(this))
        })
    }),
    e('.vs-color-plate').length)
  ) {
    var p = e('#plate-color').val()
    e('#plate-color').on('change', function (t) {
      var s = t.target.value
      e('body').css('--theme-color', s)
    }),
      e('#plate-reset').on('click', function () {
        e('body').css('--theme-color', ''), e('#plate-color').val(p)
      }),
      e('#plate-toggler').on('click', function () {
        e('.vs-color-plate').toggleClass('open')
      })
  }
})(jQuery)
