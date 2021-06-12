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
// $(function(){
//     $('ul').before('<p class="notice">Just Updated</p>');
//     $('li.hot').prepend('+ ');
//     var $newListItem = $('<li><em>gluten-free</em> Soy sauce</li>');
//     $('li:last').after($newListItem);

// })

// getting and setting attribute value
// $(function(){
//     $('li#three').removeClass('hot');
//     $('li.hot').addClass('favorite');
//     $('ul').attr('id','group');
// });

// getting and setting CSS properties
// $(function(){
//     var backgroundColor = $('li').css('background-color');
//     $('ul').append('<p>Color was: ' + backgroundColor + '</p>');

//     $('li').css({
//         'background-color' : '#555',
//         'border' : '1px solid #fff',
//         'color' : '#000',
//         'font-family' : 'Georgia',
//         'padding-left' : '+=75'
//     });
// });

// Using each
// $(function(){
//     $('li').each(function () { 
//          var ids = this.id;
//          $(this).append('<span class="order">' + ids + '</span>');
//     });
// });

// Events
// $(function(){
//     var ids='';
//     var $listItems = $('li'); //this is called catching an element
//     $listItems.on('mouseover click', function(){
//         ids = this.id;
//         $listItems.children('span').remove();
//         $(this).append('<span class="priority">' + ids + '</span>')
//     });

//     $listItems.on('mouseout',function(){
//         $(this).children('span').remove();
//     })
// });

// The event object
// $(function(){
//     $('li').on('click', function(e){
//         $('li span').remove();
//         var date = new Date();
//         date.setTime(e.timeStamp);
//         var clicked = date.toDateString();
//         $(this).append('<span class="date">'+ clicked + ' ' + e.type + '</span>');
//     });
// });

// FadeIn effect
// $(function(){
//     $('h2').hide().slideDown();
//     var $li = $('li');
//     $li.hide().each(function(index){
//         $(this).delay(700 * index).fadeIn(700);
//     });
//     $li.on('click',function(){
//         $(this).fadeOut(700);
//     });
// });

// Animate
// $(function(){
//     $('li').on('click',function(){
//         $(this).animate({
//             opacity: 0.0,
//             paddingLeft: '+=80'
//         },500,function(){
//             $(this).remove();
//         });
//     });
// });

// // traversing
// $(function(){
//     var $h2 = $('h2');
//     $('ul').hide();
//     $h2.append('<a>Show</a>');

//     $h2.on('click',function(){
//         $h2.next().
//         fadeIn(500)
//         .children('.hot')
//         .addClass('complete');
//     $h2.find('a').fadeOut();
//     });
// });

// Filters in jquery
// var $li = $('li');
// $li.filter('.hot:last').removeClass('hot');
// $('li:not(.hot)').addClass('cool');
// $li.has('em').addClass('complete');

// $li.each(function(){
//     var $this = $(this);
//     if($this.is('.hot')){
//         $this.prepend('Priority item: ');
//     }
// });

// $('li:contains("honey")').append(' (local)');

// $(function(){
//     $('li:lt(2)').removeClass('hot');
//     $('li:eq(0)').addClass('complete');
//     $('li:gt(2)').addClass('cool');
// });

// // Forms
// $(function(){
//     var $newItemButton = $('#newItemButton');
//     var $newItemForm = $('#newItemForm');
//     var $textInput = $('input:text');

//     $newItemButton.show();
//     $newItemForm.hide();

//     $('#showForm').on('click', function(){
//         $newItemButton.hide();
//         $newItemForm.show();
//     });

//     $newItemForm.on('submit',function(e){
//         e.preventDefault(e);
//         var newText = $('input:text').val();
//         $('li:last').after('<li>' + newText + '</li>');
//         $newItemForm.hide();
//         $newItemButton.show();
//         $textInput.val(' ');
//     });
    
// });

$(function() {
    var $p = $('p');
  
    // Create a clone of the <p> element and add it after the <h2> element.
    var $clonedQuote = $p.clone();
    $p.remove();
    $clonedQuote.insertAfter('h2');
  
    // Remove first item, and add it to the end of the list.
    // Note how this happens in both lists.
    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
  
  });

