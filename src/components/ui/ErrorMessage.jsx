import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = React.memo(function ErrorMessage({ message, className = '' }) {
  if (!message) return null;

  return (
    <div className={`error-message ${className}`}>
      <AlertCircle size={18} />
      {message}
    </div>
  );
});
