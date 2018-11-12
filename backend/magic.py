import numpy as np
import pymongo
import configparser as cfg
from scipy.sparse.linalg import svds, eigs
from scipy import stats
from scipy.sparse import random
from pymongo import MongoClient
import pickle, os, signal, sys, copy


def pickle_matrix(matrix, filename):
    # filename = input("Pickle jar name: ") # the place the pickled data is saved
    fileObj = open(filename, 'wb')
    pickle.dump(matrix, fileObj) # change 's' to whatever you actually want to dump to it
    fileObj.close()
    return


def depickle_matrix(filename):
    fileObj = open(filename, 'rb')
    return pickle.load(fileObj)


if os.path.isfile('pickle'):
    matrix = depickle_matrix('pickle')
else:
    print('create matrix')
    matrix = np.random.rand(100, 1000)


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


def reassemble():
    client = connect()
    result = numpy.zeros(num_users, num_papers)
    for i in users:
        for j in i:
            result[i.id, j[0]] = j[1]


def signal_handler(sig, frame):
    pickle_matrix(matrix, 'pickle')
    sys.exit(0)
signal.signal(signal.SIGINT, signal_handler)