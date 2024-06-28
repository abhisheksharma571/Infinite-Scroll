import React from 'react';
import InfiniteScroll from './components/InfiniteScroll';

function App() {
  return (
    <div className="min-h-screen bg-orange-100 p-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center">Infinite <span className="text-orange-500">Scroll</span></h1>
      <InfiniteScroll />
    </div>
  );
}

export default App;
