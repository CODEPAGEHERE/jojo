"use strict";

$(document).ready(function () {
  $('.js-counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-to');
    $({
      countNum: $this.text()
    }).animate({
      countNum: countTo
    }, {
      duration: parseInt($this.attr('data-speed')),
      easing: 'linear',
      step: function step() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function complete() {
        $this.text(this.countNum);
      }
    });
  });
});