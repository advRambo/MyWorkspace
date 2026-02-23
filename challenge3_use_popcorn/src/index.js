import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './Components/App';
import StarRating from './Components/StarRating';

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie was rated {movieRating} Stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test />
    {/* <StarRating maxRating={10} />
    <StarRating /> */}
  </React.StrictMode>
);
