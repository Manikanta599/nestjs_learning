import { Body, Controller, Get, Param, Post,ParseIntPipe, Put, Delete } from '@nestjs/common';
import { CrudService } from 'src/crud_service/crud_service.service';
import { agent } from 'supertest';

@Controller('crud')
export class CrudControllerController {

    constructor(private crudservice:CrudService){
        
    }

    @Get('get')
    getUsers()
    {
        return 'users'
    }

    @Post('post')
    insertUser(@Body('name') name:string,
                @Body('age') age:number,
                @Body('email') email:string,
                )
    {
        const id=this.crudservice.insertUser(name,age,email);
        return{
            uid:id,
        };
    }

    @Get('all')
    getAllUsers()
    {
        return this.crudservice.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number)
    {
        return this.crudservice
    }

    @Put(':uid')
    updateUser(@Param('uid',ParseIntPipe) uid:number,
    @Body('name') name:string,
    @Body('age') age:number,
    @Body('email') email:string

)
    {
        return this.crudservice.updateUser(uid,name,age,email);
    }


    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number)
    {
        this.crudservice.deleteUser(id);
    }


}
