'use strict';

console.log('App dot js is running');

// JSX

var temp = {
  title: 'Indecision App',
  subTitle: 'This is the subtitle for the Indecision App course'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    temp.title
  ),
  React.createElement(
    'p',
    null,
    temp.subTitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Sione Finau',
  age: 5,
  location: 'Utah'
};

var username = 'Meke Finau';
var userAge = 30;
var userLocation = 'Saratoga Springs';

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  ' ',
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
