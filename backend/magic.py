import numpy as np
import pymongo
import configparser as cfg
from scipy.sparse.linalg import svds, eigs
<<<<<<< HEAD
from scipy import stats
from scipy.sparse import random
from pymongo import MongoClient
import pickle

def pickle_matrix(matrix, filename):
    # filename = input("Pickle jar name: ") # the place the pickled data is saved
    fileObj = open(filename, 'wb')
    pickle.dump(matrix, fileObj) # change 's' to whatever you actually want to dump to it
    fileObj.close()
    return


def depickle_matrix(filename):
    fileObj = open(filename, 'rb')
    return pickle.load(fileObj)
=======
from pymongo import MongoClient
>>>>>>> 978f44ac56fe2d0a4b7efae87be210071e863c28


def connect():
    config = cfg.ConfigParser()
    config.read('config.cnf')
    print(config['mongo']['uri'])
    return MongoClient(config['mongo']['uri'])


def svd():
    # calculate svd and stuff
    client = connect()


def sync_data():
    # put user data in matrix
    client = connect()