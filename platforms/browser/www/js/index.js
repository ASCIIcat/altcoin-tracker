$(document).on("mobileinit", function(){ //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.support.cors = true;
  $.mobile.loadingMessage = false;
});

$(document).ready(function(){
  $('.loader').show('fast');
  // request();
  setTimeout(request(), 2000);
  drawBTCChart();
  drawLTCChart();
  drawNMCChart();
  drawPIVXChart();
});

var options = {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:false
              }
          }],
          xAxes: [{
                display: false
            }]
      },
      title: {
          display: false,
      },
      legend: {
          display: false,
      }
  };


function drawBTCChart() {
  var jsonData = $.ajax({
      url: "http://www.waterdropstudios.com/api/altcoin-poller/btc-history.php",
      dataType: "json",
      async: false
      }).responseText;

  var ctx = $("#btc_chart_div");

  var json_obj = JSON.parse(jsonData);

  var data = {
    labels: json_obj.Labels,
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "none",
            borderColor: "none",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: json_obj.Data,
            spanGaps: false,
        }
    ]
  };

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}

function drawLTCChart() {
  var jsonData = $.ajax({
      url: "http://www.waterdropstudios.com/api/altcoin-poller/ltc-history.php",
      dataType: "json",
      async: false
      }).responseText;

  var ctx = $("#ltc_chart_div");

  var json_obj = JSON.parse(jsonData);

  var data = {
    labels: json_obj.Labels,
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "none",
            borderColor: "none",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: json_obj.Data,
            spanGaps: false,
        }
    ]
  };

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}

function drawNMCChart() {
  var jsonData = $.ajax({
      url: "http://www.waterdropstudios.com/api/altcoin-poller/nmc-history.php",
      dataType: "json",
      async: false
      }).responseText;

  var ctx = $("#nmc_chart_div");

  var json_obj = JSON.parse(jsonData);

  var data = {
    labels: json_obj.Labels,
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "none",
            borderColor: "none",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: json_obj.Data,
            spanGaps: false,
        }
    ]
  };

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}

function drawPIVXChart() {
  var jsonData = $.ajax({
      url: "http://www.waterdropstudios.com/api/altcoin-poller/pivx-history.php",
      dataType: "json",
      async: false
      }).responseText;

  var ctx = $("#pivx_chart_div");

  var json_obj = JSON.parse(jsonData);

  var data = {
    labels: json_obj.Labels,
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "none",
            borderColor: "none",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: json_obj.Data,
            spanGaps: false,
        }
    ]
  };

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
}


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
      var btc_zar_price = stats.BTC.Price;
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

      var cryptopiaAPI = "https://www.cryptopia.co.nz/api/GetMarket/4214";
      $.getJSON(cryptopiaAPI, function(stats2){
          $('#pivx-prices').empty();
          $('#pivx-prices').append('<li><strong>Price</strong>: '+parseFloat(stats2.Data.LastPrice)*parseFloat(btc_zar_price)+'</li>');
          $('#pivx-prices').append('<li><strong>High</strong>: '+parseFloat(stats2.Data.High)*parseFloat(btc_zar_price)+'</li>');
          $('#pivx-prices').append('<li><strong>Low</strong>: '+parseFloat(stats2.Data.Low)*parseFloat(btc_zar_price)+'</li>');
        });
    });



  $.unblockUI();
  // $('.loader').hide();
  setTimeout($('.loader').toggle('fast'), 2000);
}

$('#exit_menu').click(function() {
  navigator.app.exitApp();
});

$('#reload').click(function(){
  $('.loader').toggle('fast');
  //Hide prices
  $('#btc-prices').toggle('fast');
  $('#ltc-prices').toggle('fast');
  $('#nmc-prices').toggle('fast');
  setTimeout(request(), 2000);
  //show prices
  $('#btc-prices').toggle('fast');
  $('#ltc-prices').toggle('fast');
  $('#nmc-prices').toggle('fast');

  drawBTCChart();
  drawLTCChart();
  drawNMCChart();
  drawPIVXChart();
});

$("#btc").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $("#btc").removeClass('is-active');
    $('#ltc').addClass('is-active');
    $("#btc_menu").removeClass('is-active');
    $('#ltc_menu').addClass('is-active');
  }
});

$("#ltc").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $("#ltc").removeClass('is-active');
    $('#nmc').addClass('is-active');
    $("#ltc_menu").removeClass('is-active');
    $('#nmc_menu').addClass('is-active');
  },
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $("#ltc").removeClass('is-active');
    $('#btc').addClass('is-active');
    $("#ltc_menu").removeClass('is-active');
    $('#btc_menu').addClass('is-active');
}
});

$("#nmc").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      $("#nmc").removeClass('is-active');
      $('#pivx').addClass('is-active');
      $("#nmc_menu").removeClass('is-active');
      $('#pivx_menu').addClass('is-active');
    },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
    $("#nmc").removeClass('is-active');
    $('#ltc').addClass('is-active');
    $("#nmc_menu").removeClass('is-active');
    $('#ltc_menu').addClass('is-active');
  }
});

$("#pivx").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
    $("#pivx").removeClass('is-active');
    $('#nmc').addClass('is-active');
    $("#pivx_menu").removeClass('is-active');
    $('#nmc_menu').addClass('is-active');
  }
});
