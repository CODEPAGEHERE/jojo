"use strict";

$(document).ready(function () {
  $('.flexslider').flexslider({
    animation: "fade",
    // Use "fade" for fade animation, or "slide" for sliding animation
    slideshowSpeed: 5000,
    // Time between slides in milliseconds
    animationSpeed: 600,
    // Speed of animation in milliseconds
    controlNav: true,
    // Display navigation (circle indicators)
    directionNav: false,
    // Hide next/prev arrows
    smoothHeight: true // Adjust height smoothly

  });
});