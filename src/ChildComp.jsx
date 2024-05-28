import React from 'react';
import { useDispatch } from 'react-redux';

const ChildComp = () => {
  const dispatch = useDispatch();

  const sendDataToParent = (data) => {
    dispatch({ type: 'SET_DATA', payload: data });
  };

  return (
    <button onClick={() => sendDataToParent('Hello from Child using redux')}>
      Send Data to Parent
    </button>
  );
};

export default ChildComp;
