import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  private soliders: CreateUserDto[] = [];

  addSolider(solider: CreateUserDto): string {
    this.soliders.push(solider);
    return `solider added successfully`;
  }

  getAll() {
    return [...this.soliders];
  }

  getOne(username: string): CreateUserDto[] {
    return this.soliders.filter((soli) => soli.username === username);
  }

  // put(id: number, solider: CreateUserDto): string {
  //   this.soliders.forEach((soli) => {
  //     if (soli.id === id) {
  //       soli = solider;
  //     }
  //   });
  //   return `${id} update`;
  // }

  delete(username: string): string {
    const index: number = this.soliders.findIndex(
      (soliderId) => soliderId.username === username,
    );
    this.soliders.splice(index, 1);
    return `user ${username} deleted`;
  }
}
