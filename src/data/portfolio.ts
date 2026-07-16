// Portfolio content — single source of truth for the site's identity,
// projects, socials and the hero marquee. Built from Andres Jimenez's real
// GitHub work (github.com/AndresASJ).
//
// EDIT ME: a few public-facing values are placeholders, marked `TODO`.
// Outcome metrics are honest but illustrative — refine with real numbers.

export type ProjectStatus = 'Shipped' | 'WIP';

export interface BuiltItem {
  h: string;
  d: string;
}

export interface OutcomeStat {
  metric: string;
  label: string;
}

export interface CaseBody {
  problem: string;
  approach: string;
  built: BuiltItem[];
  outcome: OutcomeStat[];
  learnings: string;
  gallery: string[];
}

export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  role: string;
  timeframe: string;
  status: ProjectStatus;
  category: string;
  stack: string[];
  impact: string;
  imgLabel: string;
  liveUrl?: string;
  repoUrl?: string;
  body: CaseBody;
}

export interface Social {
  label: string;
  href: string;
}

// --- Identity -------------------------------------------------------------
export const site = {
  name: 'Andres Jimenez',
  initials: 'AJ',
  role: 'software engineer',
  email: 'andres@asjcoding.com',
  // Set to '' to hide the city.
  location: 'New York, NY',
  availability: 'Open to software engineering roles · 2026',
  tagline:
    'I build things end-to-end — a native lossless audio player, a self-hosted homelab, and the computer-vision and algorithm projects in between.',
  resumeUrl: '/assets/Andres_Jimenez_Resume.pdf',
};

export const projects: Project[] = [
  {
    id: 'kord',
    title: 'Kord',
    year: '2026',
    summary:
      'A native, bit-perfect FLAC music player for iPhone & Mac — your local library decoded bit-for-bit and sent to your DAC exactly as it was mastered.',
    role: 'Solo Developer',
    timeframe: '2026 — present',
    status: 'WIP',
    category: 'Audio / Apple',
    stack: ['Swift', 'SwiftUI', 'Core Audio', 'AVFoundation'],
    impact: 'Bit-perfect lossless playback on iPhone & Mac — in private development, waitlist open.',
    imgLabel: 'kord · now playing',
    liveUrl: 'https://kordsound.com',
    repoUrl: 'https://github.com/AndresASJ/FlacPlayer-Feedback',
    body: {
      problem:
        'Most music players quietly resample or transcode your files — so the lossless FLAC you ripped never reaches your ears untouched. Between the file and the DAC sits a system mixer, hidden EQ, and loudness normalization. For people who care about the recording, "lossless" on the box and bit-perfect at the output are not the same thing.',
      approach:
        'I built Kord up from the signal path, native in Swift for both the iPhone in your pocket and the rig on your desk. Decode FLAC bit-for-bit, switch the hardware sample rate to match the file, and hand the samples to the DAC with nothing in between — direct USB-C DAC output on iPhone, exclusive CoreAudio hardware access on Mac. Everything else (EQ, lyrics, library) is built to put you closer to the master, never between you and it.',
      built: [
        {
          h: 'Bit-perfect playback',
          d: 'FLAC decoded bit-for-bit with automatic sample-rate switching to match each file — no resampling, no system mixer in the path, no secret normalization. Direct DAC output on iPhone; exclusive hardware access on Mac.',
        },
        {
          h: 'Parametric EQ',
          d: 'Real per-band control — center frequency, gain and Q on every band — with saveable presets per device and instant bypass to A/B against the untouched signal.',
        },
        {
          h: 'Synced lyrics',
          d: 'Line-by-line lyrics that move in time with the music, highlighted as you listen and never a beat behind.',
        },
        {
          h: 'Self-organizing library',
          d: 'Point Kord at a folder and it reads tags, groups albums and artists, fetches artwork and lets you browse by artist, album or decade — so you spend your time listening, not filing.',
        },
      ],
      outcome: [
        { metric: 'Bit-perfect', label: 'FLAC, no resampling in the path' },
        { metric: 'iPhone & Mac', label: 'native Swift, universal purchase' },
        { metric: 'iOS 17 · macOS 14', label: 'private dev — waitlist open' },
      ],
      learnings:
        'Shipping a real audio app means owning the unglamorous edges — sample-rate switching, DAC routing, metadata weirdness, a support channel — long before any of it is visible. Keeping the source private but triage public (a feedback tracker with structured issue forms) turned out to be a clean way to involve listeners without exposing the build.',
      gallery: ['now playing', 'parametric EQ', 'library view'],
    },
  },
  {
    id: 'homelab-cm3588',
    title: 'CM3588 Homelab',
    year: '2026',
    summary:
      'A complete, reproducible self-hosted stack on a single FriendlyElec CM3588 board — 20+ services, fully containerized, documented to rebuild from scratch.',
    role: 'Maintainer',
    timeframe: '2024 — present',
    status: 'Shipped',
    category: 'Infra / Self-hosting',
    stack: ['Docker', 'Docker Compose', 'Linux', 'CasaOS'],
    impact: '20+ self-hosted services on one ARM SBC, kill-switched VPN, remote-accessible.',
    imgLabel: 'cm3588 · service dashboard',
    liveUrl: 'https://github.com/AndresASJ/Friendly-Elec-CM3588',
    repoUrl: 'https://github.com/AndresASJ/Friendly-Elec-CM3588',
    body: {
      problem:
        'Self-hosting usually ends up as a pile of undocumented containers that only the person who built it can operate — and that nobody, including future-you, can rebuild after a disk dies.',
      approach:
        'I treated the homelab as a living blueprint: every service is a sanitized Docker Compose file, every decision is written down, and the whole thing is reproducible from a freshly flashed board. CasaOS sits on top for day-to-day management; the docs carry the actual knowledge.',
      built: [
        {
          h: 'Containerized service stack',
          d: 'Media (Jellyfin/Plex + the *arr stack), photos (Immich), home automation (Home Assistant), personal cloud (Seafile), DNS-level ad-blocking (AdGuard Home) and more — all as Compose files.',
        },
        {
          h: 'Kill-switched downloads',
          d: 'qBittorrent and slskd forced through ProtonVPN WireGuard via Gluetun, so traffic drops dead if the tunnel does.',
        },
        {
          h: 'Secure remote access',
          d: 'Nginx Proxy Manager, Cloudflare Tunnel and Tailscale for getting in from anywhere without exposing the box directly.',
        },
      ],
      outcome: [
        { metric: '20+', label: 'self-hosted services' },
        { metric: '1', label: 'single-board computer (ARM64)' },
        { metric: '100%', label: 'containerized & documented' },
      ],
      learnings:
        'Infrastructure you can’t rebuild is a liability, not an asset. Writing the docs as I went — to the point a stranger could reproduce the stack — was the difference between a hobby and something I actually trust.',
      gallery: ['compose stack', 'VPN routing', 'remote access'],
    },
  },
  {
    id: 'card-detection',
    title: 'Card Detection',
    year: '2025',
    summary:
      'A real-time computer-vision system that detects and identifies playing cards from a webcam feed using contour analysis and ORB feature matching.',
    role: 'Solo Developer',
    timeframe: '2025',
    status: 'Shipped',
    category: 'Computer Vision',
    stack: ['Python', 'OpenCV', 'NumPy'],
    impact: 'Recognizes multiple cards live from a webcam, with on-frame labels.',
    imgLabel: 'card detection · webcam feed',
    liveUrl: 'https://github.com/AndresASJ/Card-Detection',
    repoUrl: 'https://github.com/AndresASJ/Card-Detection',
    body: {
      problem:
        'Recognizing playing cards from a live camera is a deceptively hard CV problem: cards rotate, overlap, catch glare, and have to be matched against a 52-card template set fast enough to feel real-time.',
      approach:
        'I split it into detection and recognition. Contour analysis isolates card-shaped quadrilaterals in each frame and warps them flat; ORB feature matching then identifies each card against a set of template images. The pipeline is modular so each stage can be tested on its own.',
      built: [
        {
          h: 'Contour-based detection',
          d: 'Finds and perspective-corrects card-shaped contours in the webcam feed, handling multiple cards per frame.',
        },
        {
          h: 'ORB recognition',
          d: 'Matches each detected card against template images using Oriented FAST and Rotated BRIEF features — rotation-tolerant and license-free.',
        },
        {
          h: 'Live visual feedback',
          d: 'Draws bounding boxes and card identities straight onto the video, with a clean module split (card, detector, matcher, utils).',
        },
      ],
      outcome: [
        { metric: 'Real-time', label: 'webcam card recognition' },
        { metric: 'ORB', label: 'rotation-tolerant matching' },
        { metric: '52', label: 'card template set' },
      ],
      learnings:
        'Classic computer vision still goes a long way before you reach for a neural net. Getting the contour and warp stages right made recognition almost easy — most of the accuracy was won in preprocessing.',
      gallery: ['detection overlay', 'template match'],
    },
  },
  {
    id: 'pychess',
    title: 'PythonChess',
    year: '2025',
    summary:
      'A full chess game in Python with a Pygame GUI — complete rule enforcement, move highlighting, and check/checkmate detection.',
    role: 'Solo Developer',
    timeframe: '2025',
    status: 'Shipped',
    category: 'Games',
    stack: ['Python', 'Pygame'],
    impact: 'Standard chess rules with check & checkmate detection and a clickable board.',
    imgLabel: 'pythonchess · board',
    liveUrl: 'https://github.com/AndresASJ/PythonChess',
    repoUrl: 'https://github.com/AndresASJ/PythonChess',
    body: {
      problem:
        'Implementing chess properly forces you to encode every rule precisely — legal moves per piece, turn order, and the recursive question of whether a move leaves your own king in check.',
      approach:
        'I modelled the board and pieces explicitly, generated valid moves per piece type, and layered check/checkmate detection on top of game-state tracking, with a Pygame GUI that highlights selections and legal targets.',
      built: [
        {
          h: 'Rules engine',
          d: 'Standard movement for every piece, turn-based play, and game-state tracking.',
        },
        {
          h: 'Check & checkmate detection',
          d: 'Validates that moves don’t leave the king in check and detects terminal positions.',
        },
        {
          h: 'Interactive board',
          d: 'A Pygame UI that highlights the selected piece and its valid moves and shows game status.',
        },
      ],
      outcome: [
        { metric: 'Full rules', label: 'every piece, legal moves' },
        { metric: 'Check / mate', label: 'detection built in' },
      ],
      learnings:
        'A clear separation between game state and rendering kept the rule logic testable. Chess is a great forcing function for thinking about edge cases you’d otherwise skip.',
      gallery: ['move highlighting'],
    },
  },
  {
    id: 'ip-data',
    title: 'IP-Data',
    year: '2024',
    summary:
      'A Python tool that geolocates any public IP and renders its location on an interactive map you can open in the browser.',
    role: 'Solo Developer',
    timeframe: '2024',
    status: 'Shipped',
    category: 'Tooling',
    stack: ['Python', 'Folium', 'Requests'],
    impact: 'Validates, geolocates and maps any public IP to an interactive HTML map.',
    imgLabel: 'ip-data · folium map',
    liveUrl: 'https://github.com/AndresASJ/IP-Data',
    repoUrl: 'https://github.com/AndresASJ/IP-Data',
    body: {
      problem:
        'Looking up where an IP address resolves usually means bouncing between a half-dozen websites — and none of them just hand you a map you can keep.',
      approach:
        'Validate the input, query IP-API for location data, refine coordinates with Google’s Geolocation API, and render the result as an interactive Folium map saved to a standalone HTML file.',
      built: [
        {
          h: 'IP lookup pipeline',
          d: 'Input validation, IP-API geolocation, and a Google Geolocation pass for more accurate coordinates.',
        },
        {
          h: 'Map generation',
          d: 'Generates an interactive, centered map with Folium and writes it to a self-contained map.html.',
        },
      ],
      outcome: [
        { metric: '2 APIs', label: 'IP-API + Google Geolocation' },
        { metric: 'Folium', label: 'interactive HTML map output' },
      ],
      learnings:
        'Stitching a couple of focused APIs together with a clean output format turns a tedious manual task into a one-command tool — the kind of small utility you actually keep around.',
      gallery: ['map output'],
    },
  },
];

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/AndresASJ' },
  { label: 'LinkedIn', href: 'https://linkedin.com' }, // TODO: your LinkedIn URL
  { label: 'Kord', href: 'https://kordsound.com' },
];

export const marqueeItems: string[] = [
  'Swift',
  'SwiftUI',
  'Audio / DSP',
  'Python',
  'OpenCV',
  'Self-hosting',
  'Docker',
  'C++',
  'Algorithms',
  'Computer vision',
];

// Stack filter options offered on the Work page.
export const stackOptions = ['All', 'Swift', 'Python', 'Docker', 'OpenCV', 'Pygame'];

// Helpers ------------------------------------------------------------------

export const indexLabel = (i: number): string => (i + 1 < 10 ? '0' : '') + (i + 1);

export const projectCategories = (): string[] => {
  const cats = ['All'];
  for (const p of projects) if (!cats.includes(p.category)) cats.push(p.category);
  return cats;
};

export const statusDotColor = (status: ProjectStatus): string =>
  status === 'Shipped' ? '#2ea05a' : 'var(--accent)';
