from flask import Flask
from flask import render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
    

def choosing_quote():
    with open("quotes.txt", "r") as file:
        quotes = file.readlines()
    return random.choice(quotes).strip()
