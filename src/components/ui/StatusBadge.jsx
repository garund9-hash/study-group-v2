import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

export function StatusBadge({ status, showIcon = true, className = '' }) {
  const statusConfig = {
    pending: {
      icon: Clock,
      label: '대기 중',
      class: 'pending'
    },
    approved: {
      icon: CheckCircle,
      label: '승인됨',
      class: 'approved'
    },
    rejected: {
      icon: XCircle,
      label: '거절됨',
      class: 'rejected'
    }
  };

  const config = statusConfig[status];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <span className={`status-badge ${config.class} ${className}`}>
      {showIcon && <Icon size={14} />}
      {config.label}
    </span>
  );
}
