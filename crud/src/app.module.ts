import { Module } from '@nestjs/common';
// import { CrudcontrollerController } from './src/controllers/crudcontroller/crudcontroller.controller';
import { CrudControllerController } from './crud_controller/crud_controller.controller';
import { CrudService } from './crud_service/crud_service.service';

@Module({
  imports: [],
  controllers: [CrudControllerController],
  providers: [CrudService],
})
export class AppModule {}
