import { Module } from '@nestjs/common';
import { AutoService } from './auth.service';
import { AuthController } from './auth.controller';
import { secret } from './secretToken.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: secret.secretKey,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AutoService],
  exports: [AutoService],
})
export class AuthModule {}
