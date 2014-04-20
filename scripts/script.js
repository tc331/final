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
    })
})


$("#stars div").hide();
$('#stars img').hover(
  function () {
    $(this).next("#stars div").slideToggle();
  });


// $("#star_img").mouseenter(function(){
//     $("#star_info").show();
// });
// $("#star_img").mouseleave(function(){
//     $("#star_info").hide();
// });