"use strict";function intro(){for(var e=document.body,o=document.querySelector(".header"),t=document.querySelector(".header__logo"),a=document.getElementById("quality"),n=o.offsetHeight,r=gsap.timeline({defaults:{ease:"power3"},onComplete:function(){document.querySelectorAll(".header__line").forEach((function(e){e.remove()})),e.style.overflowY="auto";var o=new Event("introFinished");gsap.set(t,{position:"relative",top:"0",left:"0"}),scrollY>=a.offsetTop||document.documentElement.scrollTop>=a.offsetTop?gsap.set(t,{position:"relative",top:"0",left:"0",transform:"translate(0, 0)"}):gsap.set(t,{position:"relative",top:"0",left:"0",transform:"translate(0, 40px)"}),window.dispatchEvent(o),window.sessionStorage.setItem("intro","exists")}}),i=4;i>0;){var s=document.createElement("span");s.classList.add("header__line","header__line_".concat(i)),t.append(s),i--}gsap.set(".header__logo-image",{visibility:"hidden"}),gsap.set([".burger",".header__phone"],{zIndex:-1,opacity:0}),gsap.set(o,{height:"100dvh"}),e.style.overflowY="hidden";var l=gsap.timeline();scrollY>=window.innerHeight||document.documentElement.scrollTop>=window.innerHeight?l.to(".header__logo",{duration:.5,y:0,ease:"sine"}):l.to(".header__logo",{duration:.5,ease:"sine",y:40}),r.to(".header__line",{duration:1,transform:"none"}).to([".header__line_1",".header__line_2"],{duration:.4,scaleY:13}).call((function(){gsap.set([".header__line_3",".header__line_4"],{duration:.4,scaleX:40})})).call((function(){gsap.set([".header__line_1",".header__line_2"],{scaleY:0}),gsap.set(".header__logo-image",{visibility:"visible"})})).to([".header__line_3",".header__line_4"],{duration:.5,scaleX:0}).add(l).to(o,{duration:.7,height:n},">-0.5").call((function(){scrollY>=a.offsetTop||document.documentElement.scrollTop>=a.offsetTop?(gsap.to(o,{backgroundColor:"black",duration:.5,ease:"sine"}),gsap.to(".btn-toUp",{duration:.5,opacity:1,x:0,y:0,rotate:-90,ease:"power3"})):gsap.to(o,{duration:.5,backgroundColor:"rgba(0, 0, 0, 0.4)",ease:"sine"}),gsap.to([".burger",".header__phone"],{zIndex:0,opacity:1})})).from(".burger__line_1",{duration:.3,scaleX:0}).from(".burger__line_2",{duration:.3,scaleX:0}).from(".burger__line_3",{duration:.3,scaleX:0})}"exists"!==window.sessionStorage.getItem("intro")?intro():(gsap.set(".header__logo",{position:"relative",top:0,left:0,transform:"translateX(0)"}),scrollY>=window.innerHeight||document.documentElement.scrollTop>=window.innerHeight?(gsap.set(".header__logo",{y:0}),gsap.set(".header",{backgroundColor:"black"}),gsap.to(".btn-toUp",{duration:.5,opacity:1,x:0,y:0,rotate:-90,ease:"power3"})):(gsap.set(".header__logo",{y:40}),gsap.set(".header",{backgroundColor:"rgba(0, 0, 0, 0.4)"}),gsap.set(".btn-toUp",{opacity:0,x:100,y:100,rotate:0})));