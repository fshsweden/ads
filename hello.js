// FS.debug = true;
/* Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});*/

/*
    Blog:
      _id
      header
      content
      userId (Meteor.user())
      dateCreated
      dateModified
 */
Blogs = new FS.Collection('blogs', {
  stores: [new FS.Store.FileSystem('blogs', {path: '~/' })]
});

/*
    _id
    _blog_id  (Blog._id)
    userId (Meteor.user());
    comment
 */
Blogcomments = new FS.Collection('blogcomments', {
  stores: [new FS.Store.FileSystem('blogcomments', {path: '~/' })]
});

/*
 _id
 _blog_id  (Blog._id)
 userId (Meteor.user());
 */
Bloglikes = new FS.Collection('bloglikes', {
  stores: [new FS.Store.FileSystem('bloglikes', {path: '~/' })]
});

Uploads = new FS.Collection('uploads', {
  stores: [new FS.Store.FileSystem('uploads', {path: '~/' })]
});

if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.postlist.helpers({
    uploads: function () {
      if (Meteor.user()) {
        return Uploads.find({userId: Meteor.user()._id}).fetch().reverse();
      }
      else
        return Uploads.find({}).fetch().reverse();
    }
  });

  Template.post.events({
    'click .delete_image': function(e) {
      alert(this.original);
    }
  });

  Template.dropzone.events({
    'change .fileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        var newFile = new FS.File(file);

        var user = Meteor.user();

        newFile.user = user.username;
        newFile.userId = user._id;

        console.log('Adding username ' + user.username + ' to this object!')
        Uploads.insert(newFile, function(err, fileObj) {
          if (err != undefined) {
            toastr.error(err,"Failure")
          }
          else {
            toastr.success("File upload worked fine", "Success");
          }
          if (fileObj != undefined) {
            console.log(" fileObj: " + fileObj);
          }
        });
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
