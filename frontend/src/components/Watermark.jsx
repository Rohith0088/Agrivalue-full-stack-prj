import React from 'react';

const Watermark = () => {
  return (
    <div className="fixed top-4 right-4 z-50 pointer-events-none opacity-20 select-none">
      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
        rohit
      </span>
    </div>
  );
};

export default Watermark;
