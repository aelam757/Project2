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

            function getReviews(company) {
                $.ajax("/api/getreviews/" + company, {
                    type: "GET",
                    data: company,
                }).then(
                    function (res) {
                        console.log(res);
                        // for() {};
                    }
                )
        }
        getReviews(company_name);
        }
    );

};
$("#submitButton").click(function (event) {
    event.preventDefault();
    console.log("Button has been clicked...")
    if (!reviewText.val().trim()) {
        return;
    };

    let newReview = {
        title: titleName.val().trim(),
        user_review: reviewBody.val().trim(),
        company_name: company_name
    };

    function submitReview(review) {
        $.post("api/reviews", review, function () {
            window.location.href = "/companypage/" + company_name;
            console.log("Review has been posted!")
        });
    };

    // NEED TO ADD INFORMATION ON STAR REVIEW

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
