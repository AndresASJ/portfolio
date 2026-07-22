// Credentials — badges, certifications and events, all in one place.
// Single source of truth for the /credentials page. The page renders whatever
// is in this array, newest first.

export type CredentialKind = 'badge' | 'cert' | 'event';

export interface Credential {
  id: string;
  kind: CredentialKind;
  title: string;
  /** Who issued it (badge/cert) or who hosted it (event). */
  issuer: string;
  /** Display date, YYYY.MM — the list is sorted by this, newest first. */
  date: string;
  /** One or two sentences: what it is / what you did there. */
  description: string;
  /** Verification link, badge page, or event site. */
  url?: string;
  /** Optional extras shown as small tags (topics, role, location…). */
  tags?: string[];
  /**
   * Basename of a badge/cert image under src/assets/credentials/, without the
   * extension. Entries without one render text-only — no empty slot.
   */
  image?: string;
}

export const kindLabel: Record<CredentialKind, string> = {
  badge: 'Badge',
  cert: 'Certification',
  event: 'Event',
};

// Add one object per badge/cert/event. The commented shapes at the bottom are
// templates; the page shows a "coming soon" state while this array is empty.
export const credentials: Credential[] = [
  {
    id: 'copilot-finish-up-a-thon',
    kind: 'badge',
    title: 'Copilot "Finish-Up-A-Thon" Challenge',
    issuer: 'GitHub',
    // Month the submission went up on dev.to (2026-06-07).
    date: '2026.06',
    description:
      'Awarded for completing GitHub\'s Copilot "Finish-Up-A-Thon" challenge. I entered Kord, adding true Google Drive FLAC streaming over HTTP range requests instead of full downloads.',
    url: 'https://dev.to/andresasj/finishing-kord-true-streaming-for-google-drive-flac-playback-4c6n',
    tags: ['GitHub Copilot'],
    image: 'copilot-finish-up-a-thon',
  },
  // {
  //   id: 'example-badge',
  //   kind: 'badge',
  //   title: 'Example Dev Badge',
  //   issuer: 'Issuing platform',
  //   date: '2026.05',
  //   description:
  //     'Swap in a real badge (Credly, GitHub, community program…) and describe what it recognizes.',
  //   url: 'https://example.com',
  //   tags: ['topic'],
  // },
  // {
  //   id: 'example-cert',
  //   kind: 'cert',
  //   title: 'Example Certification',
  //   issuer: 'Certifying body',
  //   date: '2026.02',
  //   description: 'Swap in a real certification and link its verification page.',
  //   url: 'https://example.com',
  //   tags: ['topic'],
  // },
  // {
  //   id: 'example-event',
  //   kind: 'event',
  //   title: 'Example Hackathon / Conference',
  //   issuer: 'Host organization',
  //   date: '2025.11',
  //   description: 'Swap in a real event: what it was, what you built or learned there.',
  //   url: 'https://example.com',
  //   tags: ['New York, NY', 'attendee'],
  // },
];

// Newest first, using the YYYY.MM display date.
export const credentialsSorted = (): Credential[] =>
  [...credentials].sort((a, b) => b.date.localeCompare(a.date));

export const kindFilters: { key: CredentialKind | 'All'; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'badge', label: 'Badges' },
  { key: 'cert', label: 'Certifications' },
  { key: 'event', label: 'Events' },
];
