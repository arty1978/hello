export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthday?: string; // adding "?" sign means that this field is not required.
  isBlocked: boolean;
  isActive?: boolean;
}
