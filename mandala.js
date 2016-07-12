$(document).ready(function(){

var cel = $('.cel'); 
var ter = $('.ter');
var tel = $('.tel');

cel.hover(function (){
    cel.addClass('ocean');
    $('.outer-darkness').addClass('ocean');
    // $('.outer-darkness').addClass(<div>John</div>)
}, function() {
    cel.removeClass('ocean');
    $('.outer-darkness').removeClass('ocean');

})

ter.hover(function (){
    ter.addClass('orangeM');
}, function() {
    ter.removeClass('orangeM');
})

tel.hover(function (){
    tel.addClass('orangeL');
}, function() {
    tel.removeClass('orangeL');
})

cel.click(function() {
    $('.outer-darkness').prepend('<img id="bigFoto" src="https://mtngoatregister.files.wordpress.com/2016/06/happy-place.jpg"/>')
})


// $('#header #menu li a').hover(function () {
//   $(this).fadeOut(0).addClass('hover').fadeIn(300);
// },
// funct

// (
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// );

// $('#menu li a').hover(function(){
//     $(this).fadeOut('fast', function(){
//         $(this).addClass('hover').fadeIn(300);
//     });
// }, function(){

















})