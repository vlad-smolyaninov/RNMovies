import Endpoints from './Endpoints'
import Config from 'react-native-config'

interface IUrlData {
  url: string,
  [key: string]: any,
}

export default class ApiService {

  static _hosts: any = {
    TMDBHost: 'https://api.themoviedb.org',
    TMDBApiKey: Config.TMDB_API_KEY
  }

  static _endpoints: {
    [key: string]: Function
  } = {
    ...Endpoints
  }

  static _token: any = null


  constructor() {
    throw new Error('Cannot construct singleton')
  }

  static setEndpoins(endpoints: object) {
    this._hosts = {...this._endpoints, ...endpoints}
  }

  static setHosts(hosts: object) {
    this._hosts = {...this._hosts, ...hosts}
  }

  static setToken(token: any) {
    this._token = token
  }

  static removeToken() {
    delete this._token
  }

  static get(urlData: IUrlData) {
    console.log(Config)
    return this._request(urlData, 'GET')
  }

  static post(urlData: IUrlData, data = null) {
    return this._request(urlData, 'POST', data)
  }

  static put(urlData: IUrlData, data= null) {
    return this._request(urlData, 'PUT', data)
  }

  static delete(urlData: IUrlData) {
    return this._request(urlData, 'DELETE')
  }

  static postFile(path: string, fields: Array<any>) {

    const xhr = new XMLHttpRequest()

    xhr.open('POST', path)
    if (this._token) {
      xhr.setRequestHeader('X-Parse-Session-Token', this._token)
    }

    const formData = new FormData()
    fields.forEach(((f) => {

      formData.append(f.name, f.data)
    }))

    return new Promise((res, rej) => {

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
          res(JSON.parse(xhr.responseText))
        } else if (!(xhr.status > 299)) {
          rej(xhr)
        }
      }
      xhr.send(formData)
    })
  }

  static putFile(path: string, fields: Array<any>) {

    const xhr = new XMLHttpRequest()

    xhr.open('PUT', path)
    if (this._token) {
      xhr.setRequestHeader('X-Parse-Session-Token', this._token)
    }

    const formData = new FormData()
    fields.forEach((f) => {

      formData.append(f.name, f.data)
    })

    return new Promise((res, rej) => {

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
          res(JSON.parse(xhr.responseText))
        } else if (!(xhr.status > 299)) {
          rej(xhr)
        }
      }
      xhr.send(formData)
    })
  }

  static async _request(urlData: IUrlData, method : string, data: object | null = null) {
    if (typeof this._endpoints[urlData.url] !== 'function') {
      throw new Error(`Endpoint "${urlData.url}" not found. You likely forgot add endpoint in 'endpoints.js' or call setEndpoints method of api service.`)
    }

    // generate endpoint string
    let path = this._endpoints[urlData.url]({
      ...urlData,
      ...this._hosts,
    })

    // query string params serialization
    if (typeof urlData.params === 'object' && Object.keys(urlData.params).length) {
      path += '?' + Object
        .keys(urlData.params)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(urlData.params[k])}`)
        .join('&')
    }

    const options: any = {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (this._token) {
      options.headers['Authentication'] = 'Bearer: ' + this._token
      options.headers['X-Parse-Session-Token'] = this._token
    }

    if (data) {
      options.body = JSON.stringify(data)
    }

    const res = await fetch(path, options)

    return await res.json()
  }


}

