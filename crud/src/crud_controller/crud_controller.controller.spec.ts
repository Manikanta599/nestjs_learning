import { Test, TestingModule } from '@nestjs/testing';
import { CrudControllerController } from './crud_controller.controller';

describe('CrudControllerController', () => {
  let controller: CrudControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudControllerController],
    }).compile();

    controller = module.get<CrudControllerController>(CrudControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
