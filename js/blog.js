$.get("http://blog.altametry.com/", function (data) {

  $(data).find("article").slice(0, 3).each(function (count) { // or "item" or whatever suits your feed
      var el = $(this);

      var time = el.find(".post-date").text();
      var src = el.find(".post-image img").attr("src");
      var title = el.find(".post-head .post-title a").text();
      var link = el.find(".post-head .post-title a").attr("href");
      var content = el.find(".post-body .entry p").text().substring(0,400);

      if (src !== undefined) {
        $(".article"+count).prepend("<img class='news-img"+count+"' src='"+src+"'>");
      }
      else {
        $(".article"+count).prepend("<img class='news-img"+count+"' src='images/alta_logo.png'>");
      }

      $(".article"+ count +" h4").append("<a href='"+link+"'>"+title+"</a>");
      $(".article"+ count +" h6").append(time);
      $(".article"+ count +" p").append(content);
      $(".article"+ count +" a").attr("href", link);

      if (content.length > 399) {
        $(".article"+ count +" p").append("...");
      }
      
    });
      
  });
