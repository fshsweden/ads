if (Meteor.isClient) {

    Template.main.helpers({
        blogs: function () {
            console.log("blogs helper called!");

            var profile = {
                header: 'avatar.jpg',
                content: 'content!!!!!',
                name: {
                    first: 'John',
                    last: 'Smith'
                }
            }

            return profile;

        }
    });

}
