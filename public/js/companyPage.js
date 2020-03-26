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
            //res.data will be our company object
            console.log(res);
            $("#companyNameBlock").text(res.company_name);
            $("#iRatingBlock").text(res.Irating + " / 5");
            $("#gRatingBlock").text(res.Grating  + " / 5");
            $("#dRatingBlock").text(res.Drating  + " / 5");
            $("#positionBlock").text(res.position);
            $("#salaryBlock").text("Salary Range " + res.salary);

        }
    );

}