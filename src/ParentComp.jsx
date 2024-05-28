// ParentComponent.js
import React from 'react';
import { useSelector } from 'react-redux';
import ChildComp from './ChildComp';


const ParentComp = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <ChildComp />
      <p>Data from Child: {data}</p>
    </div>
  );
};

export default ParentComp;
