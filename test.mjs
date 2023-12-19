import markdownit from 'markdown-it';
import lazy_loading from './index.mjs';

const md = markdownit();

md.use(lazy_loading);
console.log(md.render(`![](example.png "image title")`));
// <p><img src="example.png" alt="" title="image title" loading="lazy"></p>\n
