from fastapi import FastAPI
from sqlalchemy import create_engine
import os

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)

app = FastAPI()

@app.get("/health")

def health():
    try:
        with engine.connect() as conn:
            return {"status": "Connected to PostGIS"}
    except Exception as e:
        return {"error": str(e)}
        
