import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * API Abstraction to handle request methods (POST, GET, DELETE, PATCH, PUT).
 * Setup Authorization headers with token.
 */
class ApiService {

  public post(endpoint: string, body: any) {
    const newConfig = this.getAxiosConfig();
    return axios.post(endpoint, body, newConfig)
      .catch(this.handleError);
  }

  public get(endpoint: string) {
    const newConfig = this.getAxiosConfig();
    return axios.get(endpoint, newConfig)
      .catch(this.handleError);
  }

  public patch(endpoint: string, body: any) {
    const newConfig = this.getAxiosConfig();
    return axios.patch(endpoint, body, newConfig)
      .catch(this.handleError);
  }

  public delete(endpoint: string, body: any) {
    const newConfig = this.getAxiosConfig();
    return axios.delete(endpoint, { data: body, ...newConfig })
      .catch(this.handleError);
  }

  public put(endpoint: string, body: any) {
    const newConfig = this.getAxiosConfig();
    return axios.put(endpoint, body, newConfig)
      .catch(this.handleError);
  }

  private getAxiosConfig() {
    const token = window.localStorage.getItem('token');
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    };
    return config;
  }

  private handleError(err: any) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let i = 0; i < errors.length; i += 1) {
        const error = errors[i];
        toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT });
      }
      throw new Error(err.message);
    }
    toast.error(err.message, { position: toast.POSITION.BOTTOM_RIGHT });
    throw new Error(err.message);
  }

}

export default ApiService;
