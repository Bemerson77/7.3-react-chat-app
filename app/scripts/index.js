/* Main JS */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

// local
var User = require('./components/header.jsx');
var ChatWindowComponents = require('./components/chat-window.jsx');
var ChatForm = require('./components/chat-form.jsx');
var chatModel = require('./models/chat');


var chat = new chatModel.ChatCollection();
var ChatWindow = ChatWindowComponents.ChatWindowList;



ReactDOM.render(
  React.createElement(User, {collection: chat}),
  document.getElementById('header')
);

setInterval(function(){
  chat.fetch().done(function(){
    ReactDOM.render(
      React.createElement(ChatWindow, {collection: chat}),
      document.getElementById('message-list-container')
    );
  });
}, 20000);


ReactDOM.render(
  React.createElement(ChatForm, {collection: chat}),
  document.getElementById('chat-form-con')
);
