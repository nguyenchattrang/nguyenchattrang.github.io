window.addEventListener('scroll', function() {
  const scrollEffect = document.getElementById('scrollEffect');
  const portfolioSection = document.getElementById('portfolio'); // Assuming your portfolio section has id="portfolio"
  const maxWidth = 100; // Maximum width percentage
  let newWidth = 0;

  // Calculate new width based on scroll position relative to portfolio section
  if (portfolioSection) {
    const portfolioOffset = portfolioSection.offsetTop ;
    const scrollY = window.scrollY + window.innerHeight/3;
    if (scrollY + window.screenY> portfolioOffset) {
      newWidth = Math.min(maxWidth, 10 + ((scrollY - portfolioOffset) / 2));
    }
  }

  // Set the width of scrollEffect div
  scrollEffect.style.width = newWidth + '%';
});


// header

window.addEventListener("scroll", function() {
  const header = document.querySelector("#header");
  const navbar = document.querySelector("#mobile-nav-toggle");
  const scrollPosition = window.scrollY;
  if (scrollPosition > this.window.innerHeight/2) {
    header.classList.add("sticky");
    header.style.visibility = "visible";
    navbar.style.visibility = "visible";
  } else {
    header.classList.remove("sticky");
    header.style.visibility = "hidden";
    navbar.style.visibility = "hidden";
  }
});

const letterButton = document.querySelector('.letter-button');
const letterDiv = document.querySelector('.letter');

letterButton.addEventListener('click', function() {
  letterButton.style.display = 'none'; // Hides the button
  letterDiv.style.display = 'block'; // Shows the letter
});
  letterDiv.addEventListener('click', function() {
    letterButton.style.display = 'block'; // Hides the button
    letterDiv.style.display = 'none'; // Shows the letter

});


    // Sparkle effect script
    var colour = "random"; // "random" can be replaced with any valid colour ie: "red"...
    var sparkles = 100; // increase or decrease for the number of sparkles falling

    var x = ox = 800;
    var y = oy = 600;
    var swide = 1600; 
    var shigh = 600; 
    var sleft = sdown = 0;
    var tiny = new Array();
    var star = new Array();
    var starv = new Array();
    var starx = new Array();
    var stary = new Array();
    var tinyx = new Array();
    var tinyy = new Array();
    var tinyv = new Array();
    var banner = document.getElementById("hero");
    var colours=new Array('#FFFFFF', '#F8F8FF', '#F5F5F5', '#FFFAFA', '#F0F8FF', '#E6E6FA', '#F0FFFF', '#F5FFFA', '#FDF5E6')

    window.onload = function () {
      if (document.getElementById) {
        var banner = document.getElementById("hero");
        for (var i = 0; i < sparkles; i++) {
          var rats = createDiv(3, 3);
          rats.classList.add('sparkle');
          rats.style.visibility = "hidden";
          rats.style.zIndex = "999";
          banner.appendChild(tiny[i] = rats);
          starv[i] = 0;
          tinyv[i] = 0;
          rats = createDiv(5, 5);
          rats.style.backgroundColor = "transparent";
          rats.style.visibility = "hidden";
          rats.style.zIndex = "999";
          var rlef = createDiv(1, 5);
          var rdow = createDiv(5, 1);
          rats.appendChild(rlef);
          rats.appendChild(rdow);
          rlef.style.top = "2px";
          rlef.style.left = "0px";
          rdow.style.top = "0px";
          rdow.style.left = "2px";
          banner.appendChild(star[i] = rats);
        }
        set_width();
        sparkle();
      }
    };

    function sparkle() {
      var c;
      if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++) 

          if (!starv[c]) {
            var sparkleWidth = star[c].offsetWidth; // Get the width of the sparkle element
            starx[c] = x - sparkleWidth / 2;
            stary[c] = y + 1;
            star[c].style.left = Math.min(Math.max(starx[c], 0), swide - sparkleWidth) + "px";
          star[c].style.top = (stary[c] = y + 1) + "px";
          star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
          star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour == "random") ? newColour() : colour;
          star[c].style.visibility = "visible";
          starv[c] = 50;
          break;
        }
      }
      for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      setTimeout("sparkle()", 40);
    }

    function update_star(i) {
      if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
      
        starx[i] += (i % 5 - 2) / 5;
       

        if (starx[i] > banner.clientWidth-5) {
            starx[i] = banner.clientWidth-5;
        }

        if (stary[i] < shigh + sdown) {
          star[i].style.top = stary[i] + "px";
          star[i].style.left = starx[i] + "px";


          if (star[i].style.left > window.screen.width - 10) {
          
            star[i].style.display = "none";
            starv[i] = 0;


        }
        }
        else {
          star[i].style.visibility = "hidden";
          starv[i] = 0;
          return;
        }
      }
      else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible"
      }
    }

    function update_tiny(i) {
      if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
      }
      if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        tinyx[i] += (i % 5 - 2) / 5;
        if (tinyy[i] < shigh + sdown) {
          tiny[i].style.top = tinyy[i] + "px";
          tiny[i].style.left = tinyx[i] + "px";

            // Check if tiny sparkle moved outside the visible width
            if (tinyx[i] > banner.clientWidth-5) {
              tinyx[i] = banner.clientWidth-5;
          }

        }
        else {
          tiny[i].style.visibility = "hidden";
          tinyv[i] = 0;
          return;
        }
      }
      else tiny[i].style.visibility = "hidden";
    }

    document.getElementById("hero").onmousemove = function (e) {
      if (e) {
        y = e.pageY - this.offsetTop;
        x = e.pageX - this.offsetLeft;
      }
    };

    window.onresize = set_width;
    function set_width() {
      var sw_min = 999999;
      var sh_min = 999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
        if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
      }
      if (typeof (self.innerWidth) == 'number' && self.innerWidth) {
        if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
        if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
        if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
      }
      if (sw_min == 999999 || sh_min == 999999) {
        sw_min = 800;
        sh_min = 600;
      }
      swide = sw_min;
      shigh = sh_min;
    }

    function createDiv(height, width) {
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = height + "px";
      div.style.width = width + "px";
      div.style.overflow = "hidden";
      return (div);
    }

    function newColour() {

      var colours = ['#FFFFFF', '#F8F8FF', '#F5F5F5', '#FFFAFA', '#F0F8FF', '#E6E6FA', '#F0FFFF', '#F5FFFA', '#FDF5E6'];
  return colours[Math.floor(Math.random() * colours.length)];
    }


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 3000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Testimonials slider
   */
  // new Swiper('.testimonials-slider', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20
  //     },

  //     1200: {
  //       slidesPerView: 3,
  //       spaceBetween: 20
  //     }
  //   }
  // });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

// Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//   interval: false
// });

// // for every slide in carousel, copy the next slide's item in the slide.
// // Do the same for the next, next item.
// $('.multi-item-carousel .item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
  
//   if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//   } else {
//   	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//   }
// });


function showmore()
{
 var a = document.getElementsByClassName('hidden');
 var btn = document.getElementById('showmorebtn');
 for (let i=0;i<a.length;i++)
 {
    a[i].style.display="block";
    a[i].className+="wow fadeIn";
 }
 btn.style.display="none";
}

