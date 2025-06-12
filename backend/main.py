from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    current_word = "sunflower"
    while True:
        data = await websocket.receive_json()
        if data["type"] == "GUESS":
            guess = data["payload"]["guess"]
            correct = guess.lower() == current_word
            await websocket.send_json({
                "type": "GUESS_RESULT",
                "payload": {
                    "guess": guess,
                    "correct": correct,
                    "message": "Correct!" if correct else "Try again!"
                }
            })
        elif data["type"] == "DRAW":
            await websocket.send_json({
                "type": "DRAW_UPDATE",
                "payload": data["payload"]
            })
