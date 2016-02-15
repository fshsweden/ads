if (Meteor.isClient) {
    Template.page2.helpers({
        ads: function () {

            console.log('page2.ads() helper');
            var srch = Session.get("query");

            // var query = /.*iphone.*/;

            if (srch == 'undefined') {
                return Ads.find({});
            }
            else {
                console.log('page2.ads() argument:' + srch);

                // var regex = new RegEx(srch);

                var regex = srch;

                // console.log(typeof regex);
                // console.log(JSON.stringify(regex));

                return Ads.find({tags: new RegExp(regex)});
            }
        }


    });


}
