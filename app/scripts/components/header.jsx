/* HEADER  */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

// local



var HeaderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>
        <div className="title-container">
          <h1 className="title">TIY Chat</h1>
          <h1 className="add-icon-container">
            <i className="fa fa-plus-circle"></i>
          </h1>
        </div>

        <div className="login">
          <span className="login-name">
            Logged in as Izzbrancuh
          </span>
        </div>
      </div>
    )
  }
});


module.exports = HeaderComponent;
