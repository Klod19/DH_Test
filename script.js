/*global $*/
/*eslint-env browser*/
/*eslint "no-console": "off" */

$("#allCheck").click(function() {
    // iterate through the "normCheck" collection; if "All" is checked, check the current element; otherwise uncheck it 
    $("input[class=normCheck]").each(function(){
        if($("#allCheck").prop("checked") == true)
        $(this).prop("checked", true);
        else{
            $(this).prop("checked", false);
        }
    })
})

$(".normCheck").click(function(){
        // if the total number of elements is equal to the checked elements, check "All"; otherwise uncheck it
        if ($(".normCheck").length == $("input[class=normCheck]:checked").length){
            $("#allCheck").prop("checked", true);
        }
        else{
            $("#allCheck").prop("checked", false);
        }
    
})
