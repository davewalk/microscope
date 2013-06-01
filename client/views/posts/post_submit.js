Template.postSubmit.events({
  'submit form': function(event) {
    event.preventDefault();

    var post = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val(),
      message: $(event.target).find('[name=message]').val()
    }

    post._id = Posts.insert(post);

    Meteor.call('post', post, function (err, id) {
      if (err) return alert(err.reason);

      Meteor.Router.to('postPage', id);
    });
  }
});