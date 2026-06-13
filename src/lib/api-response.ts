export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  statusCode: number;
}

export const successResponse = <T>(
  data: T,
  message: string = 'Success',
  statusCode: number = 200
): ApiResponse<T> => ({
  success: true,
  message,
  data,
  statusCode,
});

export const errorResponse = (
  message: string = 'An error occurred',
  error?: string,
  statusCode: number = 400
): ApiResponse => ({
  success: false,
  message,
  error,
  statusCode,
});

export const notFoundResponse = (message: string = 'Resource not found'): ApiResponse => ({
  success: false,
  message,
  statusCode: 404,
});

export const unauthorizedResponse = (message: string = 'Unauthorized'): ApiResponse => ({
  success: false,
  message,
  statusCode: 401,
});

export const forbiddenResponse = (message: string = 'Forbidden'): ApiResponse => ({
  success: false,
  message,
  statusCode: 403,
});
