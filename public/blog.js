$(document).ready(function () {
    var displayResources = $("#post-wrapper");
    var bio = $("#bio");
    var userName = $("#userName");
    var userPhoto = $("#userPhoto");
    var socialLink = $("#socialLink");
    displayResources.text("Loading...");

    $.ajax({
        type: "GET",
        url: "/api/v1",
        success: function (result) {
            var output = "";
            for (var i in result.posts.reverse()) {
                output += '<div class="post hidden"> <div class="content"> <div class="card"> <div class="top"><a class="date" id="' +
                    result.posts[i].hash +
                    '">' +
                    result.posts[i].date +
                    '</a><a class="user" href="#' +
                    result.posts[i].hash +
                    '" target="_blank">' +
                    result.posts[i].title +
                    '</a></div><div class="bottom">' +
                    result.posts[i].content +
                    "</div></div></div></div>";
            }
            bio.html(result.meta.bio);
            userName.html(result.meta.user)
            userPhoto.attr('src', result.meta.photo);
            socialLink.attr('href', result.meta.link.value);
            socialLink.text(result.meta.link.title);
            displayResources.html(output);
        }
    });

});

function loadMore() {
    var hiddenCount = $(".hidden").length;
    var totalPosts = $(".shown").length + hiddenCount;
    console.log(totalPosts);
    if (hiddenCount > 0) {
        $(".hidden").slice(0, 3).addClass("shown");
        $(".shown").removeClass("hidden");
        if (hiddenCount == 0) {
            $("button").addClass("hidden");
        }

    } else {
        $("button").addClass("hidden");
    }
};