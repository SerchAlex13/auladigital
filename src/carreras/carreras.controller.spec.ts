import { Test, TestingModule } from '@nestjs/testing';
import { CarrerasController } from './carreras.controller';

describe('CarrerasController', () => {
  let controller: CarrerasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarrerasController],
    }).compile();

    controller = module.get<CarrerasController>(CarrerasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
