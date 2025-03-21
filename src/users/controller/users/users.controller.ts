import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserType } from 'src/users/dtos/CreateUser.dto';
// import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'John Doe', email: 'john@gmailto.com' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'John Doe',
        posts: [
          { title: 'Post 1', content: 'Content 1' },
          { title: 'Post 2', content: 'Content 2' },
        ],
      },
    ];
  }

  //   @Post('create')  //But its a express way of doing things
  //   createPost(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.body);
  //     response.send('Post created');
  //   }

  @Post('create')
  createUser(@Body() userData: CreateUserType) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }

  @Get()
  getUsersWithQuery(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [{ username: 'John Doe', email: 'bsdk@gmail.com ' }];
  }
}
