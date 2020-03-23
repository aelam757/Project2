
// This Express query string should replace the current page with the Reviews page.
$("#submitButton").click(function (event){
    event.preventDefault();
    let company_name = $("#companyName").val();
    if (!company_name) return;

    //
    window.location.replace(`/companypage?myCopmanies=${company_name}`);
});



