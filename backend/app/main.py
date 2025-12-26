from fastapi import FastAPI

app = FastAPI(title="GEORdr Backend")

@app.get("/health")
def health():
    return {"status": "ok"}
