import { Sensor } from '.';

describe('Sensor', () => {
  let sensor: Sensor;

  beforeEach(() => {
    sensor = new Sensor();
  });

  it('should return the correct pressure value', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    const pressure = sensor.popNextPressurePsiValue();

    expect(pressure).toBe(16 + 1); // 16 (offset) + 1.5 (pressure value)
  });

  it('should call the samplePressure method', () => {
    const sensorProto = Object.getPrototypeOf(sensor);
    // Accessing private method can couple the test with implementation details:
    const samplePressureSpy = jest
      .spyOn(sensorProto, 'samplePressure')
      .mockReturnValue(3);

    const pressure = sensor.popNextPressurePsiValue();

    expect(samplePressureSpy).toHaveBeenCalled();
    expect(pressure).toBe(16 + 3); // 16 (offset) + 3 (mocked pressure value)
  });
});
