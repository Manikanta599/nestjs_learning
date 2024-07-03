import { Delete, Injectable } from '@nestjs/common';
import { emit } from 'process';
import { UserModel } from 'src/crud_model/model';

@Injectable()
export class CrudService{

    private users:UserModel[]=[];

    insertUser(
         name:string,
         age:number,
         email:string)
         {
            const newUser=new UserModel(1,name,age,email);
            this.users.push(newUser)

            return this.users;
         }

    getUsers()
    {
        return [...this.users];
    }
    getUser(id:number)
    {
        return this.getUserById(id);
    }

    updateUser(uid: number, name: string, age: number, email: string) {
        const [targetUser, index] = this.getUserById(uid);
    
        if (targetUser) {
          const newUser = { ...targetUser, name, age, email };
          this.users[index] = newUser;
          return newUser;
        } else {
          throw new Error(`User with id ${uid} not found`);
        }
      }
    
      private getUserById(id: number): [any, number] {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1) {
          return [null, -1];
        }
        return [this.users[index], index];
      }


      deleteUser(id:number)
      {
        const[target,index]=this.getUser(id);
        this.users.splice(index,1);
      }
}
