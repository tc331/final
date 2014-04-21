$(document).ready(function(){

    //show alternate image on mouse rollover
    $(function () {
        $('#stars img').each(function () {
            $(this).data('original', this.src)
        }).mouseenter(function () {
            $(this)
                .attr('src', $(this).data('hover'))
                .animate({})
        }).mouseleave(function () {
            $(this)
                .attr('src', $(this).data('original'))
            .animate({})
        });
    });

    //hide the text div and show when hovering over the image
    $("#stars div").hide();
    $('#stars img').hover(
      function () {
        $(this).next("#stars div").slideToggle();
      });

    //jquery nav bounceout
    $(".nav li").mouseover(function(){
        $(this).stop().animate({height:'50px'})
    });
    $(".nav li").mouseout(function(){
        $(this).stop().animate({height:'25px'})
    });

});