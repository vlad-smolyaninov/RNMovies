import Endpoints from './Endpoints'
import {API_KEY} from 'react-native-dotenv'

export default class ApiService {

  static _hosts = {
    omdbHost: 'http://www.omdbapi.com',
    tmbHost: 'https://api.themoviedb.org',

    apiKey: API_KEY
  };

  static _endpoints = {
    ...Endpoints
  }

  constructor () {
    throw new Error('Cannot construct singleton');
  }

  static setEndpoins (endpoints) {
    this._hosts = {...this.this._endpoints, ...endpoints};
  }

  static setHosts (hosts) {
    this._hosts = {...this.this._hosts, ...hosts};
  }

  static setToken (token) {
    this.token = token;
  }

  static removeToken () {
    delete this.token;
  }

  static get (urlData) {
    console.log(urlData)
    return this._request(urlData, 'GET');
  }

  static post (urlData, data) {
    return this._request(urlData, 'POST', data);
  }

  static put (urlData, data) {
    return this._request(urlData, 'PUT', data);
  }

  static delete (urlData) {
    return this._request(urlData, 'DELETE');
  }

  static postFile (path, fields) {

    const xhr = new XMLHttpRequest();

    xhr.open('POST', path);
    if (this.token) {
      xhr.setRequestHeader('X-Parse-Session-Token', this.token);
    }

    const formData = new FormData();
    fields.forEach(((f) => {

      formData.append(f.name, f.data);
    }));

    return new Promise((res, rej) => {

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
          res(JSON.parse(xhr.responseText));
        }
        else if (!xhr.status > 299) {
          rej(xhr);
        }
      };
      xhr.send(formData);
    });
  }

  static putFile (path, fields) {

    const xhr = new XMLHttpRequest();

    xhr.open('PUT', path);
    if (this.token) {
      xhr.setRequestHeader('X-Parse-Session-Token', this.token);
    }

    const formData = new FormData();
    fields.forEach((f) => {

      formData.append(f.name, f.data);
    });

    return new Promise((res, rej) => {

      xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
          res(JSON.parse(xhr.responseText));
        }
        else if (!xhr.status > 299) {
          rej(xhr);
        }
      };
      xhr.send(formData);
    });
  }

  static async _request (urlData, method, data) {
    if (typeof this._endpoints[urlData.url] !== 'function') {
      throw new Error(`Endpoint "${urlData.url}" not found. You likely forgot add endpoint in 'endpoints.js' or call setEndpoints method of api service.`);
    }

    // generate endpoint string
    let path = this._endpoints[urlData.url]({
      ...urlData,
      ...this._hosts,
    });

    // query string params serialization
    if (typeof urlData.params === 'object' && Object.keys(urlData.params).length) {
      path += '?' + Object
        .keys(urlData.params)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(urlData.params[k])}`)
        .join('&');
    }

    const options = {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (this.token) {
      options.headers['Authentication'] = 'Bearer: ' + this.token;
      options.headers['X-Parse-Session-Token'] = this.token;
    }

    if (data) {
      options.body = JSON.stringify(data);
    }

    const res = await fetch(path, options);

    return await res.json()
  }



}

