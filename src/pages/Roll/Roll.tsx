import React from 'react';
import { useParams } from 'react-router-dom';

const Roll = () => {
  const { id } = useParams();

  return <div>Roll{id}</div>;
};

export default Roll;
