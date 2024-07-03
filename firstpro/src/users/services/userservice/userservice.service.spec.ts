import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UserService {
  private users = [
    { username: 'siva', email: 'siva@gmail.com' },
  ];

  fetchusers() {
    console.log('inside the fetchusers..')
    return this.users;
  }

  createUser(userDetails:CreateUserType)
  {
    this.users.push(userDetails);
    return;
    
  }

  fetchUserById(id:number)
  {
    return {id,username:'sai',email:'sai@gmail.com'};
  }

  
}
