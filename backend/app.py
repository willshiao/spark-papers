from flask import Flask
from flask import request, abort
from flask.json import jsonify
from magic import reassemble, get_mongo, query_matrix
from flask_cors import CORS

# from magic import svd, sync_data, depickle_matrix, pickle_matrix, recommend, matrix
app = Flask(__name__)
CORS(app)

last_user = 0
mat = reassemble()
client = get_mongo()
db = client['spark']
p_col = db['papers']
u_col = db['users']


@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/papers', methods=['GET', 'POST'])
def papers():
    global mat

    if request.method == 'GET':
        userId = int(request.args.get('id'))
        target_id = query_matrix(mat, userId)
        print('Get target_id: {}'.format(target_id))
        target_paper = p_col.find_one({ 'pseudoId': target_id }, { '_id': 0 })
        print('Target paper: {}'.format(target_paper))
        target_paper['id'] = target_paper['pseudoId']
        print(target_paper)
        return jsonify(target_paper)
    else:
        data = request.get_json(silent=True)
        userId = int(data['userId'])
        reportId = int(data['reportId'])
        score = int(data['score'])
        mat[userId, reportId] = score
        u_col.update_one({ 'userId': userId }, { '$push': { 'ratings': [reportId, score] } })
        return jsonify({ 'success': True })


@app.route('/users/get')
def get_user_id():
    global last_user
    u_col.insert({ 'userId': last_user })
    last_user += 1
    return jsonify({ "id": last_user - 1 })


@app.route('/update', methods=['POST'])
def update():
    if request.method == 'POST':
        rating = request.form['rating']
        uid = 1 #request.cookies.get('uid')
        # recommend(svd(), uid, None, matrix)
    else:
        abort(401)
    return rating


@app.route('/sync', methods=['GET'])
def sync():
    if request.method == 'GET':
        print('do something')
    else:
        abort(401)
    return 'getting stuff'

