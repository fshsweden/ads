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
FSBlogs = new FS.Collection('blogs', {
  stores: [new FS.Store.FileSystem('blogs', {path: '~/' })]
});

FSBlogs.helpers = {
  blogs : function() {
    return Blogs.all({});
  }
}


/*
    _id
    _blog_id  (Blog._id)
    userId (Meteor.user());
    comment
 */
FSBlogcomments = new FS.Collection('blogcomments', {
  stores: [new FS.Store.FileSystem('blogcomments', {path: '~/' })]
});

/*
 _id
 _blog_id  (Blog._id)
 userId (Meteor.user());
 */
FSBloglikes = new FS.Collection('bloglikes', {
  stores: [new FS.Store.FileSystem('bloglikes', {path: '~/' })]
});

FSUploads = new FS.Collection('uploads', {
  stores: [new FS.Store.FileSystem('uploads', {path: '~/' })]
});

if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault('counter', 0);

  /*
    Template.postlist.helpers({
    uploads: function () {
      if (Meteor.user()) {
        return FSUploads.find({userId: Meteor.user()._id}).fetch().reverse();
      }
      else
        return FSUploads.find({}).fetch().reverse();
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
        FSUploads.insert(newFile, function(err, fileObj) {
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
   */
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
