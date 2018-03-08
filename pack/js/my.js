$(document).ready(function(){
  $('.slider').slider({
      height: 600,
      transition: 2000
  });
  $('input#input_text, textarea#textarea1').characterCounter();
  $('ul.tabs').tabs();
  $('select').material_select();
  $(".dropdown-button").dropdown();
  //DOM method remove item from cart
  $('#remove-cart').click(function(){
    $('.cart-item').remove();
  });
  //DOM method toggle for "use shipment address as payment address"
  $('#filled-in-box').click(function(){
    $('#payment_address').toggle('slow');
  });
  //DOM method replace for next step on check out page
  $('#shipnx').click(function(){
    $('#shipment').replaceWith('<h6 style="padding-left: 30px;">Deliver to: <br>Lily Allen <br>1234 5th Ave #102<br>Seattle, WA 98121<br>Free standard shipping (3-5 business days)</h6><br>');
    $('.pay').collapsible('open',1);
  });
  $('#paymentnx').click(function(){
    $('#payment').replaceWith('<h6 id="payinfo" style="padding-left: 30px;">VISA XXXXXXXXXXXX1234<br>Expires on 01/20<br>Lily Allen <br>1234 5th Ave #102<br>Seattle, WA 98121<br></h6>');
    $('.pay').collapsible('open',2);
  });
  // side nav
  $(".button-collapse").sideNav();
  // shipment info open
  $('.pay').collapsible('open',0);
  
  // review open
  var count = $('.review li').length;
  for (var index = 0; index < count; index++) {
    $('.review').collapsible('open', index);
  }
  // options bar open
  var count = $('.options li').length;
  for (var index = 0; index < count; index++) {
    $('.options').collapsible('open', index);
  }
});