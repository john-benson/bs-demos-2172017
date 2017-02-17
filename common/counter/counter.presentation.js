const React = require('react');
const Link = require('react-router').Link;
require('./styles.css');

const Counter = ({ count, onClick, lastAmount }) => {
  const finalOnClick = () => {
    return onClick(Math.floor(Math.random() * 10));
  }

  return (<div className={ 'counter-wrapper' }>
    <h2>{ count }</h2>
    <button onClick={ finalOnClick }>Increment</button>
    <div>
      <Link to={`/about`}>About Us</Link> |  <Link to={`/hello`}>Hello World</Link> |  <Link to={`/charts`}>Charts</Link>
    </div>
  </div>)
}

module.exports = Counter;
