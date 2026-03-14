import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { exportParticipantsToCSV } from '../utils/csvExporter';

const PARTICIPANTS = [
  { name: '홍길동', email: 'hong@test.com', appliedAt: '2024-01-15T10:00:00.000Z' },
  { name: '김철수', email: 'kim@test.com', appliedAt: '2024-01-16T11:00:00.000Z' }
];

// Track the last link created so tests can inspect its attributes
let lastLink;

beforeEach(() => {
  global.URL.createObjectURL = vi.fn(() => 'blob:mock-url');
  global.URL.revokeObjectURL = vi.fn();

  lastLink = {
    attributes: {},
    style: {},
    click: vi.fn(),
    setAttribute(name, value) { this.attributes[name] = value; },
    getAttribute(name) { return this.attributes[name]; }
  };

  vi.spyOn(document, 'createElement').mockReturnValue(lastLink);
  vi.spyOn(document.body, 'appendChild').mockImplementation(() => {});
  vi.spyOn(document.body, 'removeChild').mockImplementation(() => {});
});

afterEach(() => vi.restoreAllMocks());

describe('exportParticipantsToCSV', () => {
  it('returns false for an empty participants array', () => {
    expect(exportParticipantsToCSV([], '스터디')).toBe(false);
  });

  it('does not create an object URL for an empty participants array', () => {
    exportParticipantsToCSV([], '스터디');
    expect(URL.createObjectURL).not.toHaveBeenCalled();
  });

  it('creates an object URL and triggers a click for non-empty participants', () => {
    exportParticipantsToCSV(PARTICIPANTS, '리액트 스터디');
    expect(URL.createObjectURL).toHaveBeenCalledOnce();
    expect(lastLink.click).toHaveBeenCalledOnce();
  });

  it('sets the download filename to include the study title', () => {
    exportParticipantsToCSV(PARTICIPANTS, '나의 스터디');
    expect(lastLink.attributes['download']).toContain('나의 스터디');
  });

  it('sets the download filename with the witme_ prefix', () => {
    exportParticipantsToCSV(PARTICIPANTS, '스터디');
    expect(lastLink.attributes['download']).toMatch(/^witme_/);
  });

  it('appends link to body and then removes it', () => {
    exportParticipantsToCSV(PARTICIPANTS, '스터디');
    expect(document.body.appendChild).toHaveBeenCalledOnce();
    expect(document.body.removeChild).toHaveBeenCalledOnce();
  });

  it('handles a single participant without throwing', () => {
    const single = [{ name: '홍길동', email: 'hong@test.com', appliedAt: '2024-01-15T10:00:00.000Z' }];
    expect(() => exportParticipantsToCSV(single, '스터디')).not.toThrow();
  });
});
