Template.layout2.events({
    "click #search": function (e) {
        e.preventDefault();


        var text = $('#query').val().trim();

        Session.set("query", text);
    }
});
