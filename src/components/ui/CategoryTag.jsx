import React from 'react';

export function CategoryTag({ category, className = '' }) {
  return (
    <span className={`category-tag ${className}`}>
      {category}
    </span>
  );
}
