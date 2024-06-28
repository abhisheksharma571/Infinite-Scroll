import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4 text-orange-500">
      {item}
    </div>
  );
};

export default Item;
