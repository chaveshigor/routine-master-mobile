import {BACKEND_BASE_URL} from '@env';

type RequestParams = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  body: object;
};

class ApplicationApi {
  base_url = BACKEND_BASE_URL;

  async request({method, url, body}: RequestParams): Promise<Response | void> {
    try {
      const response = await fetch(`${this.base_url}/${url}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return response;
    } catch (error) {
      console.log('request error:', error);
    }
  }
}

export default ApplicationApi;
