define([
  '../../config/index.js'
], function (config) {
  var baseUrl = config.baseUrl,
  upHeaders = config.upHeaders,
  transmitHeaders = config.transmitHeaders;
  return {
    get (url) {
      return this.do('GET', url)
    },
    post (url, data) {
      return this.do('POST', url, data)
    },
    put (url, data) {
      return this.do('PUT', url, data)
    },
    delete (url, data) {
      return this.do('DELETE', url, data)
    },
    head (url, data) {
      return this.do('HEAD', url, data)
    },
    do (method, url, data) {
      url = baseUrl + (url.charAt(0) === '/' ? '' : location.pathname) + url
      let that = this
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        for (let key in upHeaders) {
          xhr.setRequestHeader(key, upHeaders[key])
        }
        xhr.onload = function () {
          that.xhr = xhr
          if (this.status === 200) {
            for (let key of transmitHeaders) {
              let value = xhr.getResponseHeader(key)
              if (value) {
                that.upHeaders[key] = value
              }
            }
            let data
            try {
              data = JSON.parse(this.responseText)
            } catch (e) {
              data = this.responseText
            }
            resolve(data, this)
          } else {
            resolve(null, this)
          }
        }
        xhr.onerror = function (err) {
          reject(err)
        }
  
        if (data) {
          try {
            data = JSON.stringify(data)
          } catch (e) {}
        }
        xhr.send(data)
      })
    }
  }
})