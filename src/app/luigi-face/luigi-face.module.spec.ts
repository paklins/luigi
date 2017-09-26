import { LuigiFaceModule } from './luigi-face.module';

describe('LuigiFaceModule', () => {
  let luigiFaceModule: LuigiFaceModule;

  beforeEach(() => {
    luigiFaceModule = new LuigiFaceModule();
  });

  it('should create an instance', () => {
    expect(luigiFaceModule).toBeTruthy();
  });
});
