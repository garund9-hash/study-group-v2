import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { STATUS_TYPES } from '../../constants/constants';

export const StatusBadge = React.memo(function StatusBadge({ status, showIcon = true, className = '' }) {
  const statusConfig = {
    [STATUS_TYPES.PENDING]: {
      icon: Clock,
      label: '대기 중',
      cssClass: 'pending'
    },
    [STATUS_TYPES.APPROVED]: {
      icon: CheckCircle,
      label: '승인됨',
      cssClass: 'approved'
    },
    [STATUS_TYPES.REJECTED]: {
      icon: XCircle,
      label: '거절됨',
      cssClass: 'rejected'
    }
  };

  const config = statusConfig[status];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <span className={`status-badge ${config.cssClass} ${className}`}>
      {showIcon && <Icon size={14} />}
      {config.label}
    </span>
  );
});
