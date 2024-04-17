import data from './db.json'

export type User = {
  id: number;
  name: string;
  data: number;
  photo: string;
};

export type Props = {
  Users: User[];
};

export const {Users}:   Props = data;