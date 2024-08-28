import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { GithubStrategy } from './auth.strategy';

@Module({
  providers: [AuthService, LocalStrategy, GithubStrategy],
  imports: [UserModule],
})
export class AuthModule {}
