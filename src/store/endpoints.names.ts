import { API_HOST } from "@/global";
const API_URL: string = `${API_HOST}/api/v1`;
export const LOGIN_ENDPOINT: string = `${API_URL}/login/`;
export const SERVICE_TYPE_LIST_ENDPOINT = `${API_URL}/service-types/`;
export const TOKEN_VALIDATION_ENDPOINT = `${API_URL}/token-validation/`;
export const SERVICE_ENDPOINT = `${API_URL}/services/`;
export const SOFT_DELETE_ENDPOINT = `${API_URL}/generic-soft-delete/`;
export const PACKAGE_VALIDITY_ENDPOINT = `${API_URL}/package-validity-list/`;
export const PACKAGE_ENDPOINT: string = `${API_URL}/packages/`;