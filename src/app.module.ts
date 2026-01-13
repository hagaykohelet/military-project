import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/entities/user.entity';

@Module({
  // imports: [UsersModule, AuthModule,SequelizeModule.forRootAsync({
//   useFactory: () => ({
//     dialect: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'root',
//     database: 'test',
//     models: [User],
//   }),
// }),
// UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
