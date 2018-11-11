import numpy as np
import pymongo
import configparser as cfg
from scipy.sparse.linalg import svds, eigs
from pymongo import MongoClient


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