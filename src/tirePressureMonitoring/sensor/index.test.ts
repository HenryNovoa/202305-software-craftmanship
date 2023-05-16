import { Sensor, ISensor } from '.';

describe('Sensor', () => {
  let sensor: ISensor;

  beforeAll(() => {
    sensor = new Sensor();
  });

  it('should be able to be instanced', () => {
    expect(new Sensor()).toBeInstanceOf(Sensor);
  });

  /*
  it('should output a pressure value higher than its offset', () => {
    const psiValue = sensor.popNextPressurePsiValue();

    expect(psiValue).toBeGreaterThan(16); // ????
  });
  */
});