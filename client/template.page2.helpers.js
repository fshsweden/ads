if (Meteor.isClient) {
    Template.page2.helpers({
        ads: function () {

            console.log('Ads helper');
            var srch = Session.get("query");

            // var query = /.*iphone.*/;
            console.log('argument:' + srch);

            // var regex = new RegEx(srch);

            var regex = srch;

            console.log(typeof regex);
            // console.log(JSON.stringify(regex));

            return Ads.find({tags: new RegExp(regex)});
        }


    });


}
