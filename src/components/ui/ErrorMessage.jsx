import React from 'react';
import { AlertCircle } from 'lucide-react';

export function ErrorMessage({ message, className = '' }) {
  if (!message) return null;

  return (
    <div className={`error-message ${className}`}>
      <AlertCircle size={18} />
      {message}
    </div>
  );
}
