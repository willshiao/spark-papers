'use strict'

const rp = require('request-promise')
const config = require('config')
const logger = require('./logger')

class DeepAi {
  constructor (apiKeys) {
    this.apiKeys = config.get('api.deepAi.keys')
    if (this.apiKeys.length === 0) logger.warn('No DeepAI API keys set!')
    this.currentKey = 0
  }

  getKey () {
    const key = this.apiKeys[this.currentKey]
    this.currentKey = (this.currentKey + 1) % this.apiKeys.length
    return key
  }

  summarize (text) {
    console.log('Tis: ', this)
    return rp({
      url: 'https://api.deepai.org/api/summarization',
      headers: {
        'Api-Key': this.getKey()
      },
      formData: {
        text
      },
      json: true
    }).catch(err => logger.error('Error summarizing text:', err))
  }
}

module.exports = DeepAi