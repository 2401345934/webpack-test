import React from 'react';
import { render } from 'react-dom';



const Hello = () => {
  return (
    <div>
      Hello react
    </div>
  )
}

render(<Hello></Hello>, document.getElementById('root'));