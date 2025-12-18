from flask import Flask, render_template
import random

app = Flask(__name__)

def choosing_quote():
    with open("quotes.txt", "r") as file:
        quotes = [q.strip() for q in file if q.strip()]
    return random.choice(quotes)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/quote")
def quote():
    return choosing_quote()

if __name__ == "__main__":
    app.run(debug=True)
    
