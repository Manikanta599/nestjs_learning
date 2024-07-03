import { Body, Controller, Get, Param, Post, Req, Res, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createuserdto } from 'src/users/dtos/createuserdto';
// import { UserService } from 'src/users/services/userservice';  
import { UserService } from 'src/users/services/userservice/userservice.service.spec';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return {
      username: 'sai',
      email: 'sai@gmail.com',
    };
  }


  @Get('fetchusers')
  fusers() {
    console.log('inside fusers controler..')
     return this.userService.fetchusers(); 
  }

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('created..');
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUserdto(@Body() userData: createuserdto) {
    console.log(userData.email);
    this.userService.createUser(userData);
    return userData;
  }

  @Get(':id')
  getuserbyId(@Param('id', ParseIntPipe) id: number) {
    console.log('inside the id..');
    console.log(id);
    return this.userService.fetchUserById(id);
  }

  
}
