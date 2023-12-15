import {HttpService} from '../../src/services/http-service';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('HttpService', () => {
    let httpService;

    beforeEach(() => {
        httpService = new HttpService();
        fetch.resetMocks();
    });

    it('should perform GET request', async () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

        const response = await httpService.get('http://example.com');
        const data = await response.json();

        expect(data).toEqual({data: '12345'});
        expect(fetch).toHaveBeenCalledWith('http://example.com');
    });

    it('should perform POST request', async () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

        const response = await httpService.post('http://example.com', {key: 'value'});
        const data = await response.json();

        expect(data).toEqual({data: '12345'});
        expect(fetch).toHaveBeenCalledWith('http://example.com', {
            method: 'POST',
            body: JSON.stringify({key: 'value'}),
        });
    });

    it('should perform PUT request', async () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

        const response = await httpService.put('http://example.com', {key: 'value'});
        const data = await response.json();

        expect(data).toEqual({data: '12345'});
        expect(fetch).toHaveBeenCalledWith('http://example.com', {
            method: 'PUT',
            body: JSON.stringify({key: 'value'}),
        });
    });

    it('should perform DELETE request', async () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

        const response = await httpService.delete('http://example.com');
        const data = await response.json();

        expect(data).toEqual({data: '12345'});
        expect(fetch).toHaveBeenCalledWith('http://example.com', {
            method: 'DELETE',
        });
    });
});
