console.log('App dot js is running');

// JSX

let temp = {
  title: 'Indecision App',
  subTitle: 'This is the subtitle for the Indecision App course',
};

let template = (
  <div>
    <h1>{temp.title}</h1>
    <p>{temp.subTitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let user = {
  name: 'Sione Finau',
  age: 5,
  location: 'Utah',
};

let username = 'Meke Finau';
let userAge = 30;
let userLocation = 'Saratoga Springs';

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
let templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>{' '}
    {/* TERNARY - great for conditions on one of the two things*/}
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {/* && - great for conditions on one thing */}
    {getLocation(user.location)}
    {/* ELSE - nothing at all */}
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
