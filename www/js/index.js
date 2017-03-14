// $(document).ready(function(){
//   $.jsonp({
//     url: 'https://altcointrader.co.za/api/v1/live-stats',
//     callbackParameter: 'callback',
//     success: function(json) {
//       var stats = JSON.parse(json);
//       // BTC
//       $('.prices').append('<li>BTC:<ul>');
//       $('.prices').append('<li><strong>Price</strong>: '+stats.BTC.Price+'</li>');
//       $('.prices').append('<li><strong>High</strong>: '+stats.BTC.High+'</li>');
//       $('.prices').append('<li><strong>Low</strong>: '+stats.BTC.Low+'</li></ul>');
//       // LTC
//       $('.prices').append('<li>LTC:<ul>');
//       $('.prices').append('<li><strong>Price</strong>: '+stats.LTC.Price+'</li>');
//       $('.prices').append('<li><strong>High</strong>: '+stats.LTC.High+'</li>');
//       $('.prices').append('<li><strong>Low</strong>: '+stats.LTC.Low+'</li></ul>');
//       // NMC
//       $('.prices').append('<li>NMC:<ul>');
//       $('.prices').append('<li><strong>Price</strong>: '+stats.NMC.Price+'</li>');
//       $('.prices').append('<li><strong>High</strong>: '+stats.NMC.High+'</li>');
//       $('.prices').append('<li><strong>Low</strong>: '+stats.NMC.Low+'</li></ul>');
//     },
//     error: function(){
//         $('.prices').append('<li>There was an error loading the feed');
//     }
//   });
//
// });
$(document).ready(function(){
  alert('moo');
  var altcoinAPI = "https://altcointrader.co.za/api/v1/live-stats";
  $.getJSON(altcoinAPI)
    .done(function( data ) {
      var stats = JSON.parse(data);
      // BTC
      $('.prices').append('<li>BTC:<ul>');
      $('.prices').append('<li><strong>Price</strong>: '+stats.BTC.Price+'</li>');
      $('.prices').append('<li><strong>High</strong>: '+stats.BTC.High+'</li>');
      $('.prices').append('<li><strong>Low</strong>: '+stats.BTC.Low+'</li></ul></li>');
      // LTC
      $('.prices').append('<li>LTC:<ul>');
      $('.prices').append('<li><strong>Price</strong>: '+stats.LTC.Price+'</li>');
      $('.prices').append('<li><strong>High</strong>: '+stats.LTC.High+'</li>');
      $('.prices').append('<li><strong>Low</strong>: '+stats.LTC.Low+'</li></ul></li>');
      // NMC
      $('.prices').append('<li>NMC:<ul>');
      $('.prices').append('<li><strong>Price</strong>: '+stats.NMC.Price+'</li>');
      $('.prices').append('<li><strong>High</strong>: '+stats.NMC.High+'</li>');
      $('.prices').append('<li><strong>Low</strong>: '+stats.NMC.Low+'</li></ul></li>');
    })
    .fail(function() {
      console.log( "error" );
      alert("error");
    })
    .always(function() {
      console.log( "complete" );
      alert("done");
    });
});
