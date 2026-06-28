// Writing — posts and their article bodies. Bodies are block arrays
// (paragraph / heading / code) rendered by /writing/[id].astro, mirroring the
// original design's article model. Edit freely; this is your blog.

export type BlockType = 'p' | 'h' | 'code';

export interface Block {
  type: BlockType;
  text: string;
}

export interface Post {
  id: string;
  title: string;
  date: string; // display format YYYY.MM.DD
  tag: string;
  read: string;
  excerpt: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    id: 'bit-perfect-ios',
    title: 'Chasing bit-perfect audio on iOS',
    date: '2026.06.01',
    tag: 'Engineering',
    read: '6 min',
    excerpt:
      'What "lossless" actually means at the output stage, and why building Kord meant fighting the resampler.',
    body: [
      {
        type: 'p',
        text: 'Everyone says their player is "lossless." Far fewer can say it is bit-perfect — that the samples sitting in your FLAC file reach the output device unchanged, with no sneaky resampling in between. Building Kord, that gap is the whole product.',
      },
      { type: 'h', text: 'Where the bits go wrong' },
      {
        type: 'p',
        text: 'A FLAC at 44.1kHz played through a system mixer locked to 48kHz gets resampled, whether you asked for it or not. The file is lossless; the playback is not. The only way to know you are bit-perfect is to control the path end to end — decode, then hand the samples to a device session configured to match the source rate.',
      },
      {
        type: 'code',
        text: '// match the hardware to the file, not the other way around\nlet session = AVAudioSession.sharedInstance()\ntry session.setPreferredSampleRate(track.sampleRate)\ntry session.setActive(true)',
      },
      {
        type: 'p',
        text: 'On iOS that means being honest about what the hardware can actually do, falling back gracefully when it can’t, and never pretending. Most of the engineering is in the edges: rate changes between tracks, route changes when you plug in a DAC, and metadata that lies about what a file really is.',
      },
      { type: 'h', text: 'Boring on purpose' },
      {
        type: 'p',
        text: 'The fun part is the audio engine. The part that makes it an app is everything else — a library that scrolls fast, artwork that loads without jank, and a public feedback tracker so users can tell me when a specific DAC misbehaves. Shipping is mostly the unglamorous middle.',
      },
    ],
  },
  {
    id: 'one-tiny-board',
    title: 'Twenty services on one tiny board',
    date: '2026.03.18',
    tag: 'Self-hosting',
    read: '5 min',
    excerpt:
      'Turning a FriendlyElec CM5388 into a documented, reproducible homelab — and why the docs matter more than the containers.',
    body: [
      {
        type: 'p',
        text: 'A single ARM board now runs my media server, photo backup, home automation, personal cloud, DNS-level ad-blocking and a dozen other things. The interesting part is not that it fits — it’s that I can rebuild all of it from a freshly flashed disk.',
      },
      { type: 'h', text: 'A blueprint, not a snowflake' },
      {
        type: 'p',
        text: 'The failure mode of self-hosting is a pile of containers only their author understands, impossible to recreate after a disk dies. I forced the opposite: every service is a sanitized Compose file, every decision is written down, and the docs are good enough that a stranger could reproduce the stack.',
      },
      {
        type: 'code',
        text: '# downloads never touch the internet without the tunnel\nservices:\n  gluetun: { image: qmcgaw/gluetun }   # kill-switched WireGuard\n  qbittorrent:\n    network_mode: "service:gluetun"      # drops dead if the VPN does',
      },
      {
        type: 'p',
        text: 'Routing every download through a kill-switched VPN, exposing nothing directly, and getting in over Tailscale and a Cloudflare Tunnel — none of it is exotic. It’s just written down, in order, so future-me can trust it.',
      },
      { type: 'h', text: 'The real lesson' },
      {
        type: 'p',
        text: 'Infrastructure you can’t rebuild is a liability dressed up as an asset. Writing the runbook as I went is what turned a hobby into something I’d actually stake my photos on.',
      },
    ],
  },
  {
    id: 'classic-cv-cards',
    title: 'Detecting playing cards without a neural net',
    date: '2025.03.16',
    tag: 'Computer Vision',
    read: '5 min',
    excerpt:
      'Contours, perspective warps and ORB features — how far classic computer vision gets you before deep learning.',
    body: [
      {
        type: 'p',
        text: 'Recognizing playing cards from a webcam sounds like a job for a trained model. It isn’t — at least not at first. Classic computer vision handles it cleanly, and the exercise is a great reminder of how much you can do before reaching for a GPU.',
      },
      { type: 'h', text: 'Detection before recognition' },
      {
        type: 'p',
        text: 'The pipeline splits in two. First, find card-shaped quadrilaterals with contour analysis and warp each one flat with a perspective transform. Only then do you ask what card it is — matching the flattened image against a template set with ORB features, which are rotation-tolerant and license-free.',
      },
      {
        type: 'code',
        text: '# flatten the card, then match it\nwarped = cv2.warpPerspective(frame, M, (W, H))\nkp, des = orb.detectAndCompute(warped, None)\nmatches = bf.match(des, template_des)',
      },
      {
        type: 'p',
        text: 'Almost all the accuracy is won in preprocessing. Get the contour and warp stages right and recognition becomes easy; get them wrong and no clever matcher saves you.',
      },
      { type: 'h', text: 'Why bother' },
      {
        type: 'p',
        text: 'Because understanding the classic pipeline makes you better at the modern one. You learn what the hard parts actually are — lighting, occlusion, perspective — instead of hoping a model absorbs them for you.',
      },
    ],
  },
  {
    id: 'docs-you-wrote',
    title: 'Reading the docs you wrote',
    date: '2024.09.08',
    tag: 'Craft',
    read: '3 min',
    excerpt: 'A short note on empathy, future-you, and the comments nobody reads.',
    body: [
      {
        type: 'p',
        text: 'Every reproducible homelab, every modular CV pipeline, every chess engine I’ve built has taught me the same thing from a different angle: the person most likely to read your documentation is you, six months from now, with no memory of why any of it works.',
      },
      {
        type: 'p',
        text: 'So I write for that person. Not the impressive comment that explains what the code obviously does, but the quiet one that explains why it’s shaped this way — the constraint, the dead end I already tried, the thing that will look wrong until you remember the reason.',
      },
      { type: 'h', text: 'Empathy at a distance' },
      {
        type: 'p',
        text: 'Good docs are empathy for a stranger who happens to share your name. Write them while the reasons are still in your head, because they leave faster than you think.',
      },
    ],
  },
];
