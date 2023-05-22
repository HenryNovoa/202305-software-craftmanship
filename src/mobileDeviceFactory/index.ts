interface BaseScreen {
  display(): string;
}
interface BaseCPU {
  process(): string;
}
interface BaseBattery {
  charge(): string;
}
interface BaseCamera {
  capture(): string;
}

class Model1Screen implements BaseScreen {
  display(): string {
    return 'this is a model 1 screen';
  }
}

class Model1CPU implements BaseCPU {
  process(): string {
    return 'this is a model 1 cpu';
  }
}

class Model1Battery implements BaseBattery {
  charge(): string {
    return 'this is a model 1 battery';
  }
}

class Model1Camera implements BaseCamera {
  capture(): string {
    return 'this is a model 1 camera';
  }
}

class Model2Screen implements BaseScreen {
  display(): string {
    return 'this is a model 2 screen';
  }
}

class Model2CPU implements BaseCPU {
  process(): string {
    return 'this is a model 2 cpu';
  }
}

class Model2Battery implements BaseBattery {
  charge(): string {
    return 'this is a model 2 battery';
  }
}

class Model2Camera implements BaseCamera {
  capture(): string {
    return 'this is a model 2 camera';
  }
}

interface MobileDeviceComponentsFactory {
  createScreen(): BaseScreen;
  createCPU(): BaseCPU;
  createBattery(): BaseBattery;
  createCamera(): BaseCamera;
}

export class XiaomiComponentsFactory implements MobileDeviceComponentsFactory {
  createScreen(): BaseScreen {
    return new Model1Screen();
  }

  createCPU(): BaseCPU {
    return new Model1CPU();
  }

  createBattery(): BaseBattery {
    return new Model1Battery();
  }

  createCamera(): BaseCamera {
    return new Model1Camera();
  }
}

export class SamsungComponentsFactory implements MobileDeviceComponentsFactory {
  createScreen(): BaseScreen {
    return new Model1Screen();
  }

  createCPU(): BaseCPU {
    return new Model1CPU();
  }

  createBattery(): BaseBattery {
    return new Model2Battery();
  }

  createCamera(): BaseCamera {
    return new Model2Camera();
  }
}

export class OPPOComponentsFactory implements MobileDeviceComponentsFactory {
  createScreen(): BaseScreen {
    return new Model1Screen();
  }

  createCPU(): BaseCPU {
    return new Model1CPU();
  }

  createBattery(): BaseBattery {
    return new Model1Battery();
  }

  createCamera(): BaseCamera {
    return new Model2Camera();
  }
}

interface BaseMobileDeviceFactory {
  ensambleMobileDevice(): MobileDevice;
}

abstract class MobileDevice {
  battery: BaseBattery;
  cpu: BaseCPU;
  camera: BaseCamera;
  screen: BaseScreen;
}

export class MobileDeviceFactory implements BaseMobileDeviceFactory {
  private factory: MobileDeviceComponentsFactory;
  private device: MobileDevice;

  constructor(factory: MobileDeviceComponentsFactory) {
    this.factory = factory;
  }

  ensambleMobileDevice() {
    this.device = {
      battery: this.factory.createBattery(),
      cpu: this.factory.createCPU(),
      camera: this.factory.createCamera(),
      screen: this.factory.createScreen(),
    };

    return this.device;
  }
}
