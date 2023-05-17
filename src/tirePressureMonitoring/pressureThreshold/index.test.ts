import { IPressureThreshold, PressureThreshold } from '.';

describe('PressureThreshold', () => {
  let pressureThreshold: IPressureThreshold;

  beforeAll(() => {
    pressureThreshold = new PressureThreshold();
  });

  it('should be able to be instanced', () => {
    expect(new PressureThreshold()).toBeInstanceOf(PressureThreshold);
  });

  it('should return true for low pressure', () => {
    const result = pressureThreshold.check(15);

    expect(result).toBe(true);
  });

  it('should return true for high pressure', () => {
    const result = pressureThreshold.check(25);

    expect(result).toBe(true);
  });

  it('should return false for normal pressure', () => {
    const result = pressureThreshold.check(19);

    expect(result).toBe(false);
  });
});
