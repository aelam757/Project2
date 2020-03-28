//on page load, make our ajax call to get company info 
// const company_name = 
// console.log("hello from companypage.js!")
// console.log(window.location.pathname.split('/companypage/'));

const urlArray = window.location.pathname.split('/companypage/');
// console.log(urlArray[1])
const company_name = urlArray[1];

if (company_name) {

    $.ajax("/api/companies/" + company_name, {
        type: "GET",
        data: company_name
    }).then(
        function (res) {
            //res.company_name will be our company object
            console.log(res);
            $("#companyNameBlock").text(res.company_name);
            $("#iRatingBlock").text(res.Irating + " / 5");
            $("#gRatingBlock").text(res.Grating + " / 5");
            $("#dRatingBlock").text(res.Drating + " / 5");
            $("#positionBlock").text(res.position);
            $("#salaryBlock").text("Salary Range " + res.salary);

            // function getStarRating(company){
            // $.ajax("/api/getStarRating/" + company,{
            //     type: 'GET',
            //     data: starRating,
            //     beforeSend: function(){
            //         $(".rate").html()
            //     }
            // })

            function getReviews(company) {
                $.ajax("/api/getreviews/" + company, {
                    type: "GET",
                    data: company,
                }).then(
                    function (res) {
                        console.log(res);
                        for (let i = 0; i < res.length; i++) {
                            function createNewRow(review) {
                                let newReview = $("<div>");
                                newReview.addClass("review");
                                let reviewLabel = $("<label>");
                                reviewLabel.addClass("reviewText");
                                reviewLabel.text("Review " + (i + 1));
                                let reviewText = $("<p>");
                                reviewText.addClass("reviewText");
                                reviewText.addClass("form-control");
                                reviewText.text(review[i].user_review);
                                let secondDiv = $("<div>");
                                secondDiv.addClass("secondDiv");
                                let editButton = $("<button>");
                                editButton.text("Edit");
                                editButton.addClass("btn btn-success shadow");
                                let deleteButton = $("<button>");
                                deleteButton.text("Delete");
                                deleteButton.addClass("btn btn-success shadow")

                                $(".container").append(newReview);
                                newReview.append(reviewLabel);
                                newReview.append(reviewText);
                                $(".container").append(secondDiv);
                                // secondDiv.append(editButton);
                                // secondDiv.append(deleteButton);
                            };

                            createNewRow(res);

                        }
                    })
            }
            getReviews(company_name);
        }
    );

}




$("#submitButton").click(function (event) {
    event.preventDefault();
    let reviewBody = $("#reviewsBlock").val();
    let titleName = "New Review";
    let starRating = $(".rate").val();


    let newReview = {
        company_name: company_name,
        title: titleName,
        user_rating: starRating,
        user_review: reviewBody
    };

    console.log(newReview);

    function submitReview(review) {
        $.post("../api/reviews", starRating, function(){
            window.location.href = "/companypage/" + company_name;
            console.log("starRating worked!")
        });
        $.post("../api/reviews", review, function () {
            window.location.href = "/companypage/" + company_name;
            console.log("Review has been posted!")
        });
    };

    submitReview(newReview);
});



// $("#editButton").click(function (event) {
//     event.preventDefault();
//     function updateReview(review) {
//         $.ajax({
//             method: "PUT",
//             url: "/api/reviews",
//             data: review
//         })
//             .then(function (res) {
//                 window.location.href = "/companypage/" + company_name;

//                 updateReview();
//             });