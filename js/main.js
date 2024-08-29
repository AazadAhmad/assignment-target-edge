$(window).scroll(function () {
  // sticky Header
  var scroll = $(window).scrollTop();
  if (scroll >= 35) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});

$(document).ready(function () {

  $('.partners').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
    });

  $('.testimonials-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });

  $('.lectro').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      
      
      arrows: true,
      dots: false,
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });


    // Initially hide all items except the first one
    
    // current tab
    $('#current .cycle-item').hide();
    $('#current .cycle-item').first().show();

    // Click event for color spans
    $('.current .color').click(function() {
      var color = $(this).attr('id');
      
      // Add active class to the selected color and remove from others
      $('.current .color').removeClass('active');
      $(this).addClass('active');
      
      // Show the corresponding bike and hide others
      $('#current .cycle-item').hide();
      $('#current .cycle-item[data-attribute="' + color + '"]').show();
    });

    // comming tab
    $('#comming .cycle-item').hide();
    $('#comming .cycle-item').first().show();

    // Click event for color spans
    $('.comming .color').click(function() {
      var color = $(this).attr('id');
      
      // Add active class to the selected color and remove from others
      $('.comming .color').removeClass('active');
      $(this).addClass('active');
      
      // Show the corresponding bike and hide others
      $('#comming .cycle-item').hide();
      $('#comming .cycle-item[data-attribute="' + color + '"]').show();
    });



    document.querySelectorAll("[Heading]").forEach((heading) => {
      new SplitType(heading, { types: "lines, words, chars", tagName: "c" });
      gsap.from(heading.querySelectorAll(".word"), {
          y: "100%",
          opacity: 0,
          duration: 1,
          ease: "power1.out",
          stagger: 0.1,
          scrollTrigger: {
              trigger: heading,
              start: "top 80%"
          }
      });
  });


document.querySelectorAll("[description]").forEach((description) => {
  new SplitType(description, { types: "lines, words, chars", tagName: "c" });
  gsap.from(description.querySelectorAll(".line"), {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: {
          trigger: description,
          start: "top 80%", 
          toggleActions: "play none none none"
      }
  });
});


document.querySelectorAll(".btn-animate").forEach((button) => {
  gsap.from(button, {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
          trigger: button,  
          start: "top 80%",
          toggleActions: "play none none none"
      }
  });
});


gsap.from(".buy-it", {
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  stagger: 1,  // Adds a 1-second delay between the start of each element's animation
  scrollTrigger: {
      trigger: ".buy-it",    // Trigger when the first .buy-it element enters the viewport
      start: "top 100%",      // Start when the top of the first .buy-it element is 80% down the viewport
      toggleActions: "play none none none"
  }
});

  

    // new SplitType("[aboutText]", { types: "lines, words, chars", tagName: "b" });
    // gsap.from("[aboutText] .word", { y: "100%", opacity: 0, duration: 1.5, ease: "power1.out", stagger: 0.1, scrollTrigger: { trigger: "[aboutText]", start: "top center" } });
    // new SplitType("[aboutTitle]", { types: "lines, words, chars", tagName: "b" });
    
    // gsap.from("[aboutTitle] .line", { y: "100%", opacity: 0, duration: 1, ease: "power1.out", stagger: 0.1, scrollTrigger: { trigger: "[aboutTitle]", start: "top center" } });
    // new SplitType("[clientTitle]", { types: "lines, words, chars", tagName: "b" });
    
    // gsap.from("[clientTitle] .word", { y: "100%", opacity: 0, duration: 1, ease: "power1.out", stagger: 0.1, scrollTrigger: { trigger: "[clientTitle]", start: "top center" } });
    // new SplitType("[teamTitle]", { types: "lines, words, chars", tagName: "span" });
    // gsap.from("[teamTitle] .line", { y: "100%", opacity: 0, duration: 1, ease: "power1.out", stagger: 0.8, scrollTrigger: { trigger: "[teamTitle]", start: "top center" } }),
    //     gsap.from(".our-team-panel", { scrollTrigger: ".our-team-panel", y: 100, opacity: 0, duration: 1 });
    // new SplitType("[dreamersTitle]", { types: "lines, words, chars", tagName: "b" });
    // gsap.from("[dreamersTitle] .word", { y: "100%", opacity: 0, duration: 1, ease: "power1.out", stagger: 0.1, scrollTrigger: { trigger: "[dreamersTitle]", start: "top center" } }),
    //     gsap.from(".barand-slider", { y: "8%", opacity: 0, duration: 1, ease: "power1.out", stagger: 0.5, scrollTrigger: { trigger: ".barand-slider", start: "top center" } });
    // new SplitType("[amText]", { types: "lines, words, chars", tagName: "b" });
    // gsap.from("[amText] .word", { y: "100%", opacity: 0, duration: 1.5, ease: "power1.out", stagger: 0, scrollTrigger: { trigger: "[amText]", start: "top center" } }),
    //     gsap.from(".contact-us", { scrollTrigger: ".contact-us", y: 100, opacity: 0, duration: 1 });


})