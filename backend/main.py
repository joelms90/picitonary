from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

WORDS = ["sunflower", "elephant", "pyramid", "guitar", "ice cream", "rocket"]

@app.get("/word")
def get_word():
    return {"word": random.choice(WORDS)}
