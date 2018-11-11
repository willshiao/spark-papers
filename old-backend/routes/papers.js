'use strict'

const router = require('express').Router()
const bodyParser = require('body-parser')
const validator = require('validator')
const Promise = require('bluebird')
const fs = require('fs')
const request = require('request')
const https = Promise.promisifyAll(require('https'))
const crypto = Promise.promisifyAll(require('crypto'))
const textract = Promise.promisifyAll(require('textract'))
const DeepAi = require('../lib/deepAi')

router.use(bodyParser.json())

const ai = new DeepAi()
router.post('/', (req, res) => {
  if (!req.body || !req.body.url) return res.failMsg('URL required')
  if (!validator.isURL(req.body.url)) return res.failMsg('Invalid URL')

  let file, filename
  crypto.randomBytesAsync(24)
    .then(buff => {
      filename = `uploads/${buff.toString('hex')}.pdf`
      file = fs.createWriteStream(filename)
      return new Promise((resolve, reject) => {
        request({
          uri: req.body.url,
          headers: {
            'User-Agent': 'SparkPapers-Bot-v1.0.0'
          }
        }).pipe(file)
        file.on('finish', response => {
              textract.fromFileWithPath(filename, (err, text) => {
                if (err) reject(err)
                resolve(text)
              })
          })
        })
    })
    .then(text => {
      console.log('Text: ', text)
      return ai.summarize(text)
    })
    .then(data => {
      res.successJson(data)
    })
    .catch(err => {
      console.log(err)
      res.errorJson(err)
    })
})

module.exports = router
