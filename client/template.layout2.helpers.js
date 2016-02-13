Template.layout2.events({
    "click #search": function (e) {
        console.log("SEARCH");
        e.preventDefault();

        var text = $('#query').val().trim();

        console.log("Searching for:" + text);
        Session.set("query", text);
    }
});
