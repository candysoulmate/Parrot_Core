import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: 'Ov23liVsMQPMfWpfpbXz',
      clientSecret: 'd408645cc37aa477b2826fd54729f9ce5466ee08',
      callbackURL: 'http://localhost:3000/user/github/callback',
      scope: ['public_profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done,
  ) {
    console.log('profile', profile);
    // if (profile['error'] === 'access_denied') {
    //   // 用户取消了授权，返回一个特定的状态码给前端
    //   return done(null, false, { message: 'User denied access' });
    // }
    if (!profile) {
      // 用户取消了授权，返回一个特定的状态码给前端
      return done(null, false, { message: 'User denied access' });
    }
    console.log('done', done);

    return profile;
  }
}
