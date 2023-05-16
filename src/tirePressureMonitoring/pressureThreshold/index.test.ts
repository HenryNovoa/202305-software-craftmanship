import { PressureThreshold, IPressureThreshold  } from '.';

describe('PressureThreshold', () => {
  let pressureThreshold: IPressureThreshold;

  beforeAll(() => {
    pressureThreshold = new PressureThreshold();
  });

  it('should be able to be instanced', () => {
    expect(new PressureThreshold()).toBeInstanceOf(PressureThreshold);
  });
});