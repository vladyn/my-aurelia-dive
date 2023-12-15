import {newInstanceOf, resolve} from '@aurelia/kernel';
import {IHttpClient} from '@aurelia/fetch-client';
import {ENDPOINTS} from '../constants/endpoints';

export class HttpService {
    httpClient = resolve(newInstanceOf(IHttpClient));

    // Wrap up a fetch call
    async get(url) {
        return await this.httpClient.fetch(url);
    }

    async getUnits() {
        try {
            const response = await this.httpClient.fetch(ENDPOINTS.units);
            return await response.json();
        } catch (error) {
            console.error('error fetching units', error);
            throw error;
        }
    }

    async getCases() {
        try {
            const response = await this.httpClient.fetch(ENDPOINTS.cases);
            return await response.json();
        } catch (error) {
            console.error('error fetching cases', error);
            throw error;
        }
    }

    async getAddresses() {
        try {
            const response = await this.httpClient.fetch(ENDPOINTS.addresses);
            return await response.json();
        } catch (error) {
            console.error('error fetching addresses', error);
            throw error;
        }
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
