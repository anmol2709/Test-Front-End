
$(document).ready(function(){

  $(document).ajaxStart(function(){
    $("#user-image").attr("src","progress.gif");
  }).ajaxStop(function(){
    console.log("Ajax Stopped.")
  }).ajaxSuccess(function(){
    console.log("Ajax Success")
  }).ajaxComplete(function(){
    console.log("Ajax Completed")
  })


  $("#b1").on("click",function(){
      $.ajax({
                              url: "https://public-api.wordpress.com/rest/v1/sites/25262138/posts",
                              success: function(data) {
                                  console.log(data)
                                  console.log(data.posts[0].author.first_name)

                                      $("#l1").text(data.posts[0].author.first_name +" "+ data.posts[0].author.last_name);
                                      $("#l2").text(data.posts[0].author.first_name +" "+ data.posts[0].author.last_name);
                                      $("#l3").text(data.posts[0].author.nice_name );
                                      $("#user-img").attr("src", data.posts[0].author.avatar_URL);
                                    }

  ,
      error: function(){
        console.log("error")
        $("#l1").text(" ");
        $("#l2").text(" ");
        $("#l3").text(" " );

        $("#user-img").attr("src", " ");


      }
    })
  })
$(l9).hide();
  $('#i2').click(function(){
  $('#l9').slideToggle("slow");
  });
  })
