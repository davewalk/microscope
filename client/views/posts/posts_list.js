var postsData = [
    {
        title: 'The Cavs are open to a trade? Sure, we’ll oblige...',
        author: 'Kevin Hetrick',
        url: 'http://www.cavstheblog.com/?p=19975'
    },
    {
        title: 'Watch Queens Of The Stone Age play "...Like Clockwork" in full at Los Angeles show',
        author: 'unknown',
        url: 'http://www.nme.com/news/queens-of-the-stone-age/70504'
    },
    {
        title: 'Arrested Development on Netflix',
        author: 'none',
        url: 'http://movies.netflix.com/movie/Arrested-Development/70140358?mqso=81003611'
    }
];

Template.postsList.helpers({
    posts: postsData
});
