if (Meteor.isClient) {
    Template.page2.helpers({
        blogs: function () {
            return Blogs.find({});
        }
    });


}
