(function( $ ){
  $.fn.colorLetters = function(options) {
    

    // Options
    // textSrc, colorDest
    // Parameters provided via data-text-src and data-color-dest override colorLetter's options.

    
    // The list of colors
    var colors = ['red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'brown']
    
    this.each(function() {
      
      var textSrc = $($(this).data('text-src') ? $(this).data('text-src') : options.textSrc, this);
      var colorDest = $($(this).data('color-dest') ? $(this).data('color-dest') : options.colorDest, this);
      var letterText = $(textSrc, this).first().text();
      var letter = $(colorDest, this).first();
      var colorIndex = letterText.charCodeAt(0) % colors.length || 0;
      $(letter).addClass("bg-" + colors[colorIndex]);
      if (letter) $(letter).text(letterText.charAt(0));
    });
    
    return this;
  }; 
  
  $(document).ready(function(){
    $('.list-group-item').colorLetters({
      textSrc : '.row-item-heading',
      colorDest: '.letter',
    });
  });
  
})( jQuery );