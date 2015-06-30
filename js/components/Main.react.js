var React = require('react');
var DefaultStore = require('../stores/DefaultStore');
var ActionCreators = require('../actions/ActionCreators');

function getStateFromStores() {
  return {clicked: DefaultStore.clickCount()};
}

var Main = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function(){
    DefaultStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    DefaultStore.removeChangeListener(this._onChange);
  },

  render: function(){
   return <div>
              <h3 onClick={this._handleClick}>Main</h3>
              <div>{this.state.clicked}</div>
         </div>
  },

  _handleClick(){
    ActionCreators.clicked();
  },

  _onChange: function() {
     this.setState(getStateFromStores());
  }
});

module.exports = Main;
