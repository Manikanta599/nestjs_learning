import { Module } from '@nestjs/common';
// import { UserService } from './userservice';  
import { UserService } from './services/userservice/userservice.service.spec';

// import { UsersController } from './users.controller';

import { UsersController } from './controllers/users/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
