import React from 'react';

export function LoadingSpinner({ message = '로딩 중...', className = '' }) {
  return (
    <div className={`loading-state ${className}`}>
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
}
