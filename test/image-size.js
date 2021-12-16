var test = require('tape');

var md = require('markdown-it')();
var lazy_loading = require('../index.js');
md.use(lazy_loading, {
  image_size: true,
  base_path: __dirname,
});

test('image size test', function (t) {
  t.plan(1);

  t.equal(
    md.render(`![](dummy-200x200.png "image title")`),
    '<p><img src="dummy-200x200.png" alt="" title="image title" loading="lazy" decoding="async" width="200" height="200"></p>\n'
  );

});

