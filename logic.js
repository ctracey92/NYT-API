$("#searchButton").on("click" , function(){
    var userinput = $('input:textbox').val();
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userinput + "&api-key=e0TACDXZ6bSu7JDqNFM39DzsDdG6YvrQ";
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        var results = response.docs;
        for (var i = 0; i < results.length ; i++){
            var resultsDiv = $("<div>");
            var headline = $("<p>").text(results[i].docs.headline.main);
            var pubDate =  $("<p>").text(results[i].docs.pub_date);
            var articleUrl = $("<p>").text(results[i].docs.web_url);


            resultsDiv.prepend(headline);
            resultsDiv.prepend(pubDate);
            resultsDiv.prepend(articleUrl);

            $("#articles").prepend(resultsDiv)
        }

    })


})