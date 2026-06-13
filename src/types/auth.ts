export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  organizationId: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    organizationId: string;
    roleId: string;
  };
}

export interface JwtPayload {
  id: string;
  email: string;
  organizationId: string;
  roleId: string;
  iat: number;
  exp: number;
}
