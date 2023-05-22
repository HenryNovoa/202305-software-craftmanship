import {
  MobileDeviceFactory,
  OPPOComponentsFactory,
  SamsungComponentsFactory,
  XiaomiComponentsFactory,
} from '.';

describe('mobile device factory', () => {
  it('should create a new xiaomi mobile product', () => {
    const componentsFactory = new XiaomiComponentsFactory();

    const deviceFactory = new MobileDeviceFactory(componentsFactory);
    const device = deviceFactory.ensambleMobileDevice();

    expect(device.battery.charge()).toBe('this is a model 1 battery');
    expect(device.camera.capture()).toBe('this is a model 1 camera');
    expect(device.cpu.process()).toBe('this is a model 1 cpu');
    expect(device.screen.display()).toBe('this is a model 1 screen');
  });

  it('should create a new samsung mobile product', () => {
    const componentsFactory = new SamsungComponentsFactory();

    const deviceFactory = new MobileDeviceFactory(componentsFactory);
    const device = deviceFactory.ensambleMobileDevice();

    expect(device.battery.charge()).toBe('this is a model 2 battery');
    expect(device.camera.capture()).toBe('this is a model 2 camera');
    expect(device.cpu.process()).toBe('this is a model 1 cpu');
    expect(device.screen.display()).toBe('this is a model 1 screen');
  });

  it('should create a new OPPO mobile product', () => {
    const componentsFactory = new OPPOComponentsFactory();

    const deviceFactory = new MobileDeviceFactory(componentsFactory);
    const device = deviceFactory.ensambleMobileDevice();

    expect(device.battery.charge()).toBe('this is a model 1 battery');
    expect(device.camera.capture()).toBe('this is a model 2 camera');
    expect(device.cpu.process()).toBe('this is a model 1 cpu');
    expect(device.screen.display()).toBe('this is a model 1 screen');
  });
});
