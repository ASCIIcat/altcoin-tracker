$(document).on("mobileinit", function(){ //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.support.cors = true;
  $.mobile.loadingMessage = false;
});

$(document).ready(function(){
  request();
});


function request() {
  $.blockUI({ css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        } });
  var altcoinAPI = "https://altcointrader.co.za/api/v1/live-stats";
  $.getJSON(altcoinAPI, function(stats){
      // alert(stats.BTC.Price);
      // var stats = JSON.parse(data);
      // BTC
      // $('#prices').append('<li>BTC:<ul>');
      $('#btc-prices').empty();
      $('#btc-prices').append('<li><strong>Price</strong>: '+stats.BTC.Price+'</li>');
      $('#btc-prices').append('<li><strong>High</strong>: '+stats.BTC.High+'</li>');
      $('#btc-prices').append('<li><strong>Low</strong>: '+stats.BTC.Low+'</li>');
      // LTC
      // $('#prices').append('<li>LTC:<ul>');
      $('#ltc-prices').empty();
      $('#ltc-prices').append('<li><strong>Price</strong>: '+stats.LTC.Price+'</li>');
      $('#ltc-prices').append('<li><strong>High</strong>: '+stats.LTC.High+'</li>');
      $('#ltc-prices').append('<li><strong>Low</strong>: '+stats.LTC.Low+'</li>');
      // NMC
      // $('#prices').append('<li>NMC:<ul>');
      $('#nmc-prices').empty();
      $('#nmc-prices').append('<li><strong>Price</strong>: '+stats.NMC.Price+'</li>');
      $('#nmc-prices').append('<li><strong>High</strong>: '+stats.NMC.High+'</li>');
      $('#nmc-prices').append('<li><strong>Low</strong>: '+stats.NMC.Low+'</li>');
    });

  $.unblockUI();
  $('.loader').hide();
}

$('#reload').click(function(){
  $('.loader').show();
  setTimeout(request(), 2000);
});

$(function() {
    $("#btc").swipe( {
      swipeLeft:function(event, direction, distance, duration, fingerCount) {
      $("#btc").removeClass('is-active');
      $('#ltc').addClass('is-active');
      $("#btc_menu").removeClass('is-active');
      $('#ltc_menu').addClass('is-active');
    }
  });
});
