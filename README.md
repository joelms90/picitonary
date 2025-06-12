# 🖼️ Pictionary App — Tauri + React + TypeScript

This project is a cross-platform Pictionary game built with:

- 🎯 [Tauri](https://tauri.app/)
- ⚛️ [React](https://react.dev/)
- 💙 [TypeScript](https://www.typescriptlang.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)

---

## ⚙️ Project Setup

### 📦 Node Version

This project requires:

```

v20.11.0

````

Use [`nvm`](https://github.com/nvm-sh/nvm) or [`asdf`](https://asdf-vm.com/) to install/manage.

### 🚀 Install Dependencies

```bash
npm install
````

### 🧪 Run in Dev Mode (Web Only)

```bash
npm run dev
```

### 🖥️ Run in Dev Mode (Tauri Desktop)

```bash
npm run tauri dev
```

---

## 📁 Directory Structure

```
src/
├── components/
│   ├── GameCanvas.tsx
│   └── GameRoom.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧰 Backend API (FastAPI)

You can connect to a FastAPI server for word generation. Make sure to set the `.env` value:

```env
VITE_API_URL=http://localhost:8000
```

Then in `PictionaryRoom.tsx`, the word will be fetched from the backend at `/word`.


## ✅ Notes

* Tailwind CSS is already configured.
* Tauri's configuration is located in `src-tauri/tauri.conf.json`.
* Backend is optional but recommended (runs separately via FastAPI).

