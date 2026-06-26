
export interface IBlood {
  _id: string;
  user: null;
  hospital: string;
  type: string;
  payload: Payload;
  status: string;
  notes: string;
}

interface Payload {
  bloodType?: string;
  units?: number;
  urgent?: boolean;
  notes?: string;
}





