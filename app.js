// SWUP
gsap.set(".overlay", {autoAlpha:0, scaleY: 0})
const options = [
{
	from: '(.*)',
	to: '(.*)',

// IZLAZNA ANIMACIJA
	in: function(next) {
		document.querySelector('#swup').style.opacity = 0;
      gsap.to(document.querySelector('#swup'), {opacity: 1, duration: 0.5})
			gsap.to( "#over-one, #over-two, #over-three", {scaleY: 0, transformOrigin: "top", ease: "Expo.easeInOut", stagger:0.1})
				gsap.set(".overlay", {scaleY: 0, delay: 1, onComplete: next});
  },

// ULAZNA ANIMACIJA
	out: (next) => {
		document.querySelector('#swup').style.opacity = 1;
      gsap.to(document.querySelector('#swup'), {opacity: 0, delay:0.5, duration: 0.5})
 			gsap.set(".overlay", {height: "100vh", duration: 0.01})
			gsap.to(".overlay", {autoAlpha:1, scaleY: 1},"<")
			gsap.set("#over-one, #over-two, #over-three", {scaleY: 0, transformOrigin: "bottom"})
			gsap.to( "#over-one, #over-two, #over-three", {scaleY: 1, transformOrigin: "bottom", ease: "Expo.easeInOut", stagger:0.1, onComplete: next});
		setTimeout(next, 6000);
    }
  }
];

// SWUP main

const swup = new Swup({
			animateHistoryBrowsing: true,
			linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a.swup-link, a[href^="#"]:not([data-no-swup])',
  
  cache: true,
			containers: ['#swup'],
			requestHeaders: {
				'X-Requested-With': 'swup',
				Accept: 'text/html, application/xhtml+xml'
},
	 plugins: [
      	new SwupPreloadPlugin(),
        new SwupGaPlugin(),
        new SwupScrollPlugin({
    		animateScroll: false,
	  }),    
        new SwupJsPlugin(options)
      ],
	skipPopStateHandling: function skipPopStateHandling(event) {
		return !(event.state && event.state.source === 'swup');
	}
});
   
function init() {

// ALL JS
    if (document.querySelector('#all')) {

  // Reinitialize webflow modules
      Webflow.destroy();
      Webflow.ready();
      Webflow.require('ix2').init();  
      console.log("WEBFLOW RELOAD");
           
// LOCOMOTIVE SCROLL
(function() {
	var scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		repeat: true,
		smooth: true,
		getSpeed: true,
		getDirection: true,
		useKeyboard: true,
});

// FIX ZA SCROLL 1
setTimeout(() => window.dispatchEvent(new Event('resize')), 100);

console.log("JS SCROLL FIX");

/////// HEADER SHOW HIDE
scroll.on('scroll', (instance) => {
      document.documentElement.setAttribute('data-direction', instance.direction)
});

/////// MOBILE MENU - OPEN CLOSE

// OPEN MENU FROM CLICK
const openmenu = document.getElementById('openmenu');
const closemenu = document.getElementById('close');
// OPEN MENU
const animation = gsap.timeline({defaults:{x: -15, autoAlpha: 0, duration: 0.3, ease: "power1.out"}})
//animation.paused( true );
animation
	.to(".mobile-menu-wrapper", {autoAlpha:1, x:0, width: "100vw"})
	.from(".m1, .m2, .m3", {stagger:0.05}, "<0.05")
	.from(".m4, .m5, .m6", {stagger:0.05}, "<0.05")
	.from(".m7, .m8, .m9", {stagger:0.05}, "<0.05")
	.from(".m10, .m11, .m12", {stagger:0.05}, "<0.05")
	.from(".m13, .m14, .m15", {stagger:0.05}, "<0.05")
	.from(".m16, .m17", {stagger:0.05}, "<0.05")
// CLOSE MENU
const aniout = gsap.timeline({defaults:{duration: 0.3, ease: "power1.out"}})
aniout
.to(".mobile-menu-wrapper", {width: "0vw"})

// EVENT LISTENERS
openmenu.addEventListener("click", function(){ animation.restart(), animation.play(); });
closemenu.addEventListener("click", function(){ aniout.restart(), aniout.play(); });

// SCROLL TO TOP
$( "#totop" ).on( "click", function() {
	scroll.scrollTo('#start', 0)
});

// Dynamic Copyright Year
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;

console.log("ALL SCRIPTS reloaded");

// ----------------------------------------------------------------------

// HOME JS
if (document.querySelector('#swiper, #home')) {
 
var mq = window.matchMedia( "(max-width: 999px)" );
if (mq.matches) {
var tl = gsap.timeline({defaults:{duration:0.3, autoAlpha:0, ease: "power2.Out"}});
	tl.from(".h2, .h1, .h3, .h4", {})
}
else {
var tl = gsap.timeline({defaults:{duration:0.5, y:100, autoAlpha:0, ease: "power2.Out"}});
	tl.from(".h2, .h1, .h3, .h4", {stagger:0.1})
}
      
var swiperdue = new Swiper('.swiper-container2', {
		slidesPerView: 1,
		spaceBetween: 0,
		allowTouchMove: false,
		loop: true,
		speed: 1000,
});

var swipertre = new Swiper('.swiper-containerx', {
		slidesPerView: 1,
		allowTouchMove: false,
		spaceBetween: 100,
		controller: {
			control: [swiperdue]
},
		loop: true,
		speed: 1000,
});

var interleaveOffset = 0.5;

var menu = ['', '', '']

var swiperOptions = {
		loop: true,
		speed: 1000,
		grabCursor: true,
		mousewheel: true,
		direction: 'horizontal',
		resistanceRatio:0.5,
		controller: {
				control: [swipertre]
},
		slidesPerView: 1,
		longSwipes:true,
		longSwipesRatio:0.5,
		touchRatio:5,
		spaceBetween: 0,
		parallax: true,
		//preloadImages: true,
		watchSlidesProgress: true,
  		updateOnWindowResize: true,
			updateOnImagesReady: true,
				breakpoints: {
					500: {
						spaceBetween: 0,
						slidesPerView: 1
},
					1e3: {
						spaceBetween: 0,
						slidesPerView: 1
},
					1200: {
						spaceBetween: 0,
						slidesPerView: 1
}
},
		autoplay: {
				delay: 2500,
				disableOnInteraction: false,
},
on: {
progress: function() {
	var swiper = this;
	for (var i = 0; i < swiper.slides.length; i++) {
		var slideProgress = swiper.slides[i].progress;
		var innerOffset = swiper.width * interleaveOffset;
		var innerTranslate = slideProgress * innerOffset;
		swiper.slides[i].querySelector(".slide-inner").style.transform =
		"translate3d(" + innerTranslate + "px, 0, 0)";
}
},
touchStart: function() {
		var swiper = this;
			for (var i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = "";
			}
		},
setTransition: function(speed) {
		var swiper = this;
		for (var i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = speed + "ms";
				swiper.slides[i].querySelector(".slide-inner").style.transition =
				speed + "ms";
			}
		}
	}
};

var swiper = new Swiper(".swiper-container", swiperOptions);
  
console.log("HOME + SWIPER reloaded");

}

// ----------------------------------------------------------------------
    
// O NAMA JS
 
if (document.querySelector('#onamaone')) {
  
var mq = window.matchMedia( "(max-width: 999px)" );
if (mq.matches) {
var tl = gsap.timeline({defaults:{duration:0.3, autoAlpha:0, ease: "power2.Out"}});
		tl.from(".h1,.p1, .p2, .p3", {})  
  
}
else {
var tl = gsap.timeline({defaults:{duration:0.5, y:300, autoAlpha:0, ease: "power2.Out"}});
		tl.from(".h1,.p1, .p2, .p3", {stagger: 0.1})  
 
}
      
// BUTTON MOUSE HOVER ORANGE + SHADOW
const menuhover = document.getElementById('menuhover');
$(".button-wrapper").each(function(i, el) {
	var tl = gsap.timeline({paused: true});
	var t = tl
		.to($(el).find('.button-color'), {backgroundColor:"#EA5B0C", boxShadow: '0 10px 25px rgba(234,91,12,.5)',duration: 0.3, overwrite:"all", ease: "power1.out"})
	el.animation = t;

$(el).on("mouseenter",function(){
	this.animation.play();
	}).on("mouseleave",function(){
	this.animation.reverse();
});
});              

console.log("O NAMA reloaded");

}

// ----------------------------------------------------------------------

// USLUGE JS

if (document.querySelector('#usluge')) {

var mq = window.matchMedia( "(max-width: 999px)" );
if (mq.matches) {
var tl = gsap.timeline({defaults:{duration:0.2, autoAlpha:0, ease: "power2.Out"}});
	tl.from(".h1,.h2,.p1,.p2,.p3", {})
  
}
else {
var tl = gsap.timeline({defaults:{duration:0.5, y:300, autoAlpha:0, ease: "power2.Out"}});
	tl.from(".h1,.h2,.p1,.p2,.p3", {stagger: 0.1}) 
 
}    
   
    console.log("USLUGE reloaded");

}

// ----------------------------------------------------------------------

// PROJEKTI JS

if (document.querySelector('#projekti')) {
// INIT

var mq = window.matchMedia( "(max-width: 999px)" );
if (mq.matches) {
var tl = gsap.timeline({defaults:{duration:0.2, autoAlpha:0, ease: "power3.Out"}});
	tl.from(".h1,.h2,.p2,.p1", {})	 
  
}
else {
var tl = gsap.timeline({defaults:{duration:0.5, y:300, autoAlpha:0, ease: "power3.Out"}});
	tl.from(".h1,.h2,.p2,.p1", {stagger: 0.1})	 
 
}    
    
// IMAGE PLUS OVERLAY
//const menuhover = document.getElementById('menuhover');

// NE IZBACUJ ERROR - GSAP TARGET NOT FOUND
  gsap.config({nullTargetWarn: false});
      
$(".over").each(function(i, el) {
var tl = gsap.timeline({paused: true});
var t = tl

  			.to($(el).find('.o-overlay'), {opacity:1, duration:0.5, ease: "power1.Out"})
			.to($(el).find('.plusnew'), {opacity:1, duration:0.5, ease: "power1.Out"}, "<")

el.animation = t;
$(el).on("mouseenter",function(){
			this.animation.play();
}).on("mouseleave",function(){
			this.animation.reverse();
});
});

console.log("PROJEKTI reloaded");

}

// ----------------------------------------------------------------------

// REFERENCE JS

if (document.querySelector('#reference')) {
 
var mq = window.matchMedia( "(max-width: 999px)" );
if (mq.matches) {
var tl = gsap.timeline({defaults:{duration:0.2, autoAlpha:0, ease: "power2.Out"}});
	tl.from(".h1,.h2,.p1,.p2", {})	 
  
}
else {
var tl = gsap.timeline({defaults:{duration:0.5, y:300, autoAlpha:0, ease: "power2.Out"}});
	tl.from(".h1,.h2,.p1,.p2", {stagger: 0.1})	
 
}    
  
// HOVER LOGOS
const menuhover = document.getElementById('menuhover');
$(".logo-parent").each(function(i, el) {
	var tl = gsap.timeline({paused: true},{defaults:{duration:0.5, y:300, autoAlpha:0, overwrite:"all", ease: "power2.Out"}});
	var t = tl
			.to($(el).find('.logo-background'), {opacity:0.3})
			.to($(el).find('.logo-partner'), {opacity:0.8},"<")
el.animation = t;
    $(el).on("mouseenter",function(){
			this.animation.play();
	}).on("mouseleave",function(){
    	this.animation.reverse();
});
});

console.log("REFERENCE reloaded");

}

// ----------------------------------------------------------------------

// KONTAKT JS

if (document.querySelector('#kontakt')) {

var mq = window.matchMedia( "(max-width: 999px)" );
if (mq.matches) {
var tl = gsap.timeline({defaults:{duration:0.2, autoAlpha:0, ease: "power2.Out"}});
			tl.from(".h1,.h2,.h3,.h4,.h5,.h6,.h7,.h8,.h9,.h10,.h11,.h12", {})	 
}
else {
var tl = gsap.timeline({defaults:{duration:0.5, y:40, autoAlpha:0, ease: "power2.Out"}});
			tl.from(".h1", {y:100})
			tl.from(".h2", {y:100}, "<0.1")
			tl.from(".h3", {}, "<0.1")
			tl.from(".h4", {}, "<0.1")
			tl.from(".h5", {}, "<0.1")
			tl.from(".h6", {}, "<0.1")
			tl.from(".h7", {}, "<0.1")
			tl.from(".h8", {}, "<0.1")
			tl.from(".h9", {}, "<0.1")
			tl.from(".h10", {y:300}, "<0.1")
			tl.from(".h11", {}, "<")
			tl.from(".h12", {}, "<0.1")
 
}    
 
console.log("KONTAKT reloaded");

}

// ----------------------------------------------------------------------

// PROJECT SOLO JS

if (document.querySelector('#projectsolo, #swipersolo')) {

var mq = window.matchMedia( "(max-width: 999px)" );
if (mq.matches) {
var tl = gsap.timeline({defaults:{duration:0.2, autoAlpha:0, ease: "power2.Out"}});
			tl.from(".h1,.h2,.h3,.h4,.h5,.h6,.h7,.h8,.h9,.h10,.h11,.h12", {})	 
  
}
else {
var tl = gsap.timeline({defaults:{duration:0.5, y:40, autoAlpha:0, ease: "power2.Out"}});
			tl.from(".h1", {y:100})
			tl.from(".h2", {y:100}, "<0.1")
			tl.from(".h3", {}, "<0.1")
			tl.from(".h4", {}, "<0.1")
			tl.from(".h5", {}, "<0.1")
			tl.from(".h6", {}, "<0.1")
			tl.from(".h7", {}, "<0.1")
			tl.from(".h8", {}, "<0.1")
			tl.from(".h9", {}, "<0.1")
			tl.from(".h10", {y:300}, "<0.1")
			tl.from(".h11", {}, "<")
			tl.from(".h12", {}, "<0.1")
 
}    
  
// SWIPER SOLO
var interleaveOffset = 0.5;
var menu = ['', '', '', '', '', '']
var swiperOptions = {
			loop: true,
			speed: 500,
			grabCursor: true,
			mousewheelControl: false,
			keyboardControl: true,
			direction: 'horizontal',
			resistanceRatio:0.5,
			slidesPerView: 1,
			longSwipes:true,
			longSwipesRatio:0.5,
			touchRatio:5,
			spaceBetween: 0,
			parallax: true,
			preloadImages: true,
			watchSlidesProgress: true,
  			updateOnWindowResize: true,
			updateOnImagesReady: true,
			speed: 1000,
			breakpoints: {
				500: {spaceBetween: 0, loopedSlides: 1, slidesPerView: 1},
				1e3: {loopedSlides: 1, spaceBetween: 0, slidesPerView: 1},
				1200: {spaceBetween: 0,slidesPerView: 1}
			},
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'bullets',
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (menu[index]) + '</span>';
},
},
// cross paralax transition
on: {
	progress: function() {
		var swiper = this;
		for (var i = 0; i < swiper.slides.length; i++) {
			var slideProgress = swiper.slides[i].progress;
			var innerOffset = swiper.width * interleaveOffset;
			var innerTranslate = slideProgress * innerOffset;
			swiper.slides[i].querySelector(".slide-inner").style.transform =
				"translate3d(" + innerTranslate + "px, 0, 0)";
}
},
	touchStart: function() {
		var swiper = this;
		for (var i = 0; i < swiper.slides.length; i++) {
			swiper.slides[i].style.transition = "";
}
},
	setTransition: function(speed) {
		var swiper = this;
		for (var i = 0; i < swiper.slides.length; i++) {
			swiper.slides[i].style.transition = speed + "ms";
			swiper.slides[i].querySelector(".slide-inner").style.transition =
				speed + "ms";
		}
	}
}
};

var swiper = new Swiper(".swiper-container", swiperOptions);

console.log("SOLO PROJECT reloaded");

}

//DESTROY SCRIPTS
function unload() {
    if (document.querySelector('#all')) {
			scroll.destroy();

      Webflow.destroy();
      console.log("WEBFLOW DESTROYED");
}

if (document.querySelector('#swiper')) {
		$('.swiper-container').each(function(){
			this.swiper.destroy(true, true);
});
console.log("glavni DESTROYED!!!");

		$('.swiper-containerx').each(function(){
			this.swiper.destroy(true, true);
});
console.log("mali1 DESTROYED!!!");

		$('.swiper-container2').each(function(){
			this.swiper.destroy(true, true);
});
console.log("mali2 DESTROYED!!!");

}
}

swup.on('willReplaceContent', unload);

//}, 0) // završetak funkcije s početka locomotive scrolla
})();

}

}
// run once
init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);
console.log("content replaced");
