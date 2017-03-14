$(document).on("mobileinit", function(){
  //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.support.cors = true;
});

$(document).ready(function(){
  request();
});

function request() {
  var altcoinAPI = "https://altcointrader.co.za/api/v1/live-stats";
  $.getJSON(altcoinAPI, function(stats){
      // var stats = JSON.parse(data);
      // BTC
      // $('#prices').append('<li>BTC:<ul>');
      $('#btc-prices').append('<li><strong>Price</strong>: '+stats.BTC.Price+'</li>');
      $('#btc-prices').append('<li><strong>High</strong>: '+stats.BTC.High+'</li>');
      $('#btc-prices').append('<li><strong>Low</strong>: '+stats.BTC.Low+'</li>');
      // LTC
      // $('#prices').append('<li>LTC:<ul>');
      $('#ltc-prices').append('<li><strong>Price</strong>: '+stats.LTC.Price+'</li>');
      $('#ltc-prices').append('<li><strong>High</strong>: '+stats.LTC.High+'</li>');
      $('#ltc-prices').append('<li><strong>Low</strong>: '+stats.LTC.Low+'</li>');
      // NMC
      // $('#prices').append('<li>NMC:<ul>');
      $('#nmc-prices').append('<li><strong>Price</strong>: '+stats.NMC.Price+'</li>');
      $('#nmc-prices').append('<li><strong>High</strong>: '+stats.NMC.High+'</li>');
      $('#nmc-prices').append('<li><strong>Low</strong>: '+stats.NMC.Low+'</li>');
    });
}

$('#reload').click(function(){
  request();
});
