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

// A picture. `src` is the basename of a file in src/assets/work/ (no extension);
// leave a media field off entirely and the slot falls back to its hatch
// placeholder, so projects can get their photography one at a time.
export interface MediaRef {
  src: string;
  alt: string;
  caption?: string;
  // Optional muted loop shown over the still image. Lives in public/media/work/.
  video?: string;
}

export interface CaseBody {
  problem: string;
  approach: string;
  built: BuiltItem[];
  outcome: OutcomeStat[];
  learnings: string;
  gallery: MediaRef[];
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
  // Shown inside the placeholder when a slot has no image yet.
  imgLabel: string;
  card?: MediaRef;
  // Muted loop played on card hover. Lives in public/media/work/.
  cardVideo?: string;
  hero?: MediaRef;
  feat?: MediaRef;
  liveUrl?: string;
  liveLabel?: string;
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

// Shown in the 4/5 portrait slots on / and /about.
export const portrait: MediaRef = {
  src: 'portrait',
  alt: 'Andres Jimenez',
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
    card: {
      src: 'kord-card',
      alt: 'Kord on macOS — library home with Heavy Rotation, Recently Added and Hi-Res shelves',
    },
    cardVideo: '/media/work/kord-card.mp4',
    hero: {
      src: 'kord-hero',
      alt: 'Kord’s library on macOS, showing album shelves and 24/192 hi-res badges',
    },
    feat: {
      src: 'kord-feat',
      alt: 'Kord on macOS — library home with album artwork and Browse by Decade',
    },
    liveUrl: 'https://kordsound.com',
    repoUrl: 'https://github.com/AndresASJ/FlacPlayer-Feedback',
    body: {
      problem:
        'I kept buying FLACs on Bandcamp and Qobuz, and then had nowhere good to play them on my iPhone. The closest thing to a real local-file player on iOS was foobar2000. Even apps that advertise "lossless" tend to quietly resample or transcode on the way out, with a system mixer, hidden EQ, or loudness normalization sitting between the file and your DAC. The file you paid for never reaches your ears untouched.',
      approach:
        'So I built the player I wanted: made for audio gearheads, with an Apple philosophy. Kord is native Swift on both the iPhone in your pocket and the rig on your desk. It decodes FLAC bit-for-bit, switches the hardware sample rate to match the file, and hands the samples straight to the DAC — direct USB-C output on iPhone, exclusive CoreAudio hardware access on Mac. Everything else (EQ, lyrics, the library) exists to get you closer to the master, and stays out of the signal path.',
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
        'Shipping a real audio app means owning the unglamorous edges long before any of it is visible: sample-rate switching, DAC routing, metadata that lies about what a file really is, a support channel. Keeping the source private but the triage public, through a feedback tracker with structured issue forms, turned out to be a clean way to involve listeners without exposing the build.',
      gallery: [
        {
          src: 'kord-g1',
          alt: 'Kord Now Playing — album art, transport, synced lyric line and a LOSSLESS · FLAC 16/44.1 badge',
          caption: 'now playing · synced lyrics',
        },
        {
          src: 'kord-g2',
          alt: 'Kord’s album grid, showing artwork read from file tags',
          caption: 'self-organizing library',
        },
        {
          src: 'kord-g3',
          alt: 'Kord’s artist grid with fetched artist photography',
          caption: 'browse by artist',
        },
      ],
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
    card: {
      src: 'homelab-card',
      alt: 'CasaOS dashboard on the CM3588 — system status, storage health and self-hosted app grid',
    },
    hero: {
      src: 'homelab-hero',
      alt: 'CasaOS dashboard on the CM3588 — CPU/RAM gauges, storage health and apps including Nginx Proxy Manager, Jellyfin, AdGuard Home, Immich, Seafile and Tailscale',
    },
    feat: {
      src: 'homelab-feat',
      alt: 'CasaOS dashboard on the CM3588 with system status widgets and the self-hosted app grid',
    },
    liveUrl: 'https://github.com/AndresASJ/Friendly-Elec-CM3588',
    repoUrl: 'https://github.com/AndresASJ/Friendly-Elec-CM3588',
    body: {
      problem:
        'I wanted my photos and files on hardware I own, backed up where no unwanted eyes can reach them, instead of renting that trust from Google. I also wanted a playground: a standing excuse to learn Linux as a server, Docker networking, and everything in between. The usual fate of a setup like this is a pile of undocumented containers that nobody can rebuild after a disk dies, including future-you.',
      approach:
        'I treated the homelab as a living blueprint. Every service is a sanitized Docker Compose file, every decision is written down, and the whole stack can be reproduced from a freshly flashed board. CasaOS sits on top for day-to-day management; twenty numbered guides carry the actual knowledge, from flashing the board and laying out storage to VPN routing and troubleshooting.',
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
        {
          h: 'One small board, real storage',
          d: 'A FriendlyElec CM3588 — 8-core Rockchip RK3588, 16 GB RAM — running Ubuntu 22.04, with four NVMe drives laid out by role and a 2 TB USB drive on scheduled backups. No rack required.',
        },
      ],
      outcome: [
        { metric: '20+', label: 'self-hosted services' },
        { metric: '1', label: 'ARM board — 8-core, 16 GB' },
        { metric: '20', label: 'numbered guides to rebuild it' },
      ],
      learnings:
        'The docs ended up mattering more than the containers. Writing each step down as I went, to the point a stranger could reproduce the stack, is why I trust this board with my actual photo library. It also keeps the whole thing a playground: I can try a new service, break it, and rebuild it without fear.',
      gallery: [
        {
          src: 'homelab-g1',
          alt: 'Immich photo library self-hosted on the CM3588, timeline view with 1.4 TiB stored',
          caption: 'immich · self-hosted photos',
        },
        {
          src: 'homelab-g2',
          alt: 'AdGuard Home dashboard — 37,989 DNS queries in 24 hours, 12.5% blocked at the DNS level',
          caption: 'adguard · dns-level ad-blocking',
        },
        {
          src: 'homelab-g3',
          alt: 'Tailscale admin view of the CM3588 as a connected tailnet device with SSH and subnet routing',
          caption: 'tailscale · remote access',
        },
      ],
    },
  },
  {
    id: 'card-detection',
    title: 'Card Detection',
    year: '2025',
    summary:
      'A webcam prototype that detects multiple playing cards, straightens angled frames and identifies a captured six-card set with ORB feature matching.',
    role: 'Solo Developer',
    timeframe: '2025',
    status: 'Shipped',
    category: 'Computer Vision',
    stack: ['Python', 'OpenCV', 'NumPy'],
    impact: 'Identifies six reference cards together in one webcam frame and rejects uncaptured cards as Unknown.',
    imgLabel: 'card detection · webcam feed',
    card: {
      src: 'card-detection-card',
      alt: 'Six playing cards identified in one webcam frame with green contour outlines and labels',
    },
    cardVideo: '/media/work/card-detection-card.mp4',
    hero: {
      src: 'card-detection-hero',
      alt: 'Six-card live detection result showing the Two of Hearts, Jack of Clubs, Ten of Spades, Queen of Diamonds, King of Hearts and Ace of Spades',
    },
    feat: {
      src: 'card-detection-feat',
      alt: 'OpenCV webcam result with six correctly identified playing cards arranged in two rows',
    },
    repoUrl: 'https://github.com/AndresASJ/Card-Detection',
    body: {
      problem:
        'Playing cards make a compact computer-vision problem: the camera has to separate each white rectangle from the table, handle rotation and glare, then decide whether the card matches anything it has seen before. A weak matcher will confidently assign the wrong name to every unfamiliar card.',
      approach:
        'I split detection from recognition. Contour analysis finds convex quadrilaterals and a perspective transform flattens each one to the same size. I capture reference images from the deck, cache their ORB descriptors at startup and require both a minimum score and a clear margin over the next candidate before showing a name.',
      built: [
        {
          h: 'Contour detection and perspective correction',
          d: 'Filters the threshold mask by area, shape, aspect ratio and convexity, then warps each detected card into a consistent 300 × 420 image.',
        },
        {
          h: 'ORB matching with rejection',
          d: 'Compares cached binary descriptors with Hamming distance and Lowe’s ratio test. Weak or ambiguous results stay labeled Unknown.',
        },
        {
          h: 'Capture and debug tools',
          d: 'Builds templates from the webcam, labels every live contour and exposes the threshold mask plus normalized crops for tuning and saved evidence.',
        },
      ],
      outcome: [
        { metric: '6 / 6', label: 'cards identified together' },
        { metric: '18 / 18', label: 'template checks at −30°, 0° and +30°' },
        { metric: 'Unknown', label: 'uncaptured Ten of Hearts rejected' },
      ],
      learnings:
        'Most of the improvement came from making the inputs consistent. Once each contour was ordered, flattened and resized the same way, ORB had a fair comparison to make. The rejection threshold mattered just as much: admitting uncertainty is better than attaching a confident wrong label.',
      gallery: [
        {
          src: 'card-detection-g1',
          alt: 'Ten of Hearts outlined in orange and labeled Unknown beside five recognized reference cards',
          caption: 'unknown-card rejection · live frame',
        },
        {
          src: 'card-detection-g2',
          alt: 'Binary threshold mask for six cards above the six normalized reference images used for ORB matching',
          caption: 'threshold mask · normalized templates',
        },
        {
          src: 'card-detection-g3',
          alt: 'Andres placing playing cards into the webcam view while the detector labels the visible cards',
          caption: 'live setup · placing the cards',
          video: '/media/work/card-detection-hand.mp4',
        },
      ],
    },
  },
  {
    id: 'pychess',
    title: 'PythonChess',
    year: '2025',
    summary:
      'A two-player chess game written in Python and Pygame, now running in the browser from the same source through WebAssembly.',
    role: 'Solo Developer',
    timeframe: '2025',
    status: 'Shipped',
    category: 'Games',
    stack: ['Python', 'Pygame', 'WebAssembly'],
    impact: 'One Python codebase playable on desktop and directly in the browser.',
    imgLabel: 'pythonchess · browser edition',
    card: {
      src: 'pychess-card',
      alt: 'PythonChess running in the browser with the white king pawn selected and its legal moves highlighted',
    },
    liveUrl: '/games/pythonchess/',
    liveLabel: 'play',
    repoUrl: 'https://github.com/AndresASJ/PythonChess',
    body: {
      problem:
        'Building chess from scratch forces you to make every rule explicit: piece geometry, blocked paths, turn order, pinned pieces, and the recursive question of whether a move exposes your own king. Rules you have followed for years turn out to be surprisingly hard to state precisely. The original game was also desktop-only, so nobody visiting a portfolio could actually play it.',
      approach:
        'I modelled the board and pieces explicitly, separated movement from rendering, and filtered candidate moves against the resulting king state. For the portfolio build I packaged the existing Python modules and Pygame interface with CPython and pygame-ce for WebAssembly instead of rewriting the rules in JavaScript.',
      built: [
        {
          h: 'Rules engine',
          d: 'Movement for every piece, blocked-path validation, turn-based play, king-safety filtering, and automatic queen promotion.',
        },
        {
          h: 'Check & checkmate detection',
          d: 'Validates that moves don’t leave the king in check and detects checkmate and stalemate positions.',
        },
        {
          h: 'Interactive board',
          d: 'A Pygame UI with legal-move and capture markers, conventional White/Black presentation, game status, and instant restart.',
        },
        {
          h: 'Python in the browser',
          d: 'The original Python board, piece, GUI, and main-loop modules run through WebAssembly inside this case study—no JavaScript rules-engine replacement.',
        },
      ],
      outcome: [
        { metric: '1 codebase', label: 'desktop + browser' },
        { metric: 'Python → WASM', label: 'original source, web runtime' },
        { metric: '5 tests', label: 'movement and check regressions' },
      ],
      learnings:
        'Separating game state from rendering paid off twice: it made rule edge cases fixable in isolation, and later it let the same Pygame project move into the browser untouched. The version you can play here is the original code, running on a web runtime.',
      gallery: [],
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
        'Looking up where an IP address resolves usually means bouncing between a half-dozen websites, and none of them just hand you a map you can keep.',
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
        'Stitching two focused APIs together with a clean output format turns a tedious manual task into a one-command tool. This is the kind of small utility that ends up living in your toolbox for years.',
      gallery: [{ src: 'ip-data-g1', alt: 'map output' }],
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
