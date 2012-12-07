exports.eejsBlock_styles = function (hook_name, args, cb)
{
  args.content = args.content + require('ep_etherpad-lite/node/eejs/').require("ep_bidi/static/css/style.css");
}
exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
  args.content = require('ep_etherpad-lite/node/eejs/').require("ep_bidi/templates/bidi.ejs") + args.content;
}
