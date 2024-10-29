import React from 'react';

function Child({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <h1 className='text-center text-danger'>Child</h1>
      
     <div className='d-flex justify-content-center'>
     <button className='btn btn-primary m-3 ' onClick={onIncrement}>Increment</button>
     <button className='btn btn-primary m-3' onClick={onDecrement}>Decrement</button>
     </div>
    </div>
  );
}

export default Child;
