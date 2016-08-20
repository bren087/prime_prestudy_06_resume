console.log("script is sourced");
$(document).ready(function(){
  $('.opener').on('click','button',function(){
    $('.opener').css({'display':'none'});
    $('.hidden').css({'display':'block'});
  });
});
