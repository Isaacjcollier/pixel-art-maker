(function() {
  'use strict';

  var brush

  function newCanvas() {
    var pixel;
    var canvas = $('#canvas')

    for (var i = 0; i < 2214; i++) {
      canvas.append($("<div class='pixel'></div>"));
    }

    var color = 'orange'

    $('.pixel').on('click',function (e) {
      $(this).css('background-color', color);
  })
    $('.paint-color').on('click', function() {
      color = $(this).css('background-color')
    })
  }
newCanvas()
}());
