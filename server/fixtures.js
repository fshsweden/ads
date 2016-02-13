Meteor.startup(function() {

    Ads.remove({});

    if (Ads.find().fetch().length == 0) {
        console.log("Inserting ads");

        var a = Ads.insert({title:"Title1", content:"Content1", tags:"bil kläder barn", owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title2", content:"Content2", tags:"dator",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title3", content:"Content3", tags:"iphone iphone6 telefon",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title4", content:"Content4", tags:"iphone skal tillbehör",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title5", content:"Content5", tags:"ipad dator",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title6", content:"Content6", tags:"android telefon rea",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title7", content:"Content7", tags:"android tablet dator",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title8", content:"Content8", tags:"bil kläder barn",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title9", content:"Content9", tags:"bil kläder barn",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title10", content:"Content10", tags:"bil kläder barn",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title11", content:"Content11", tags:"bil kläder barn",  owner:"12345678"});
        console.log(a);
        a = Ads.insert({title:"Title12", content:"Content12", tags:"bil kläder barn",  owner:"12345678"});
        console.log(a);


        Likes.insert({adId:12345678, userid:12345678});
    }
});
