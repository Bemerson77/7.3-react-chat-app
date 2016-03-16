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
    var messages = this.props.collection.map(function(model){
      return (<p className="messages">{model.get('content')}</p>)
    });

    return (
      <div>
        <ul className="message-list">
          <li className="message-list-item">
            <span className="user-name">Izzbrancuh</span>
            <span className="message-content"></span>
            <span className="created-at">time</span>
          </li>
        </ul>
      </div>
    )
  }
});

// var ChatWindowList = React.createClass({
//   mixins: [Backbone.React.Component.mixin],
//   render: function(){
//     var messages = this.props.collection.map(function(model){
//
//     });
//   }
// });




module.exports = ChatWindowComponent;
