if (Meteor.isClient) {
    Template.page2.helpers({
        ads: function () {
            return Ads.find({});
        }
    });


}
