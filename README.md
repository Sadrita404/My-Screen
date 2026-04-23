Features
Screen Recording — Capture screen, window, or browser tab
Camera Overlay — Picture-in-picture webcam with draggable positioning
Microphone Audio — Record system audio and microphone
Multiple Layouts — PiP and circle camera overlay modes
Export Formats — WebM (native) and MP4 (server-converted)
Keyboard Shortcuts — Ctrl+P (pause), Ctrl+M (mic), Ctrl+C (camera), Ctrl+S (screen)
No Time Limits — Record as long as you need
Privacy First — All processing happens locally

Browser Support
Browser	Status
Chrome	✅ Supported
Edge	✅ Supported
Firefox	✅ Supported
Safari	✅ Supported
Mobile	❌ Not supported (getDisplayMedia limitation)

Available Scripts
Command	Description
pnpm dev	Start all apps in development mode
pnpm build	Build all apps for production
pnpm dev:web	Start only the web app
pnpm dev:api	Start only the API server

Tech Stack
Layer	Technology
Frontend	Next.js 16, React 19, TypeScript
Styling	Tailwind CSS
Build	Turborepo, pnpm
Backend	Express.js (for MP4 conversion)
Deployment	Vercel (web), Railway (API)

Getting Started
Prerequisites
Node.js 18+
pnpm 9+
