Meteor.startup(function() {

    Ads.remove({});

    if (Ads.find().fetch().length == 0) {
        console.log("Inserting ads");

        Ads.insert({title:"Title1", content:"Content1", owner:"12345678"});
        Ads.insert({title:"Title2", content:"Content2", owner:"12345678"});
        Ads.insert({title:"Title3", content:"Content3", owner:"12345678"});
        Ads.insert({title:"Title4", content:"Content4", owner:"12345678"});
        Ads.insert({title:"Title5", content:"Content5", owner:"12345678"});
        Ads.insert({title:"Title6", content:"Content6", owner:"12345678"});
        Ads.insert({title:"Title7", content:"Content7", owner:"12345678"});
        Ads.insert({title:"Title8", content:"Content8", owner:"12345678"});
        Ads.insert({title:"Title9", content:"Content9", owner:"12345678"});
        Ads.insert({title:"Title10", content:"Content10", owner:"12345678"});
        Ads.insert({title:"Title11", content:"Content11", owner:"12345678"});
        Ads.insert({title:"Title12", content:"Content12", owner:"12345678"});


        Likes.insert({adId:12345678, userid:12345678});
    }
});
