import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { md5 } from 'src/utils';

@Injectable()
export class AuthService {
  @Inject()
  private userService: UserService;

  async validateUser(username, password) {
    const user = await this.userService.findOne(username);

    if (!user) {
      throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
    }

    if (user.password !== md5(password)) {
      throw new HttpException('密码错误', HttpStatus.BAD_REQUEST);
    }

    return user;
  }
}
