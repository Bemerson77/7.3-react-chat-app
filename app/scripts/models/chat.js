/* MODEL */

// 3rd party
var Backbone = require('backbone');

// local


var Chat = Backbone.Model.extend({

});

var ChatCollection = Backbone.Collection.extend({
  model: Chat,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages'
});


module.exports = {
  'Chat': Chat,
  'ChatCollection': ChatCollection
};
