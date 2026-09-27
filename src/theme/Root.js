import React from 'react';

// Film grain over the room (dark only; styled in custom.css).
export default function Root({children}) {
  return (
    <>
      <div className="room-grain" aria-hidden="true" />
      {children}
    </>
  );
}
