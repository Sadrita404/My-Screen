# My Screen

|Title | My Screen|
| :-- | :-- |
|Author | Sadrita Neogi|
|Platform | [Beest](https://beest.hackclub.com/)|

## [LIVE URL](https://my-screen-1.netlify.app/)

#### My Screen is a super simple, web-based tool that lets you record your screen and camera right in your browser with zero downloads or accounts needed. It’s all about speed and ease, handling everything on your own device so you can start recording in seconds. It’s a lightweight, open-source way for anyone to grab a recording and share it instantly without any extra fuss.

## Tech Used
  |Tech Stack|
  |:--|
  | Layer	Technology |
  | Frontend	Next.js 16, React 19, TypeScript|
  | Styling	Tailwind CSS |
  | Build	Turborepo, pnpm |
  | Backend	Express.js (for MP4 conversion)  |  

---


## Features
| Purpose | Working |
| :-- | :-- |
|Screen Recording |— Capture screen, window, or browser tab|
|Camera Overlay| — Picture-in-picture webcam with draggable positioning|
|Microphone Audio| — Record system audio and microphone|
|Multiple Layouts |— PiP and circle camera overlay modes|
|Export Formats |— WebM (native) and MP4 (server-converted)|
|Keyboard Shortcuts| — Ctrl+P (pause), Ctrl+M (mic), Ctrl+C (camera), Ctrl+S (screen)|
|No Time Limits |— Record as long as you need|

---

## Browser Support
|Browser |	Status|
| :-- | :-- |
|Chrome	|✅ Supported|
|Edge|✅  Supported|
|Firefox|	✅ Supported|
|Safari	|✅ Supported|
|Mobile	|❌ Not supported (getDisplayMedia limitation|)

---

## Project Structure

```
My-Screen/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Express.js backend (MP4 conversion)
├── packages/
│   └── shared/       # Shared utilities
└── turbo.json        # Turborepo config

```

---

## Available Scripts
|Command |	Description |
| :-- | :-- |
|pnpm dev	|Start all apps in development mode|
|pnpm build	|Build all apps for production|
|pnpm dev:web|	Start only the web app|

## To run it locally 
* 1) Fork the repo 
* 2) Open the file in your code editor (VS Code )
* 3) Open The Terminal 
* 4) Write - pnpm install
* 5) Next write - pnpm dev
* 6) open locallhost:3000

## Project Screenshot

<img width="1444" height="724" alt="Screenshot 2026-04-23 at 11 03 23 PM" src="https://github.com/user-attachments/assets/624fad26-e68d-4aba-86d1-fe5d1eea2145" />

---

<img width="1438" height="721" alt="Screenshot 2026-04-23 at 11 03 31 PM" src="https://github.com/user-attachments/assets/e159c9cf-f232-4536-a7f3-9cb28c37f93d" />

---

<img width="1412" height="796" alt="Screenshot 2026-04-23 at 11 03 41 PM" src="https://github.com/user-attachments/assets/4c8bea0c-29a7-4e3c-8f88-8fc801703145" />

---

<img width="1444" height="723" alt="Screenshot 2026-04-23 at 11 03 50 PM" src="https://github.com/user-attachments/assets/d8863dda-1791-460c-877c-aa02f5ad047b" />

---

<img width="1438" height="721" alt="Screenshot 2026-04-23 at 11 03 59 PM" src="https://github.com/user-attachments/assets/94fd8cdd-92ed-4e3d-a487-3d7ec78cc17c" />

---

<img width="1438" height="720" alt="Screenshot 2026-04-23 at 11 04 09 PM" src="https://github.com/user-attachments/assets/2162e340-7b7c-43e9-91ab-05c1cd1a982b" />

---

<img width="1450" height="716" alt="Screenshot 2026-04-23 at 11 04 16 PM" src="https://github.com/user-attachments/assets/57e6debd-2409-4086-8603-9c2ced965110" />

---

<img width="1437" height="729" alt="Screenshot 2026-04-23 at 11 04 25 PM" src="https://github.com/user-attachments/assets/ecc3ec9b-b685-4e9c-bfd1-d10baeb79c99" />

---

<img width="806" height="310" alt="Screenshot 2026-04-23 at 11 04 33 PM" src="https://github.com/user-attachments/assets/88049dec-397c-4dd7-8cb3-eb4a758112e8" />

---

<img width="1435" height="724" alt="Screenshot 2026-04-23 at 11 04 42 PM" src="https://github.com/user-attachments/assets/64575d43-c22b-4194-bbe4-d9370cff5144" />

---

