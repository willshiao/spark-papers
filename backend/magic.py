import numpy as np
import pymongo
import configparser as cfg
from scipy import stats
from scipy.sparse import random, lil_matrix
from pymongo import MongoClient
import pickle, os, signal, sys, copy
from scipy.sparse.linalg import svds


mongo_conn = None

def pickle_matrix(matrix, filename):
    # filename = input("Pickle jar name: ") # the place the pickled data is saved
    fileObj = open(filename, 'wb')
    pickle.dump(matrix, fileObj) # change 's' to whatever you actually want to dump to it
    fileObj.close()
    return


def depickle_matrix(filename):
    fileObj = open(filename, 'rb')
    return pickle.load(fileObj)


# if os.path.isfile('pickle'):
#     matrix = depickle_matrix('pickle')
# else:
#     print('create matrix')
#     matrix = np.random.rand(100, 1000)


def connect():
    config = cfg.ConfigParser()
    config.read('config.cnf')
    print(config['mongo']['uri'])
    return MongoClient(config['mongo']['uri'])


def recommend(predictions, uid, paper_df, original_ratings):
    client = connect()
    u, sigma, vt = svds(matrix)


def sync_data():
    # put user data in matrix
    client = connect()


def get_mongo():
    global mongo_conn
    if mongo_conn == None:
        return connect()
    return mongo_conn


def reassemble():
    client = get_mongo()
    db = client['spark']
    user_col = db['users']
    papers_col = db['papers']
    
    num_papers = papers_col.estimated_document_count()
    num_users = user_col.estimated_document_count()

    result = lil_matrix((num_users, num_papers))

    for user in user_col.find({}, { 'userId': 1, 'ratings' : 1}).sort('userId', pymongo.ASCENDING):
        for rating in user['ratings']:
            result[user['userId'], rating[0]] = rating[1]

    print('Successfully reassembled matrix!')
    return result


def query_matrix(m, userId):
    l = m[userId, :]
    u, sigma, vt = svds(m)
    res = (l @ (vt.T * sigma)) @ vt
    res = np.reshape(res, (res.shape[1],))
    arr_max = np.max(res)
    print('Max score: {}'.format(arr_max))
    real_ind = np.random.choice(np.where(res == arr_max)[0], 1)
    return int(real_ind[0])


def signal_handler(sig, frame):
    pickle_matrix(matrix, 'pickle')
    sys.exit(0)

# signal.signal(signal.SIGINT, signal_handler)
