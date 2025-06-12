# 🖥 Pictionary Backend – FastAPI WebSocket Server

This is the backend for a simple real-time Pictionary game using FastAPI and WebSockets.

---

## 🛠 Requirements

| Tool     | Version     |
|----------|-------------|
| Python   | 3.10.9      |
| pip      | 22.3.1+     |
| FastAPI  | ≥ 0.100     |
| Uvicorn  | ≥ 0.23      |

---

## 🧪 Setup Instructions

### 1. Navigate to the backend folder

```bash
cd backend
````

### 2. Create and activate a virtual environment

```bash
python3.10 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

---

### 4.  Tools

To format or lint your code:

```bash
pip install black ruff
black main.py
ruff check main.py
```



## 🚀 Run the Development Server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Open: [http://localhost:8000](http://localhost:8000)

---

## 📡 WebSocket Endpoint

* `ws://localhost:8000/ws`
* Handles:

  * `GUESS`: Validates user guesses
  * `DRAW`: Broadcasts drawing data

---

---

## ✅ Notes
