import React from 'react';
import './placeholderListCards.css'; 

export const PlaceholderListCards = ({ loading }) => {
  if (loading) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <div className="placeholder-img bg-secondary mb-3"></div>
                <div className="placeholder-title bg-light mb-2"></div>
                <div className="placeholder-description bg-light"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null; 
  }
};


