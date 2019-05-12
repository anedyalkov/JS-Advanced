function attachEvents() {
    $("#items > li").click(function() {
        if ($(this).attr("data-selected")) {
            $(this).removeAttr("data-selected");
            $(this).css("background", "");
        } else {
            $(this).attr("data-selected", true);
            $(this).css("background", "#DDD");
        }
    });
    $("#showTownsButton").click(function() {
        let values = $("#items > li[data-selected=true]")
            .toArray()
            .map(li => {
                return $(li).text();
            })
            .join(", ");
        $("#selectedTowns").text("Selected towns: " + values);
    });
}
