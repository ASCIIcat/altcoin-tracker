/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var receivedElement = parentElement.querySelector('.received');

        $.jsonp({
          url: 'https://altcointrader.co.za/api/v1/live-stats',
          callbackParameter: 'callback',
          success: function(json) {
            var stats = jQuery.parseJSON(json);
            // BTC
            $('.received').append('<li>BTC:<ul>');
            $('.received').append('<li><strong>Price</strong>: '+stats.BTC.Price+'</li>');
            $('.received').append('<li><strong>High</strong>: '+stats.BTC.High+'</li>');
            $('.received').append('<li><strong>Low</strong>: '+stats.BTC.Low+'</li></ul>');
            // LTC
            $('.received').append('<li>LTC:<ul>');
            $('.received').append('<li><strong>Price</strong>: '+stats.LTC.Price+'</li>');
            $('.received').append('<li><strong>High</strong>: '+stats.LTC.High+'</li>');
            $('.received').append('<li><strong>Low</strong>: '+stats.LTC.Low+'</li></ul>');
            // NMC
            $('.received').append('<li>NMC:<ul>');
            $('.received').append('<li><strong>Price</strong>: '+stats.NMC.Price+'</li>');
            $('.received').append('<li><strong>High</strong>: '+stats.NMC.High+'</li>');
            $('.received').append('<li><strong>Low</strong>: '+stats.NMC.Low+'</li></ul>');
          },
          error: function(){
              $('.received').append('<li>There was an error loading the feed');
          }
      });

        $('.received').setAttribute('style', 'display:block;');

    }
};
