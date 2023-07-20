/* Swiper JavaScript */
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  const get = (target) => {
    return document.querySelector(target);
}

const getAll = (target) => {
    return document.querySelectorAll(target);
}

let $gnbli = getAll('#header .nav > .gnb > li');
let $subul = getAll('#header .nav .gnb li ul');
let $header = get('#header');


/* li에 마우스 올리면 자식중에 두번째에 클래스 붙여라
   메뉴 JavaScript */

$gnbli.forEach($liitem => {
    $liitem.addEventListener('mouseenter', e => {
        let current = e.currentTarget;
        $subul.forEach(subItem => {
            subItem.classList.remove('on');
        })
        current.children[1].classList.add('on');
    })
})

$header.addEventListener('mouseleave', e => {
    $subul.forEach(subItem => {
        subItem.classList.remove('on');
    })
})





  /* Top 키 JavaScript */
  let ttop = document.querySelector('.top');
  let ty = 0;
  
  ttop.addEventListener('click', e => {
      ty = 0;            
      window.scrollTo({ top: ty , behavior:'smooth'});
  })