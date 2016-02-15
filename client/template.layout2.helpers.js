Template.layout2.events({
    "click #search": function (e) {
        e.preventDefault();
        var text = $('#query').val().trim();
        Session.set("query", text);
    },

    'keydown input': function (e) {
        if (e.which == 13) {
            e.preventDefault();
            var text = $('#query').val().trim();
            Session.set("query", text);
        }
    }
});

Template.layout2.helpers({

    tag_cloud2: function () {
        return [
            {link: "hhhhh1", name: "abcdefg1"},
            {link: "hhhhh2", name: "abcdefg2"},
            {link: "hhhhh3", name: "abcdefg3"},
            {link: "hhhhh4", name: "abcdefg4"},
            {link: "hhhhh5", name: "abcdefg5"},
            {link: "hhhhh6", name: "abcdefg6"},

        ];
    },
    tag_cloud: function () {

        console.log("tag_cloud called!");

        var ads_res = Ads.find({}).fetch(); //

        console.log("find() done. result = " + ads_res.length);


        console.log("TEST:" + JSON.stringify(ads_res[0]));

        var all_tags = [];

        // for..in is INCORRECT!!

        console.log("Creating Set");
        var set = new Set();
        console.log("Adding to set!");
        for (var index = 0; index < ads_res.length; index++) {
            console.log("Ac cessing object " + index);
            var obj = ads_res[index];
            var tag_str = obj.tags;
            if (tag_str === undefined) {
                console.log("UNDEFINED FOUND!")
            }
            else {
                var tags = [];
                tags = tag_str.split(" ");
                for (var i = 0; i < tags.length; i++) {

                    console.log("Adding " + tags[i]);
                    set.add(tags[i]);
                    console.log("DONE Adding " + tags[i]);
                }
            }
        }
        console.log("DONE Constructing SET size = " + set.size);
        for (var item of set) {
            console.log("SET ITEM " + item);
            var obj = {};
            obj.name = item;
            obj.link = "http://www.cnn.com";
            all_tags.push(obj);
        }


/*
        for (var index = 0; index < ads_res.length; index++) {

            var obj = ads_res[index];

            console.log("Ad:" + JSON.stringify(obj).toString());
            var tag_str = obj.tags;

            if (tag_str === undefined) {

            }
            else {
                console.log("tag_str:" + tag_str);

                var tags = [];
                tags = tag_str.split(" ");

                for (var i = 0; i < tags.length; i++) {

                    var t = tags[i];

                    var obj = {};
                    obj.name = t;
                    obj.link = "http://www.cnn.com";
                }

                all_tags.push(obj);
            }
        }
*/
        console.log("returning #items " + all_tags.length);
        return all_tags;
    }
});

