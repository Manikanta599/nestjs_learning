import { Test, TestingModule } from '@nestjs/testing';
import { CrudService } from './crud_service.service';

describe('CrudServiceService', () => {
  let service: CrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudService],
    }).compile();

    service = module.get<CrudService>(CrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
