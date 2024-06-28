import React, { useEffect, useState } from 'react';
import Item from './Item';
import Loading from './Loading';

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [loading, setLoading] = useState(false);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 1
    ) {
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  useEffect(() => {
    if (loading) {
      loadMoreItems();
    }
  }, [loading]);

  const loadMoreItems = () => {
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 20 }),
      ]);
      //console.log(items);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4">
      {items.map((item, index) => (
        <Item key={index} item={`Item ${index + 1}`} />
      ))}
      {loading && <Loading />}
    </div>
  );
};

export default InfiniteScroll;
