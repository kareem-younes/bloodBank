export interface Request {
  _id?: string;

  user: string;
  hospital?: string;

  type:
  | 'find_blood'
  | 'donate_blood'
  | 'donate_supplies'
  | 'find_separated_blood'
  | 'donate_medicine';

  payload?: any;
  status?: 'pending' | 'approved' | 'rejected';
  notes?: string;

  createdAt?: string;
  updatedAt?: string;
}
