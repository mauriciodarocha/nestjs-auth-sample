import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Mauricio',
      username: 'mauriciodarocha',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user: User) => user.username === username);
  }
}
