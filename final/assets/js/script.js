TweenMax.staggerFrom(
    ".header ul.menu li.menu-item",
    1.5,
    {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut,
    },
    0.08
  );

  TweenMax.staggerFrom(
    ".feature ul.feature-list li.feature-item",
    1.5,
    {
      delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut,
    },
    0.08
  );

  TweenMax.from(".header .logo", 1.5, {
    delay: 1.5,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut,
  });
  
  TweenMax.from(".hero h1 .hidetext", 1.5, {
    delay: 1,
    y: "100%",
    ease: Expo.easeInOut,
  });

  TweenMax.from(".hero p .hidetext", 1.5, {
    delay: 1.2,
    y: "100%",
    ease: Expo.easeInOut,
  });

  TweenMax.from(".hero button.btn-arrow i", 1.5, {
    delay: 1.2,
    opacity: 0,
    x: "-5",
    ease: Expo.easeInOut,
  });

  TweenMax.from(".hero button.btn-arrow span", 1.5, {
    delay: 1.2,
    opacity: 0,
    x: "-15",
    ease: Expo.easeInOut,
  });

  TweenMax.from("main .model", 2, {
    delay: 1.5,
    //   opacity: 0,
    y: "-740",
    ease: Expo.easeInOut,
  });

  TweenMax.from("main .model img", 2.2, {
    delay: 1.6,
    opacity: 0,
    y: "670",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".first", 1.5, {
    delay: 0.5,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".second", 1.5, {
    delay: 0.7,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  TweenMax.to(".third", 1.5, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  const feature = document.querySelectorAll('.feature-list .feature-item');
  console.log(feature);