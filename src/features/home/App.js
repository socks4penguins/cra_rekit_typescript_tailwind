import React from 'react';
 
export default function App({ children }) {
  return (
    <div className="home-app fit">
      <div className="page-container fill">{children}</div>
    </div>
  );
}
