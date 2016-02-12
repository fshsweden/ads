if (Meteor.isServer) {
    Meteor.methods({
        addProperty: function (obj) {

            var blogs = Blogs.find().fetch();

            // var obj = {};
            //obj[keyStr] = valueStr;

            blogs.forEach(function(item) {
                console.log("Updating ID " + item._id);
                Blogs.update(
                    {_id : item._id},
                    {$set: obj }
                );
            })
        },

        removeAllAds: function() {
            return Ads.remove({});
        }
    })
}