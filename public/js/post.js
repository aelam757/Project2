$(document).ready(function() {
    let reviews;
    // function getReviews(reviews) {
    //     authorId = author || "";
    //     if (authorId) {
    //       authorId = "/?author_id=" + authorId;
    //     }
    //     $.get("/api/posts" + authorId, data => {
    //       console.log("Posts", data);
    //       posts = data;
    //       if (!posts || !posts.length) {
    //         displayEmpty(author);
    //       }
    //       else {
    //         initializeRows();
    //       }
    //     });
    //   }
    // function deletePost(id) {
    //     $.ajax({
    //       method: "DELETE",
    //       url: "/api/posts/" + id
    //     })
    //       .then(function() {
    //         getPosts(postCategorySelect.val());
    //       });
    //   }
    
      // InitializeRows handles appending all of our constructed post HTML inside blogContainer
      function initializeRows() {
        blogContainer.empty();
        let reviewsToAdd = [];
        for (let i = 0; i < posts.length; i++) {
          reviewsToAdd.push(createNewRow(reviews[i]));
        }
        blogContainer.append(reviewsToAdd);
      }
    
      // This function constructs a post's HTML
      function createNewRow(review) {
        // let formattedDate = new Date(review.createdAt);
        // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        let newPostCard = $("<div>");
        newPostCard.addClass("card");
        let newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-header");
        let deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        let editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-info");
        // let newPostTitle = $("<h2>");
        // let newPostDate = $("<small>");
        // let newPostAuthor = $("<h5>");
        // newPostAuthor.text("Written by: " + review.Author.name);
        // newPostAuthor.css({
        //   float: "right",
        //   color: "red",
        //   "margin-top":
        //   "-10px"
        // });
        let newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        let newPostBody = $("<p>");
        newPostTitle.text(review.title + " ");
        newPostBody.text(review.body);
        // newPostDate.text(formattedDate);
        // newPostTitle.append(newPostDate);
        newPostCardHeading.append(deleteBtn);
        newPostCardHeading.append(editBtn);
        // newPostCardHeading.append(newPostTitle);
        // newPostCardHeading.append(newPostAuthor);
        newPostCardBody.append(newPostBody);
        // newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.data("post", post);
        return newPostCard;
      }
//   // This function figures out which post we want to delete and then calls deletePost
//   function handlePostDelete() {
//     let currentPost = $(this)
//       .parent()
//       .parent()
//       .data("post");
//     deletePost(currentPost.id);
//   }
//   // This function figures out which post we want to edit and takes it to the appropriate url
//   function handlePostEdit() {
//     let currentPost = $(this)
//       .parent()
//       .parent()
//       .data("post");
//     window.location.href = "/cms?post_id=" + currentPost.id;
//   }
});