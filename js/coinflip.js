jQuery(document).ready(function($){
  //console.log(SkypeActions._send())
  $('#coin').on( 'click',function(){
    var flipResult = Math.random();
  var result = null;
  var card = {
    type: 'message/card',
    attachments: [{
        contentType: 'application/vnd.microsoft.card.hero',
        content: {
            title: 'Coinflip',
            subtitle: 'Results: Heads',
            text: 'Do you want to flip again?',
            images: [{ url: '/img/head.jpg' }],
            tap: {
                type: 'openUrl',
                value: 'https://decisionsvsu.azurewebsites.net/coinflip.html'
            }
        }
    }]
}
	//$("#heads").css("background-color", "white");
    //$("#tails").css("background-color", "white");
    //if($("#heads").val().length > 0 && $("#tails").val().length > 0){
        //$(#coin).stop();
        //console.log("hi");
    
        $('#coin').removeClass();

        setTimeout(function(){
          if(flipResult <= 0.5){
            $('#coin').addClass('heads');
            console.log("It's heads we do:" + $("#heads").val());
            //setTimeout(function(){$("#heads").css("background-color", "yellow");},3000);
            var headsResult = $("#heads").val();
            var card ={
              type: 'message/card',
              attachments: [{
                  contentType: 'application/vnd.microsoft.card.hero',
                  content: {
                      title: 'Coinflip',
                      subtitle: 'Results: Heads',
                      text: headsResult.toString(),
                      images: [{ url: 'https://decisionsvsu.azurewebsites.net/img/head.jpg' }],
                      tap: {
                          type: 'openUrl',
                          value: 'https://decisionsvsu.azurewebsites.net/coinflip.html'
                      }
                  }
              }]
          };
          //sends card
          setTimeout(function(){SkypeActions.share(card);},3000);
            //$("h1").html("Heads");
            //result = "<h1> = Heads</h1>";
          }
          else{
            $('#coin').addClass('tails');
            console.log("It's tails we do:" + $("#tails").val());
            //setTimeout(function(){$("#tails").css("background-color", "yellow");},3000);
            var tailsResult = $("#tails").val();
            var card ={
              type: 'message/card',
              attachments: [{
                  contentType: 'application/vnd.microsoft.card.hero',
                  content: {
                      title: 'Coinflip',
                      subtitle: 'Results: Tails',
                      text: tailsResult.toString(),
                      images: [{ url: 'https://decisionsvsu.azurewebsites.net/img/tail.jpg' }],
                      tap: {
                          type: 'openUrl',
                          value: 'https://decisionsvsu.azurewebsites.net/coinflip.html'
                      }
                  }
              }]
          };
          //sends card
          setTimeout(function(){SkypeActions.share(card);},3000);
            //$("h1").html("Tails");
            //result = "<h1>Tails</h1>"

          }
          /*document.getElementById("h1").outerHTML = result;*/
        }, 100);
      
  });
});