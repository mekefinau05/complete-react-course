console.log('App dot js is running');

// JSX
let template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
  </div>
);
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
