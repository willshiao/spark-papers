from scipy.sparse import random
from scipy.sparse.linalg import svds, eigs

from scipy import stats

import numpy as np
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


def pickle_success(pickle_matrix, depickled_matrix):
    if (pickle_matrix.all() == depickled_matrix.all()):
        print("Pickled and de-pickled successfully.")
    else:
        "Unusccessful pickling. Your data is ruined."
    return


def main():
    # generate sparse matrix and fill w/random data
    spse_mtrx = random(100, 1000, density=0.01)    
    # spse_mtrx = np.asarray(spse_mtrx)
    print("sparse matrix shape: {}".format(spse_mtrx.shape))
    # print("sparse matrix: {}".format(spse_mtrx.A)) # NOTE to self: .A returns self as ndarray

    # unitary matrix w/ left singular vectors as columns
    # the singular values
    # unitary matrix w/right singular vectors as rows
    u, s, vt = svds(spse_mtrx) # optional: see documentation 
    print("singular values: {}".format(s))

    filename = "picklejar"
    # soak the data in vinegar
    pickle_matrix(s, filename) # creates pickle file
    # de-pickle and load into new variable
    sing_vals = depickle_matrix(filename)
    # check pickle success
    pickle_success(s, sing_vals)
    
    return


if __name__ == "__main__":
    main()
