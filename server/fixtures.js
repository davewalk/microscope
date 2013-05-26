if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'So I wrote a JSON API Framework and the Framework was the Least Interesting Part',
        author: 'Gregg Caines',
        url: 'http://caines.ca/blog/programming/so-i-wrote-a-json-api-framework-and-the-framework-was-the-least-interesting-part'
    });

    Posts.insert({
        title: 'Algorithms, Data Structures, and Design Patterns for Self-Taught Developers',
        author: 'Antonin Januska',
        url: 'http://antjanus.com/blog/web-development-tutorials/learn-the-unlearned-algorithms-data-structures-and-design-patterns'
    });

    Posts.insert({
        title: 'Free Code School this weekend',
        author: 'none',
        url: 'http://www.codeschool.com/free-weekend?fb_action_ids=10201128707883052&fb_action_types=og.likes&fb_ref=.UZaSvvvXBpk.send&fb_source=aggregation&fb_aggregation_id=288381481237582'
    });
}
