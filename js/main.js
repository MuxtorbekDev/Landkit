function hoverTop(itemHover, itemTop) {
  const Hover = document.querySelector(itemHover);
  const Top = document.querySelector(itemTop);

  Hover.addEventListener("mousemove", () => {
    Top.classList.add("top");
  });

  Hover.addEventListener("mouseout", () => {
    Top.classList.remove("top");
  });
}
hoverTop(".list-1", ".list-1 .list");
hoverTop(".list-2", ".list-2 .list");
hoverTop(".list-3", ".list-3 .list");
hoverTop(".list-4", ".list-4 .list");

function onclickBlock(click, block, close) {
  const GlClick = document.querySelector(click);
  const GlBlock = document.querySelector(block);
  const GlClose = document.querySelector(close);
  const htmlBody = document.querySelector("html body");
  GlClick.addEventListener("click", () => {
    GlBlock.classList.toggle("block");
    htmlBody.classList.add("hidden");
  });
  GlClose.addEventListener("click", () => {
    GlBlock.classList.toggle("block");
    htmlBody.classList.remove("hidden");
  });
}

onclickBlock("nav .bars .fa-bars", "nav ul", "nav ul li.x .fa-times-circle");

// Typeit
new TypeIt("#type1", {
  speed: 90,
  loop: true,
  waitUntilVisible: true,
})
  .type("developers.", { delay: 400 })
  .pause(1000)
  .delete(11)
  .type("designers.")
  .pause(1000)
  .delete(10)
  .type("founders.")
  .pause(1000)
  .delete(9)
  .go();

// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Counter++++

const increment = function (counter, newValue, interval) {
  const currentValue = Number(counter.textContent);

  const intervalFn = setInterval(function () {
    counter.textContent++;
    if (counter.textContent == newValue) clearInterval(intervalFn);
  }, interval);
};

const counter1 = document.querySelector(".counter-1");
counter1.textContent = 0;
increment(counter1, 50, 80);

const counter2 = document.querySelector(".counter-2");
counter2.textContent = 0;
increment(counter2, 24, 150);

const counter3 = document.querySelector(".counter-3");
counter3.textContent = 0;
increment(counter3, 7, 300);

const counter4 = document.querySelector(".counter-4");
counter4.textContent = 0;
increment(counter4, 100, 50);
