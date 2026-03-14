/**
 * Export participants data as CSV
 */
export function exportParticipantsToCSV(participants, studyTitle) {
  if (participants.length === 0) {
    alert('내보낼 참가자가 없습니다.');
    return;
  }

  const headers = ['Name', 'Email', 'Applied At'];
  const rows = participants.map(p => [
    p.name,
    p.email,
    new Date(p.appliedAt).toLocaleDateString()
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(r => r.join(','))
  ].join('\n');

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: 'text/csv;charset=utf-8;'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `witme_${studyTitle}_participants.csv`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
