import axios, {AxiosInstance} from 'axios';

export class Api {
  private static _instance: Api;
  private readonly _connection: AxiosInstance;

  private constructor() {
    this._connection = axios.create({
      baseURL: 'https://stark-falls-35563.herokuapp.com/api',
    });
  }

  public static getInstance(): Api {
    return this._instance || (this._instance = new this());
  }

  get conn(): AxiosInstance {
    return this._connection;
  }

  public setAuthorization(token: string): void {
    this._connection.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export const apiConn = (): AxiosInstance => {
  return axios.create({
    baseURL: 'https://stark-falls-35563.herokuapp.com/api',
  });
};
