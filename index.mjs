import imageSize from 'image-size';
import path from 'node:path';

function lazy_loading_plugin(md, mdOptions) {
  var defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    token.attrSet('loading', 'lazy');

    if (mdOptions && mdOptions.decoding === true) {
      token.attrSet('decoding', 'async');
    }

    if (mdOptions && mdOptions.base_path && mdOptions.image_size === true) {
      const imgSrc = token.attrGet('src');
      const imgPath = path.join(mdOptions.base_path, imgSrc);
      const dimensions = imageSize(imgPath);

      token.attrSet('width', dimensions.width);
      token.attrSet('height', dimensions.height);
    }

    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};

export default lazy_loading_plugin;

