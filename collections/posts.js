Posts = new Meteor.Collection('posts');

Meteor.methods({
	post: function (postAttrs) {
		var user = Meteor.user();
		var postWithSameLink = Posts.findOne({url: postAttrs.url});

		if (!user)
			throw new Meteor.Error(401, "You need to login to post new stories");

		if (!postAttrs.title)
			throw new Meteor.Error(422, 'Please fill in a headline');

		if (postAttrs.url && postWithSameLink) {
			throw new Meteor.Error(302,
				'This link has already been posted.',
				postWithSameLink._id);
		}

		var post = _.extend(_.pick(postAttrs, 'url'), {
			title: postAttrs.title + (this.isSimulation ? '(client)' : '(server)'),
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		if (! this.isSimulation) {	
			var	Future = Npm.require('fibers/future');
			var future = new Future();

			Meteor.setTimeout(function() {
				future.ret();
			}, 5 * 1000);
			future.wait();
		}
		
		var postId = Posts.insert(post);
		return postId;	
	}
});