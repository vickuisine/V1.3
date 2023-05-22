document.addEventListener("DOMContentLoaded", function () {
  var scrollAnimation = document.querySelector(".scroll-animation");

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScrollAnimation() {
    if (isElementInViewport(scrollAnimation)) {
      scrollAnimation.classList.add("appear-animation");
    }
  }

  window.addEventListener("scroll", handleScrollAnimation);
});
