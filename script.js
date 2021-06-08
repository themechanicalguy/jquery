// Adding a class to all header elements
//$(':header').addClass('headline');

// Hide and fade in animation
//$('li:lt(3)').hide().fadeIn(1500);

// remove on click 
// $('li').on('click', function() {
//   $(this).remove();
// });

//adds class seasonal
//ads a calander logo before em element
// $('li em').addClass('seasonal');
// // Adds class favorite
// //adds a heart logo after 
// $('li.hot').addClass('favorite');

// Chaining Methods
//$('li[id!="one"]').hide().delay(500).fadeIn(1400); // semi-colon indicates end of chaining - can be writen on separate lines
//$('li:first-child').addClass('next');
//$('li.priority').addClass('highlight');


//Getting HTML Content and append it to rest element
// $(function() {
//     var $listHTML = $('ul').html();
//     $('ul').append($listHTML);
//   });

//Getting text contentand append it to rest element
//   $(function() {
//     var $listText = $('ul').text();
//     $('ul').append('<p>' + $listText  + '</p>');
//   });

// Changing Content
// $(function(){
//     $('li:contains("pine")').text('almonds'); //Finds pine HTML element  text and replace it with almonds
//     $('li.hot').html(function(){
//         return '<em>' + $(this).text() +  '</em>';
//     });
//     $('li#one').remove();
// });

// Adding new content
$(function(){
    $('ul').before('<p class="notice">Just Updated</p>');
    $('li.hot').prepend('+ ');
    var $newListItem = $('<li><em>gluten-free</em> Soy sauce</li>');
    $('li:last').after($newListItem);

})