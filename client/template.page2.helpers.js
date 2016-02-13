if (Meteor.isClient) {
    Template.page2.helpers({
        ads: function () {

            var query = /.*iphone.*/;

            /* Session.get("query") */
            return Ads.find({tags: query});
        }
    });


}
