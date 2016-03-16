/* Chat-Form */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

// local


// utility

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var ChatFormComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  addContent: function(e){
    e.preventDefault();
    var contentAdd = this.$el.serializeObject();
    this.props.collection.create(contentAdd);
  },
  render: function(){
    return (
        <form className="chat-form">
          <input className="input" name="content" type="text" placeholder="Chat with someone..."/>
          <button id="submit-button" className="btn btn-primary" type="submit" onClick={this.addContent}>Send</button>
        </form>
    )
  }
});


module.exports = ChatFormComponent;
