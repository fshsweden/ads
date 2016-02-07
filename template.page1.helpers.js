if (Meteor.isClient) {
    Template.page1.events({
        'click #mybutton': function (event) {

            alert("HEJ");

            var v = $('#v').val();
            var k = $('#k').val();

            var obj = {};
            obj[k] = v;

            Meteor.call('addProperty',
                obj,
                function (error, commentId) {
                if (error) {
                    console.log("asasas JHGFjhfjhgf");
                }
                else {
                    console.log("asasa jhgjjf");
                }
            });
        }
    });
}