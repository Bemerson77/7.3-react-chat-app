/* Chat Window */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

// local


var ChatWindowComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){

    return (

        <ul className="message-list">
          <li className="message-list-item">
            <span className="user-name">{this.props.model.get('username')}</span>
            <span className="message-content"> {this.props.model.get('content')}</span>
            <span className="created-at">time</span>
          </li>
        </ul>

    )
  }
});

var ChatWindowList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var messages = this.props.collection.map(function(model){
      return (
        <ChatWindowComponent model={model} key={model.get('_id')}/>
      )
    });
    var messagesOrdered = messages.reverse();
      return (
        <div className="chat-window">
          {messagesOrdered}
        </div>
      )
  }
});




module.exports = {
  ChatWindowComponent: ChatWindowComponent,
  ChatWindowList: ChatWindowList
};
