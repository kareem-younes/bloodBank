export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  phoneNumber: string;
  dateOfBirth: Date | string;
  nationalId: string;
  address: string;
  city: string;
  gender: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | null;
  role?: 'user' | 'admin' | 'hospital';
  createdAt?: Date;
  updatedAt?: Date;
}
