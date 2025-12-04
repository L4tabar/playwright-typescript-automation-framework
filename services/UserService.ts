import { APIRequestContext } from '@playwright/test';
import { User } from '../utils/UserFactory';
import { API_BASE_URL, API_ENDPOINTS } from '../config/constants';

export class UserService {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createUser(user: User): Promise<any> {
    const formData = new globalThis.FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    if (user.password) formData.append('password', user.password);
    if (user.title) formData.append('title', user.title);
    if (user.birth_date) formData.append('birth_date', user.birth_date);
    if (user.birth_month) formData.append('birth_month', user.birth_month);
    if (user.birth_year) formData.append('birth_year', user.birth_year);
    if (user.firstname) formData.append('firstname', user.firstname);
    if (user.lastname) formData.append('lastname', user.lastname);
    if (user.company) formData.append('company', user.company);
    if (user.address1) formData.append('address1', user.address1);
    if (user.address2) formData.append('address2', user.address2);
    if (user.country) formData.append('country', user.country);
    if (user.zipcode) formData.append('zipcode', user.zipcode);
    if (user.state) formData.append('state', user.state);
    if (user.city) formData.append('city', user.city);
    if (user.mobile_number) formData.append('mobile_number', user.mobile_number);

    const response = await this.request.post(`${API_BASE_URL}${API_ENDPOINTS.CREATE_ACCOUNT}`, {
      data: formData,
    });

    return response.json();
  }

  async verifyLogin(email: string, password: string): Promise<any> {
    const formData = new globalThis.FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await this.request.post(`${API_BASE_URL}${API_ENDPOINTS.VERIFY_LOGIN}`, {
      data: formData,
    });

    return response.json();
  }

  async deleteUser(email: string, password: string): Promise<any> {
    const formData = new globalThis.FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await this.request.delete(`${API_BASE_URL}${API_ENDPOINTS.DELETE_ACCOUNT}`, {
      data: formData,
    });

    return response.json();
  }

  async getUserByEmail(email: string): Promise<any> {
    const response = await this.request.get(`${API_BASE_URL}${API_ENDPOINTS.GET_USER_BY_EMAIL}`, {
      params: { email },
    });

    return response.json();
  }

  async updateUser(user: User): Promise<any> {
    const formData = new globalThis.FormData();
    if (user.name) formData.append('name', user.name);
    if (user.email) formData.append('email', user.email);
    if (user.password) formData.append('password', user.password);
    if (user.title) formData.append('title', user.title);
    if (user.birth_date) formData.append('birth_date', user.birth_date);
    if (user.birth_month) formData.append('birth_month', user.birth_month);
    if (user.birth_year) formData.append('birth_year', user.birth_year);
    if (user.firstname) formData.append('firstname', user.firstname);
    if (user.lastname) formData.append('lastname', user.lastname);
    if (user.company) formData.append('company', user.company);
    if (user.address1) formData.append('address1', user.address1);
    if (user.address2) formData.append('address2', user.address2);
    if (user.country) formData.append('country', user.country);
    if (user.zipcode) formData.append('zipcode', user.zipcode);
    if (user.state) formData.append('state', user.state);
    if (user.city) formData.append('city', user.city);
    if (user.mobile_number) formData.append('mobile_number', user.mobile_number);

    const response = await this.request.put(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_ACCOUNT}`, {
      data: formData,
    });

    return response.json();
  }
}
