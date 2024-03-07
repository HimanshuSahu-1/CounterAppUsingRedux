import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/Slices/CounterSlice';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
  const count = useSelector((state) => state.Himanshu.value);
  const dispatch = useDispatch();

  return (
    <div >
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />

      <div>{count}</div>
      <br />
      <br />

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;



// To use any functinality of reducers functions we r  using
// useDispatch() Hook;


// to extract exact count use useSelector Hook

