import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private soliders: CreateUserDto[] = [];
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async addSolider(solider: User): Promise<User> {
    const hash = await bcrypt.hash(solider.password, 10);
    solider.password = hash;
    return await this.userModel.create({
      username: solider.username,
      email: solider.email,
      password: solider.password,
      role: solider.role,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async getOne(username: string): Promise<User | null> {
    return await this.userModel.findOne<User>({
      where: {
        username: username,
      },
    });
  }

  // delete(id: number): string {
  //   const index: number = this.soliders.findIndex(
  //     (soliderId) => soliderId.id === id,
  //   );
  //   this.soliders.splice(index, 1);
  //   return `user ${id} deleted`;
  // }
}
