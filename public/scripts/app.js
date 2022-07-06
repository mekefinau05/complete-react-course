'use strict';

var template = React.createElement(
  'p',
  null,
  'This is JSX from App js!'
);
var appRoot = document.getElementById('app');

ReactDom.render(template, appRoot);
