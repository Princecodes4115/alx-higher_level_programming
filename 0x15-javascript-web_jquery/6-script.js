/*
  updates the text of the HTML tag HEADER to “New Header!!!”
  when the user clicks on DIV#update_header
*/
$('DIV#update_header').click(function () {
  $('HEADER').text('A New Header added!!!');
});
