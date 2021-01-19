let posts = [];

let post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
};
post1.body = '<p>' + post1.body + '</p>';
post1.tags = ['lorem', 'ipsum', 'sit', 'amet'];

let post2 = {
  title: 'On Giving',
  published: '1923, by Kahlil Gibran',
  body: 'You give but little when you give of your possessions. It is when you give of yourself that you truly give.',
};
post2.body = '<p>' + post2.body + '</p>';

posts.push(post1, post2);
console.log(posts);

let postsList = Handlebars.compile($('#postsList').html());

Handlebars.registerPartial('post', $('#post').html());
Handlebars.registerPartial('tag', $('#tag').html());

$(postsList({posts: posts})).insertBefore('#post');

