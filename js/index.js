// ###################### Menu ###########################
var bar = document.getElementById("menu-bar");
var menu = document.getElementById("menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("appear");
});
// ###################### Menu ###########################

// ###################### back to top ###########################
var scroll = document.getElementById("back-to-top");
window.addEventListener("scroll", topFunction);

function topFunction() {
  if (window.pageYOffset >= 305) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// ###################### back to top ###########################

// ###################### Add Class Active ###########################
$(".link li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
// ###################### Add Class Active ###########################

// ###################### navbar ###########################
var nav = document.getElementById("nav");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 0) {
    nav.style.position = "fixed";
    nav.style.backgroundColor = "#fff";
    nav.style.boxShadow = "0px 2px 15px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.position = "absolute";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    nav.style.boxShadow = "none";
  }
}
// ###################### navbar ###########################

// ###################### smooth scroll to div ###########################
$(".link li a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top - 79,
    },
    1200
  );
});
// ###################### smooth scroll to div ###########################

// ###################### Add Class Active while scroll ###########################
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 0 && window.pageYOffset <= 650) {
    $("#hom").addClass("active");
    $("#abou").removeClass("active");
    $("#dep").removeClass("active");
    $("#doc").removeClass("active");
    $("#blo").removeClass("active");
    $("#cont").removeClass("active");
  } else if (window.pageYOffset > 650 && window.pageYOffset <= 2680) {
    $("#hom").removeClass("active");
    $("#abou").addClass("active");
    $("#dep").removeClass("active");
    $("#doc").removeClass("active");
    $("#blo").removeClass("active");
    $("#cont").removeClass("active");
  } else if (window.pageYOffset > 2680 && window.pageYOffset <= 3385) {
    $("#hom").removeClass("active");
    $("#abou").removeClass("active");
    $("#dep").addClass("active");
    $("#doc").removeClass("active");
    $("#blo").removeClass("active");
    $("#cont").removeClass("active");
  } else if (window.pageYOffset > 3385 && window.pageYOffset <= 4980) {
    $("#hom").removeClass("active");
    $("#abou").removeClass("active");
    $("#dep").removeClass("active");
    $("#doc").addClass("active");
    $("#blo").removeClass("active");
    $("#cont").removeClass("active");
  } else if (window.pageYOffset > 4980 && window.pageYOffset <= 7375) {
    $("#hom").removeClass("active");
    $("#abou").removeClass("active");
    $("#dep").removeClass("active");
    $("#doc").removeClass("active");
    $("#blo").addClass("active");
    $("#cont").removeClass("active");
  } else {
    $("#hom").removeClass("active");
    $("#abou").removeClass("active");
    $("#dep").removeClass("active");
    $("#doc").removeClass("active");
    $("#blo").removeClass("active");
    $("#cont").addClass("active");
  }
});
// ###################### Add Class Active while scroll ###########################

// ###################### testimonial slider ###########################
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    dotsEach: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
// ###################### testimonial slider ###########################

// ###################### nice scroll ###########################
$("body").niceScroll({
  cursorcolor: "#207dff",
  cursorborder: "1px solid #207dff",
  cursorwidth: "8px",
  zindex: "auto" | [9999],
});
// ###################### nice scroll ###########################
