import {newInstanceOf, resolve} from '@aurelia/kernel';
import {IHttpClient} from '@aurelia/fetch-client';

export class HttpService {
  httpClient = resolve(newInstanceOf(IHttpClient));

  async get(url) {
    return await this.httpClient.fetch(url);
  }

  async post(url, body) {
    return await this.httpClient.fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async put(url, body) {
    return await this.httpClient.fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  async delete(url) {
    return await this.httpClient.fetch(url, {
      method: 'DELETE',
    });
  }
}
