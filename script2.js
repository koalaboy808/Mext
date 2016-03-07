var imagelist = [];
var j = 0;

function callAPI(){
console.log("hello");
$.ajax({
      url: "http://infinigag.k3min.eu/trending",
      success: function(result2) {
        console.log(result2);
        console.log(result2.data[0].images.normal);
        for(i=0;i < result2.data.length; i++)
        {
          imagelist.push(result2.data[i].images.normal);
        }
        
      }
    });
  $.ajax({
        url: "http://infinigag.k3min.eu/meme/fresh",
        success: function(result3) {
          console.log(result3);
          console.log(result3.data[0].images.normal);
          for(i=0;i < result3.data.length; i++)
          {
            imagelist.push(result3.data[i].images.normal);
          }
          
        }
      });

$.ajax({
    url: "http://infinigag.k3min.eu/meme/hot",

    success: function(result) {
      console.log(result);
      console.log(result.data[0].images.normal);
      // console.log(result.data.memes[0].name);
      // var output = "<div>";
      for(i=0;i < result.data.length; i++)
      {
        //    output+="<div>" + "<img src=" + result.data[i].images.normal + "/></div>"
        imagelist.push(result.data[i].images.normal);
      }
      //console.log(imagelist);
      //  output+="</div>"
      //  $('#response-list').html(output);
    }
  });
  
            $.ajax({
                      url: "http://infinigag.k3min.eu/funny/hot",
                      success: function(result6) {
                        console.log(result6);
                        console.log(result6.data[0].images.normal);
                        for(i=0;i < result6.data.length; i++)
                        {
                          imagelist.push(result6.data[i].images.normal);
                        }
                        imagelist.reverse();
                      }
                    });
          
          
}

counter = function() {
    var value = $('#text').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#totalChars').html(0);
        $('#charCount').html(0);
        $('#charCountNoSpace').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;

    console.log("print " + value);

    if((wordCount % 15 === 0) && (value.charAt(value.length - 1) === ' ')){
      console.log(j);
      //loading gif every 50 words
      //console.log(imagelist);

      var output = "<div class='card-panel hoverable'>" + "<img src=" + imagelist[j] + "/></div>";
      $('#gifs').html(output);
      j+=1;
    }

    $('#wordCount').html(wordCount);
    $('#totalChars').html(totalChars);
    $('#charCount').html(charCount);
    $('#charCountNoSpace').html(charCountNoSpace);
    $('#keyval').html(value);
};

$(document).ready(function() {
    callAPI();
    // $('#count').click(counter);
    // $('#text').change(counter);
    // $('#text').keydown(counter);
    // $('#text').keypress(counter);
    $('#text').keyup(counter);
    // $('#text').blur(counter);
    // $('#text').focus(counter);
});
