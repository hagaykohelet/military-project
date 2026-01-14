import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/entities/user.entity';
import { ShiftModule } from './shift/shift.module';
import { Shift } from './shift/entities/shift.entity';
import { AssignmentModule } from './assignment/assignment.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      models: [User, Shift],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    ShiftModule,
    AssignmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
