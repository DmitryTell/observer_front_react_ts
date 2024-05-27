export interface IUser {
  id: number;
  name: string;
  role: string;
  room: number;
  sid: string;
  steps: { [key: number]: string };
}
