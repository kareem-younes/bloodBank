


export interface Irequest {
  requests: Request[];
}

interface Request {
  _id: string;
  user: User | null;
  hospital: string;
  type: string;
  payload: Payload;
  status: string;
  notes: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

interface Payload {
  bloodType?: string;
  units?: number;
  urgent?: boolean;
  notes?: string;
  name?: string;
  phoneNumber?: string;
  hospital?: string;
  typeOfTools?: string;
  address?: string;
  nationalId?: string;
  dateOfBirth?: string;
  donationDate?: string;
  bloodGroup?: string;
  eligibilityAnswers?: EligibilityAnswers;
}

interface EligibilityAnswers {
  recentMedication: string;
  recentSurgery: string;
  weightAbove50kg: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
}

