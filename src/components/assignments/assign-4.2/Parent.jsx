import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className='text-center text-primary'>Parent</h1>
      <p className='text-center fs-4'>Count: {count}</p>
      <Child count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

export default Parent;
