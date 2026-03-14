const FILE_NAME_PREFIX = 'witme_';

/**
 * Export participants data as CSV
 */
export function exportParticipantsToCSV(participants, studyTitle) {
  if (participants.length === 0) {
    return false;
  }

  const headers = ['Name', 'Email', 'Applied At'];
  const rows = participants.map(participant => [
    participant.name,
    participant.email,
    new Date(participant.appliedAt).toLocaleDateString()
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Prepend UTF-8 BOM (\uFEFF) so Excel correctly interprets the encoding
  const blob = new Blob(["\uFEFF" + csvContent], {
    type: 'text/csv;charset=utf-8;'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${FILE_NAME_PREFIX}${studyTitle}_participants.csv`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
