
Template.layout2.events({
    "click #search": function (e) {
        e.preventDefault();
        var text = $('#query').val().trim();
        Session.set("query", text);
    },

    'keydown input' : function (e) {
        if (e.which == 13) {
            e.preventDefault();
            var text = $('#query').val().trim();
            Session.set("query", text);
        }
    }
});

Template.layout2.helpers({
    tag_cloud: function () {

        console.log("tag_cloud called!");

        var ads = Ads.find({});

        /* we must return an array of objects! */
        /*var all_tags = [
            {name: 'car',  link:"http://gd.se"},
            {name: 'barn', link:"http://gd.se"},
            {name: 'dator',link:"http://gd.se"}
        ];*/

        var all_tags = [];

        for (a in ads) {

            var tag_str = a.tags;

            var tags = [];
            tags = tag_str.split(" ");

            for (var t in tags) {
                var obj = {};
                obj.name = t;
                obj.link = "http://www.cnn.com";
            }

            all_tags.push(obj);
        }


        return all_tags;
    }
});

