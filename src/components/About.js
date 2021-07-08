import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4>About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam possimus perferendis commodi consectetur, neque, accusamus similique iste eligendi eaque exercitationem dicta ullam earum laudantium consequatur sit, nostrum quidem enim.</p>
    </div>
  );
}

export default Rainbow(About);