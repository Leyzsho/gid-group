"use strict";function scrollEvents(){var e,t,a,o=document.querySelector(".btn-toUp");window.addEventListener("scroll",(function(){(e=document.documentElement.scrollTop)>t&&cancelAnimationFrame(a),t=e}));var n=function e(){var t=document.documentElement.scrollTop;t>0&&(window.scrollTo(0,t-t/8),a=requestAnimationFrame(e))};o.addEventListener("click",(function(){a=requestAnimationFrame(n)}))}function animationScrollEvents(){scrollY>=window.innerHeight||document.documentElement.scrollTop>=window.innerHeight?(gsap.to(".header__logo",{duration:.5,y:0,ease:"sine"}),gsap.to(".header",{backgroundColor:"black",duration:.5,ease:"sine"}),gsap.to(".btn-toUp",{duration:.5,opacity:1,x:0,y:0,rotate:-90,ease:"power3"})):(gsap.to(".header__logo",{duration:.5,y:40,ease:"sine"}),gsap.to(".header",{backgroundColor:"rgba(0, 0, 0, 0.4)",duration:.5,ease:"sine"}),gsap.to(".btn-toUp",{duration:.5,opacity:0,x:100,y:100,rotate:0,ease:"power3"}))}function mainEvents(){var e,t,a,o,n,c,r,s,i,l=!1,u=!1,d=!1,p=null,_=null,m=null,f=null,v=null,g=null,y=0,b={door:{panels2:{active:!1,value:null},panels3:{active:!1,value:null}}},h=document.querySelector(".calculator"),q=document.querySelector(".quiz"),S=document.querySelector(".our-projects"),E=document.querySelector(".submit-your-app"),k=gsap.timeline({defaults:{duration:.2,transformOrigin:"center center",ease:"sine"}}),x=gsap.timeline({defaults:{opacity:0,ease:"sine",duration:.5}}),w=document.querySelector(".burger__line_1"),z=gsap.timeline({defaults:{ease:"sine",opacity:0,duration:.5}}),L=gsap.timeline({defaults:{duration:.5,ease:"sine"}}),j=document.querySelectorAll(".calculator__total-cost");function C(e){var t=document.querySelector(".call-us"),a=document.querySelector(".header"),o=document.querySelector(".stages__link_1"),n=document.querySelector(".submit-your-app__btn"),c=e.target;t.contains(c)||a.contains(c)||o&&o.contains(c)||n&&n.contains(c)||(document.removeEventListener("click",C),z.reverse(),z.timeScale(-3),gsap.set("body",{overflowY:"auto"}),u=!1,closeModal())}function F(){l?(k.reverse(),x.reverse(),x.timeScale(-3),w.style.borderRadius="4px",l=!1):d&&(window.addEventListener("scroll",animationScrollEvents),L.reverse(),L.timeScale(-3),gsap.to(".header__logo",{duration:.5,y:40,ease:"sine"}),gsap.to(".header",{backgroundColor:"rgba(0, 0, 0, 0.4)",duration:.5,ease:"sine"}),closeModal(),d=!1),openModal(),z.play(),z.timeScale(1),u=!0,document.addEventListener("click",C)}function A(e,t){var a=document.querySelectorAll("".concat(e,"__styles-flat-figure")),o=document.querySelector(".calculator__selected-style"),n=document.querySelector(".calculator__selected-name"),c=null;a.forEach((function(a){a.addEventListener("click",(function(){var r=a.querySelector("".concat(e,"__styles-flat-image"));c&&(c.classList.remove("styles-flat__image--active"),c.parentElement.style.outlineWidth="1px"),r.parentElement.style.outlineWidth="0",r.classList.add("styles-flat__image--active"),c=r,t.disabled=!1,"calculator"===e.slice(1)&&(f=r.nextElementSibling.textContent,o.src=r.src,n.textContent=f,M(p,_,m,f,v,g,b))}))}))}function M(e,t,a,o,n,c,r){var s=1,i=1,l=1,u=1;switch(o){case"Минимализм":s=1.1;break;case"Скандинавский стиль":s=1.2;break;case"Стиль Лофт":s=1.3;break;case"Экостиль":s=1.4;break;case"Современный стиль":s=1.5;break;default:s=1}switch(n){case"Серый":case"Светло-серый":i=1.1;break;case"Светло-бежевый":i=1.2;break;case"Темно-серый":i=1.1;break;case"Темно-розовый":i=1.3;break;case"Красный":case"Желтый":i=1.4;break;case"Убрать цвет":i=1;default:i=1}switch(c){case"Светлый ламинат":case"Светлая паркетная доска":case"Смешанный пол":l=1.2;break;case"Наливной пол":l=1.3;break;case"Жесткий пол":l=1.4;break;case"Мягкий пол":l=1.1;break;default:l=1}if(!0===r.door.panels2.active)switch(r.door.panels2.value){case"2.1":u=1.1;break;case"2.4":u=1.2;break;default:u=1}else if(!0===r.door.panels3.active)switch(r.door.panels3.value){case"2.1":u=1.3;break;case"2.4":u=1.4;break;default:u=1}var d=1.2*(1e3*e)*t*s*i*l*u+1e3*a*1.5+y;j.forEach((function(e){e.textContent="Стоимость проекта: ".concat(d.toFixed(2)," руб")}))}!function(){var e=document.querySelector(".burger");k.to(".burger__line_1",{transformOrigin:"right center",scaleX:.1}).to(".burger__line_1",{transformOrigin:"right center",y:-20}).to(".burger__line_2",{transformOrigin:"left center",scaleX:1},"<").to(".burger__line_1",{transformOrigin:"right center",opacity:0}).to(".burger__line_2",{duration:.5,scaleX:1,y:0,rotate:-225}).to(".burger__line_3",{duration:.5,y:-14,rotate:225},"<");var t=document.querySelectorAll(".burger-menu__network"),a=document.querySelectorAll(".burger-menu__item");x.to(".burger-menu",{y:0,opacity:1}),a.forEach((function(e,t){var a=gsap.timeline({defaults:{opacity:0,ease:"sine",duration:.5}});a.from(e,{y:20}),x.add(a,.2*t)})),t.forEach((function(e,t){var a=gsap.timeline({defaults:{opacity:0,ease:"sine",duration:.5}});a.from(e,{}),x.add(a,.2*t)})),k.pause(),x.pause(),e.addEventListener("click",(function(){if(l)k.reverse(),x.reverse(),x.timeScale(-3),w.style.borderRadius="4px",l=!1,closeModal();else{u?(z.reverse(),z.timeScale(-3),u=!1):d&&(window.addEventListener("scroll",animationScrollEvents),L.reverse(),L.timeScale(-3),gsap.to(".header__logo",{duration:.5,y:40,ease:"sine"}),gsap.to(".header",{backgroundColor:"rgba(0, 0, 0, 0.4)",duration:.5,ease:"sine"}),closeModal(),d=!1),document.removeEventListener("click",C);var e=document.querySelector(".btn-toUp");1===parseFloat(window.getComputedStyle(e).getPropertyValue("opacity"))&&gsap.to(e,{duration:.5,opacity:0,x:100,y:100,rotate:0,ease:"power3"}),gsap.set("[data-tabIndex]",{tabIndex:-1}),gsap.set("body",{overflowY:"hidden"}),k.play(),x.play(),x.timeScale(1),w.style.borderRadius="50%",l=!0}}))}(),e=document.querySelector(".header__phone"),t=document.querySelector(".call-us__close-btn"),a=document.querySelector(".call-us__form"),o=document.querySelectorAll(".call-us__input"),n=document.querySelector(".stages__link_1"),c=document.querySelector(".submit-your-app__btn"),z.to(".call-us",{x:"-50%",opacity:1}).from(".call-us__title",{y:20}).from(".call-us__input",{y:20},">-0.3").from(".call-us__btn",{y:20},">-0.3").from(t,{opacity:0},">-0.3"),z.pause(),a.addEventListener("submit",(function(e){e.preventDefault(),z.reverse(),z.timeScale(-3),u=!1,document.removeEventListener("click",C),closeModal(),o.forEach((function(e){e.value=""}))})),e.addEventListener("click",(function(){F()})),n&&n.addEventListener("click",(function(){F()})),c&&c.addEventListener("click",(function(){F()})),t.addEventListener("click",(function(){z.reverse(),z.timeScale(-3),u=!1,document.removeEventListener("click",C),closeModal()})),q&&function(){var e=1,t=e,a=document.querySelector(".project-cost__btn"),o=document.querySelectorAll(".quiz__next"),n=document.querySelectorAll(".quiz__back"),c=document.querySelector(".quiz__close-btn"),r=gsap.timeline({defaults:{ease:"sine",opacity:0,duration:.5},onStart:function(){gsap.set(".dark",{opacity:1,zIndex:5})},onReverseComplete:function(){gsap.to(".dark",{opacity:0,zIndex:-100,duration:.3,ease:"sine"})}}),s=gsap.timeline({defaults:{ease:"sine",opacity:0,duration:.5}}),i=document.querySelector(".quiz__next--1"),l=document.querySelector(".quiz__next--2"),u=document.querySelector(".quiz__next--3"),d=document.querySelector(".quiz__form"),p=document.querySelectorAll(".quiz__input");function _(e){var t;gsap.set(".quiz__section--".concat(e),{top:0}),gsap.from(".quiz__number--".concat(e),{delay:.5,x:-20,y:-20,ease:"sine",duration:.5,opacity:0}),gsap.from(".quiz__title--".concat(e),{delay:.5,x:-20,y:-20,ease:"sine",duration:.5,opacity:0}),1===e&&(gsap.from(".quiz__size-arrow",{scaleX:0,duration:.5,ease:"sine",delay:.5}),t=document.querySelectorAll(".quiz__size"),document.querySelectorAll(".quiz__size-option").forEach((function(e){var a=e.querySelector(".quiz__size"),o=e.querySelectorAll(".quiz__size-arrow");a.addEventListener("click",(function(){t.forEach((function(e){e.classList.remove("quiz__size--active")})),gsap.to(".quiz__size-arrow",{fill:"#4F4F4F",ease:"sine",duration:.1}),a.classList.add("quiz__size--active"),o.forEach((function(e){gsap.to(e,{fill:"#EB5757",ease:"sine",duration:.3})})),i.disabled=!1})),a.addEventListener("mouseenter",(function(){a.classList.contains("quiz__size--active")||o.forEach((function(e){gsap.to(e,{fill:"#FAFF09",ease:"sine",duration:.1})}))})),a.addEventListener("mouseleave",(function(){a.classList.contains("quiz__size--active")||o.forEach((function(e){gsap.to(e,{fill:"#4F4F4F",ease:"sine",duration:.1})}))})),a.addEventListener("focus",(function(){a.classList.contains("quiz__size--active")||o.forEach((function(e){gsap.to(e,{fill:"#FAFF09",ease:"sine",duration:.1})}))})),a.addEventListener("blur",(function(){a.classList.contains("quiz__size--active")||o.forEach((function(e){gsap.to(e,{fill:"#4F4F4F",ease:"sine",duration:.1})}))}))}))),2===e&&(gsap.from(".quiz__styles-title",{y:-30,opacity:0,duration:.5,delay:.5,ease:"sine"}),A(".quiz",l)),3===e&&(gsap.from(".quiz__btn-date",{opacity:0,ease:"sine",delay:.8,duration:.5,y:-20}),function(){var e=document.querySelectorAll(".quiz__btn-date"),t=null;e.forEach((function(e){e.addEventListener("click",(function(){t&&t.classList.remove("quiz__btn-date--active"),e.classList.add("quiz__btn-date--active"),t=e,u.disabled=!1}))}))}()),4===e&&(gsap.from(".quiz__descr",{opacity:0,ease:"sine",duration:.5,delay:.6,x:-20,y:-20}),gsap.from(".quiz__input",{opacity:0,ease:"sine",duration:.5,delay:.7,y:-20}),gsap.from(".quiz__form-agree",{opacity:0,ease:"sine",duration:.5,delay:.8,y:-20}),gsap.from(".quiz__form-btn",{opacity:0,ease:"sine",duration:.5,delay:1,y:"-50%"}),gsap.from(".quiz__link-page",{opacity:0,ease:"sine",duration:1,delay:1,y:-20}))}r.to(".quiz",{x:"-50%",opacity:1}).from(c,{opacity:0}),r.pause(),s.pause(),d.addEventListener("submit",(function(e){e.preventDefault(),closeModal(),r.reverse(),r.timeScale(-3),p.forEach((function(e){e.value=""}))})),a.addEventListener("click",(function(){openModal(),r.play(),r.timeScale(1),_(e)})),c.addEventListener("click",(function(){closeModal(),r.reverse(),r.timeScale(-3)})),o.forEach((function(a){a.disabled=!0,a.addEventListener("click",(function(){t=e,gsap.to(".quiz__section--".concat(t),{ease:"sine",duration:.5,x:"-200%",onComplete:function(){gsap.set(".quiz__section--".concat(t),{top:"-200%",x:"200%"})}}),gsap.set(".quiz__step--".concat(t),{backgroundColor:"#4F4F4F"}),e++,gsap.set(".quiz__section--".concat(e),{top:0}),gsap.to(".quiz__section--".concat(e),{ease:"sine",duration:.5,x:0}),gsap.set(".quiz__step--".concat(e),{backgroundColor:"#FAFF09"}),_(e),q.scrollTop>0&&q.scrollTo({top:0})}))})),n.forEach((function(a){a.addEventListener("click",(function(){t=e,gsap.set(".quiz__step--".concat(t),{backgroundColor:"#4F4F4F"}),a.classList.contains("quiz__back-to-beginning")?(gsap.to(".quiz__section--".concat(t),{ease:"sine",duration:.5,x:"-200%",onComplete:function(){gsap.set(".quiz__section--".concat(t),{top:"-200%",x:"200%"})}}),e=1,gsap.set(".quiz__section",{delay:.3,x:"200%"}),gsap.set(".quiz__section--".concat(e),{top:0,x:"200%"})):(gsap.to(".quiz__section--".concat(t),{ease:"sine",duration:.5,x:"200%",onComplete:function(){gsap.set(".quiz__section--".concat(t),{top:"-200%"})}}),e--,gsap.set(".quiz__section--".concat(e),{top:0,x:"-200%"})),gsap.to(".quiz__section--".concat(e),{ease:"sine",duration:.5,x:0}),gsap.set(".quiz__step--".concat(e),{backgroundColor:"#FAFF09"}),q.scrollTop>0&&q.scrollTo({top:0})}))}))}(),h&&function(){var e=1,t=0,a=document.querySelector(".hero__btn_2"),o=document.querySelectorAll(".calculator__next"),n=document.querySelector(".calculator__next--1"),c=document.querySelector(".calculator__next--2"),r=document.querySelectorAll(".calculator__back"),s=document.querySelector(".calculator__btn-finish"),i=document.querySelector(".calculator__close-btn"),l=document.querySelectorAll(".calculator__accordion"),u=document.querySelectorAll(".calculator__input"),q=document.querySelectorAll(".calculator__styles-flat-image"),S=document.querySelector(".calculator__reset-all--2"),E=document.querySelector(".calculator__reset-all--3"),k=document.querySelector(".stages__link_3"),x=[],w=[];function z(e){1===e&&(gsap.from(".calculator__title",{x:-20,opacity:0,duration:.5,delay:.5,ease:"sine"}),A(".calculator",n))}function j(e){c.disabled="true",t=0,p=null,_=null,m=null,e.forEach((function(a){var o=!1;a.value="",a.addEventListener("input",(function(){!o&&a.value.length>0?(t++,o=!0):0===a.value.length&&(t--,o=!1),t===e.length?c.disabled=!1:c.disabled=!0,"apartment-area"===a.id&&(p=a.value),"ceiling-height"===a.id&&(_=a.value),"bathroom-area"===a.id&&(m=a.value),M(p,_,m,f,v,g,b)}))}))}function C(e,t){var a=document.querySelector(".calculator__".concat(t,"-container")),o=null;if(2===e)"color"===t||"floor"===t?a.querySelectorAll(".calculator__".concat(t,"-item")).forEach((function(e){e.addEventListener("click",(function(){var a=e.querySelector(".calculator__left-block"),n=getComputedStyle(a).backgroundImage;o&&(o.style.backgroundImage="none","color"===t&&(v="Убрать цвет"),"floor"===t&&(g="Убрать пол"),M(p,_,m,f,v,g,b)),"none"!==n?a.style.backgroundImage="none":(a.style.backgroundImage="url('images/tick-selected.svg')","color"===t&&(v=e.querySelector(".calculator__name").textContent),"floor"===t&&(g=e.querySelector(".calculator__name").textContent),M(p,_,m,f,v,g,b),o=a,x.push(o))}))})):"other"===t&&a.querySelectorAll(".calculator__characteristic-btn").forEach((function(e){e.addEventListener("click",(function(){var t=e.closest(".calculator__other-item");e.classList.contains("calculator__characteristic-btn--active")?(e.classList.remove("calculator__characteristic-btn--active"),b.door.panels2.active=!1,b.door.panels2.value="Убрать дверь",b.door.panels3.active=!1,b.door.panels3.value="Убрать дверь",M(p,_,m,f,v,g,b)):(o&&o.classList.remove("calculator__characteristic-btn--active"),e.classList.add("calculator__characteristic-btn--active"),"other-door-2-panels"===t.id?(b.door.panels3.active=!1,b.door.panels3.value="Убрать дверь",b.door.panels2.active=!0,b.door.panels2.value=e.textContent.replace(",",".")):"other-door-3-panels"===t.id&&(b.door.panels2.active=!1,b.door.panels2.value="Убрать дверь",b.door.panels3.active=!0,b.door.panels3.value=e.textContent.replace(",",".")),M(p,_,m,f,v,g,b),o=e,x.push(o))}))}));else if(3===e){var n=a.querySelectorAll(".calculator__".concat(t,"-item")),c=document.querySelector(".calculator__".concat(t,"-descr"));n.forEach((function(e){e.addEventListener("click",(function(){var t=e.querySelector(".calculator__left-block"),a=getComputedStyle(t).backgroundImage,n=Number(e.textContent.replace(/\D/g,"").replace(/\s/g,""));"none"!==a?(t.style.backgroundImage="none",y-=n):(t.style.backgroundImage="url('images/tick-selected.svg')",y+=n,o=t,w.push(o)),M(p,_,m,f,v,g,b)})),e.addEventListener("mouseenter",(function(){var t=e.id;"advanced-item-replacement-radiators"===t&&(c.textContent="Обновите облик вашего дома с нашими качественными радиаторами. Мы предлагаем широкий выбор стильных и эффективных радиаторов, которые не только обеспечат надежное отопление, но и добавят уют и изысканность вашему интерьеру."),"advanced-item-kitchen-apron"===t&&(c.textContent="Тёплый пол на кухне, дополнительный санузел, шторы на окна и другие опции вы сможете выбрать у нас в офисе"),"advanced-item-steel-entry-door"===t&&(c.textContent="Обеспечьте надежную защиту вашего жилья с нашими стальными входными дверями. Мы предлагаем двери различных дизайнов и цветов, которые не только обеспечат безопасность, но и подчеркнут индивидуальность вашего дома."),"advanced-item-bathroom-floor-heating"===t&&(c.textContent="Добавьте комфорта вашей ванной комнате с нашим теплым полом. Наслаждайтесь приятной теплой поверхностью даже в холодные времена года, создавая уютную атмосферу и ощущение роскоши."),"advanced-item-air-conditioning"===t&&(c.textContent="Создайте идеальный климат в вашем доме с нашими современными кондиционерами. Независимо от погоды на улице, вы будете наслаждаться комфортной температурой и свежим воздухом внутри вашего жилья."),"advanced-item-bathroom-accessories"===t&&(c.textContent="Превратите вашу ванную комнату в оазис релаксации с нашими стильными аксессуарами. У нас вы найдете все необходимое - от элегантных полотенцедержателей до функциональных дозаторов и шкафчиков, чтобы сделать вашу ванную комнату удобной и красивой."),"advanced-item-window-replacement"===t&&(c.textContent="Обновите внешний вид и энергоэффективность вашего дома с нашими качественными окнами. Наши окна не только создадут уютную атмосферу, но и помогут снизить затраты на отопление и кондиционирование.")}))}))}}L.to(".calculator",{y:0,opacity:1}).to(".header__logo",{y:0},">-0.5").to(".header",{backgroundColor:"black"},">-0.5").from(".calculator__close-btn",{opacity:0}),L.pause(),C(2,"color"),C(2,"floor"),C(2,"other"),C(3,"advanced"),j(u),k.addEventListener("click",(function(){gsap.set(".calculator__section--".concat(e),{top:0,x:0}),window.removeEventListener("scroll",animationScrollEvents),L.play(),L.timeScale(1),openModal(),z(e),d=!0})),a.addEventListener("click",(function(){gsap.set(".calculator__section--".concat(e),{top:0,x:0}),window.removeEventListener("scroll",animationScrollEvents),L.play(),L.timeScale(1),openModal(),z(e),d=!0})),i.addEventListener("click",(function(){window.addEventListener("scroll",animationScrollEvents),L.reverse(),L.timeScale(-2),closeModal(),d=!1})),o.forEach((function(t){t.disabled=!0,t.addEventListener("click",(function(){var t=e;gsap.to(".calculator__section--".concat(t),{duration:.5,ease:"sine",x:"-200%",onComplete:function(){gsap.set(".calculator__section--".concat(t),{top:"-200%",x:"200%"})}}),e++,gsap.set(".calculator__section--".concat(e),{top:0}),gsap.to(".calculator__section--".concat(e),{x:0,duration:.5,ease:"sine"}),z(e),h.scrollTop>0&&h.scrollTo({top:0})}))})),r.forEach((function(t){t.addEventListener("click",(function(){var t=e;gsap.to(".calculator__section--".concat(t),{duration:.5,ease:"sine",x:"200%",onComplete:function(){gsap.set(".calculator__section--".concat(t),{top:"-200%"})}}),e--,gsap.set(".calculator__section--".concat(e),{top:0,x:"-200%"}),gsap.to(".calculator__section--".concat(e),{x:0,duration:.5,ease:"sine"}),h.scrollTop>0&&h.scrollTo({top:0})}))})),S.addEventListener("click",(function(){x.forEach((function(e){e.style.backgroundImage="none",e.classList.contains("calculator__characteristic-btn--active")&&e.classList.remove("calculator__characteristic-btn--active")})),j(u),v="Убрать цвет",g="Убрать пол",b.door.panels2.active=!1,b.door.panels2.value="Убрать дверь",b.door.panels3.active=!1,b.door.panels3.value="Убрать дверь",M(p,_,m,f,v,g,b)})),E.addEventListener("click",(function(){w.forEach((function(e){e.style.backgroundImage="none"})),y=0,M(p,_,m,f,v,g,b)})),s.addEventListener("click",(function(){x.forEach((function(e){e.style.backgroundImage="none",e.classList.contains("calculator__characteristic-btn--active")&&e.classList.remove("calculator__characteristic-btn--active")})),w.forEach((function(e){e.style.backgroundImage="none"})),lastSection=e,y=0,d=!1,v="Убрать цвет",g="Убрать пол",b.door.panels2.active=!1,b.door.panels2.value="Убрать дверь",b.door.panels3.active=!1,b.door.panels3.value="Убрать дверь",j(u),M(p,_,m,f,v,g,b),window.addEventListener("scroll",animationScrollEvents),L.reverse(),L.timeScale(-3),gsap.set(".calculator__section--".concat(lastSection),{delay:.5,x:"200%",top:"-200%"}),e=1,gsap.to(".header__logo",{duration:.5,y:40,ease:"sine"}),gsap.to(".header",{backgroundColor:"rgba(0, 0, 0, 0.4)",duration:.5,ease:"sine"}),closeModal(),o.forEach((function(e){e.disabled=!0})),q.forEach((function(e){e.classList.remove("styles-flat__image--active"),e.parentElement.style.outlineWidth="0"}))})),window.innerWidth<786&&l.forEach((function(e){var t=!1,a=e.nextElementSibling,o=e.querySelector(".calculator__accordion-svg"),n=gsap.timeline({defaults:{duration:.5,ease:"power3"},onStart:function(){gsap.set(a,{zIndex:-1}),gsap.set(e,{pointerEvents:"none"})},onComplete:function(){gsap.set(a,{zIndex:0}),gsap.set(e,{pointerEvents:"all"})},onReverseComplete:function(){a.classList.add("calculator__list-close")}});n.from(a,{height:0,opacity:0}).to(e,{backgroundColor:"black",color:"white"},">-0.5").to(o,{rotate:180,fill:"white"},">-0.5"),n.pause(),e.addEventListener("click",(function(){t?(n.reverse(),t=!1):(n.play(),a.classList.remove("calculator__list-close"),t=!0)}))}))}(),E&&S&&(r=1,s=['\n    <li>\n      <a class="our-projects__item" href="project.html" tabindex="-1">\n        <img class="our-projects__flat-image" src="images/home-5.webp" alt="квартира">\n        <div class="our-projects__text">\n          <h3 class="our-projects__apartment-name">Квартира на Академической</h3>\n          <span span class="our-projects__style">Стиль - Лофт</span>\n          <span class="our-projects__size">130 м2</span>\n        </div>\n      </a>\n    </li>\n    ','\n    <li>\n      <a class="our-projects__item" href="project.html" tabindex="-1">\n        <img class="our-projects__flat-image" src="images/home-6.webp" alt="квартира">\n        <div class="our-projects__text">\n          <h3 class="our-projects__apartment-name">Квартира на Рижской</h3>\n          <span class="our-projects__style">Стиль - Скандинавский</span>\n          <span class="our-projects__size">94 м2</span>\n        </div>\n      </a>\n    </li>\n    ','\n    <li>\n      <a class="our-projects__item" href="project.html" tabindex="-1">\n        <img class="our-projects__flat-image" src="images/home-16.webp" alt="квартира">\n        <div class="our-projects__text">\n          <h3 class="our-projects__apartment-name">Квартира на Чистых прудах</h3>\n          <span class="our-projects__style">Стиль  Лофт</span>\n          <span class="our-projects__size">68 м2</span>\n        </div>\n      </a>\n    </li>\n    ','\n    <li>\n      <a class="our-projects__item" href="project.html" tabindex="-1">\n        <img class="our-projects__flat-image" src="images/home-7.webp" alt="квартира">\n        <div class="our-projects__text">\n          <h3 class="our-projects__apartment-name">Квартира на Рижской</h3>\n          <span class="our-projects__style">Стиль - Скандинавский</span>\n          <span class="our-projects__size">94 м2</span>\n        </div>\n      </a>\n    </li>\n    ','\n    <li>\n      <a class="our-projects__item" href="project.html" tabindex="-1">\n        <img class="our-projects__flat-image" src="images/home-8.webp" alt="квартира">\n        <div class="our-projects__text">\n          <h3 class="our-projects__apartment-name">Квартира на Чистых прудах</h3>\n          <span class="our-projects__style">Стиль - Лофт</span>\n          <span class="our-projects__size">85 м2</span>\n        </div>\n      </a>\n    </li>\n    ','\n    <li>\n      <a class="our-projects__item" href="project.html" tabindex="-1">\n        <img class="our-projects__flat-image" src="images/home-9.webp" alt="квартира">\n        <div class="our-projects__text">\n          <h3 class="our-projects__apartment-name">Квартира на Академической</h3>\n          <span span class="our-projects__style">В стиле Лофт</span>\n          <span class="our-projects__size">108 м2</span>\n        </div>\n      </a>\n    </li>\n    '],i=document.querySelector(".our-projects__list"),document.querySelector(".our-projects__btn").addEventListener("click",(function(){(function(e){return 6})&&(r=1);for(var e=r+3;r<e;){var t=document.createElement("li");t.innerHTML=s[r-1],i.appendChild(t),r++}ScrollTrigger.refresh(),document.querySelectorAll(".our-projects__item").forEach((function(e,t){(t+1)%2?(e.style.transformOrigin="left top",gsap.timeline({scrollTrigger:{trigger:e,start:"top bottom",end:"+=450",scrub:1}}).from(e,{ease:"sine",scale:0})):(e.style.transformOrigin="right top",gsap.timeline({scrollTrigger:{trigger:e,start:"top bottom",end:"+=450",scrub:1}}).from(e,{ease:"sine",scale:0}))}))})))}function openModal(){var e=document.querySelector(".btn-toUp");1===parseFloat(window.getComputedStyle(e).getPropertyValue("opacity"))&&gsap.to(e,{duration:.5,opacity:0,x:100,y:100,rotate:0,ease:"power3"}),gsap.set("body",{overflowY:"hidden"})}function closeModal(){var e=document.querySelector(".btn-toUp");scrollY>=document.documentElement.clientHeight&&gsap.to(e,{duration:.5,opacity:1,x:0,y:0,rotate:-90,ease:"power3"}),gsap.set("body",{overflowY:"auto"})}function loadScript(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,document.body.appendChild(t)}window.location.pathname.includes("/index.html")||"/gid-group/"===window.location.pathname||"/"===window.location.pathname?"exists"!==window.sessionStorage.getItem("intro")?window.addEventListener("introFinished",(function(){scrollEvents(),mainEvents(),window.addEventListener("scroll",animationScrollEvents),window.matchMedia("(max-width: 1023px)").matches?loadScript("js/animation-mobile.js"):loadScript("js/animation-desktop.js")})):(scrollEvents(),mainEvents(),window.addEventListener("scroll",animationScrollEvents),window.matchMedia("(max-width: 1023px)").matches?loadScript("js/animation-mobile.js"):loadScript("js/animation-desktop.js")):(scrollEvents(),mainEvents(),window.matchMedia("(max-width: 1023px)").matches?loadScript("js/animation-mobile.js"):loadScript("js/animation-desktop.js"));
