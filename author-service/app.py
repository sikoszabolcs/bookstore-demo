from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/authors', methods=['GET'])
def get_authors():
    authors = [
        {"id": 1, "name": "Chris Richardson"},
        {"id": 2, "name": "Brendan Burns"}
    ]
    return jsonify(authors)

@app.route('/healthy', methods=['GET'])
def get_healthy():
    return jsonify({
        'status': 'healhy',
        'timestamp': datetime.utcnow().isoformat(),
       }), 200

@app.route('/ready', methods=['GET'])
def get_ready():
    return jsonify({
        'status': 'ready',
        'timestamp': datetime.utcnow().isoformat(),
       }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)