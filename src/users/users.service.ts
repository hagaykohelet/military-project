import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private soliders: CreateUserDto[] = [];

  async addSolider(solider: CreateUserDto): Promise<string> {
    const hash = await bcrypt.hash(solider.password, 10);
    solider.password = hash;
    this.soliders.push(solider);
    return `solider added successfully`;
  }

  getAll() {
    return [...this.soliders];
  }

  getOne(id: number) {
    return this.soliders.find((soli) => soli.id === id);
  }

  delete(id: number): string {
    const index: number = this.soliders.findIndex(
      (soliderId) => soliderId.id === id,
    );
    this.soliders.splice(index, 1);
    return `user ${id} deleted`;
  }
}
