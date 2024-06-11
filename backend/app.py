from flask import Flask

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    return 'hello'

@app.route('/prediction')
def prediction():
    return 'predict model'

if __name__ == '__main__':
    app.run(port=3000,debug=True)