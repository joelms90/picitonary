# 🖼️🖥️ Pictionary – Fullstack Game App (Tauri + React + FastAPI)

This is a cross-platform real-time Pictionary game built with:

- ⚛️ [React](https://react.dev/) + 💙 [TypeScript](https://www.typescriptlang.org/) + ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🖥️ [Tauri](https://tauri.app/) for native desktop builds
- 🚀 [FastAPI](https://fastapi.tiangolo.com/) + WebSockets for the backend

---

## 📁 Project Structure

```
.
├── backend/        # FastAPI server (WebSocket + /word endpoint)
├── src/            # Frontend (React + Vite + Tailwind)
├── src-tauri/      # Tauri config and build
```

---

## ⚙️ Setup Instructions

### 📦 Node Environment

- Requires: `Node.js v20.11.0`  
  Use [`nvm`](https://github.com/nvm-sh/nvm) or [`asdf`](https://asdf-vm.com/) to manage Node versions.

### 🐍 Python Environment (Backend)

- Requires: `Python 3.10.9`

---

## 🧪 Frontend Setup (React + Tauri)

```bash
npm install
```

#### 🔧 Run in Web Mode

```bash
npm run dev
```

#### 🖥 Run in Desktop Mode (Tauri)

```bash
npm run tauri dev
```

> Ensure `.env` has:

```env
VITE_API_URL=http://localhost:8000
```

---

## 🧪 Backend Setup (FastAPI)

```bash
cd backend
python3.10 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 🧰 Tools (Linting/Formatting)

```bash
pip install black ruff
black main.py
ruff check main.py
```

---

## 🧰 Backend Endpoints

### 📡 WebSocket API

**Endpoint**: `ws://localhost:8000/ws`  
> _(Add WebSocket handling later in `main.py` if planned)_

---

### 📖 Word API

**GET** `/word`  
Returns a random word from a preset list:

```json
{
  "word": "rocket"
}
```

Used in the game room to provide the drawing word.

---

## 📦 Directory Overview (Frontend)

```
src/
├── components/
│   ├── PictionaryCanvas.tsx
│   └── PictionaryRoom.tsx
├── App.tsx
├── main.tsx
├── App.css
```

---

## ✅ Notes

- Tailwind CSS is already configured.
- Backend runs independently.
- Tauri configuration: `src-tauri/tauri.conf.json`

---

## 🧠 Future Improvements

- Add multiplayer WebSocket support
- Persist drawing history
- Secure game sessions with tokens
