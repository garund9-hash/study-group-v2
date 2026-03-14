import React from 'react';

export const CategoryTag = React.memo(function CategoryTag({ category, className = '' }) {
  return (
    <span className={`category-tag ${className}`}>
      {category}
    </span>
  );
});
