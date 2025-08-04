from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/authors', methods=['GET'])
def get_authors():
    authors = [
        {"id": 1, "name": "Chris Richardson"},
        {"id": 2, "name": "Brendan Burns"}
    ]
    return jsonify(authors)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)