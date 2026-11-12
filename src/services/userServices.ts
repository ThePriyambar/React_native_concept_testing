import apiClient from '../api/apiClient';
import {User} from '../types/userTypes';

export const getUsers = async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
}