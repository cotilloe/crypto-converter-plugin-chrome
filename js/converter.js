var url = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";
var usdVal;
var valUSD;
var tickerUSD, x = "";

$(document).ready(function(){
	$.get(url, function (tickerUSD)
	{
		var data = $.parseJSON(tickerUSD);
    window.usdVal= data.bpi.USD.rate_float;
    var x = usdVal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    	
  	var now = moment().format("M, D, YY, h:mm A");
    			$('#date').append(now);  
          
    document.getElementById("current").innerHTML += "<i> $" +x +"</i><br><span style='font-size:10px'"+ now;
  });
});

function rtUpdateOnKeyPress()
    {
        var rtValue = document.getElementById("rtValue");
        var s = rtValue.value;
        var f = s * usdVal;
        var c = f.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        var lblValue = document.getElementById("lblValue");
        lblValue.innerText = s+ " btc = $" +c;
    }
