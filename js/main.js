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
