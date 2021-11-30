import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Lester',
//   lastName: 'Sales'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// )

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

reportWebVitals();
