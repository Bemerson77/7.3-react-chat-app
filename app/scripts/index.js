/* Main JS */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

// local
var Header = require('./components/header.jsx');
var ChatWindow = require('./components/chat-window.jsx');
var ChatForm = require('./components/chat-form.jsx');
var chatModel = require('./models/chat');


var chat = new chatModel.ChatCollection();




ReactDOM.render(
  React.createElement(Header),
  document.getElementById('header')
);

chat.fetch().done(function(){
  ReactDOM.render(
    React.createElement(ChatWindow, {collection: chat}),
    document.getElementById('message-list-container')
  );
});  

ReactDOM.render(
  React.createElement(ChatForm, {collection: chat}),
  document.getElementById('chat-form-con')
);
