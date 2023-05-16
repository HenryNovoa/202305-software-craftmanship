import { Sensor, ISensor } from '.';

describe('Sensor', () => {
  let sensor: ISensor;

  beforeAll(() => {
    sensor = new Sensor();
  });

  it('should be able to be instanced', () => {
    expect(new Sensor()).toBeInstanceOf(Sensor);
  });
});
