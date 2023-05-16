import { IPressureThreshold } from '../pressureThreshold';
import { ISensor } from '../sensor';

export default class Alarm {
  private sensor: ISensor;
  private pressureThreshold: IPressureThreshold;
  private alarmOn: boolean;

  constructor(sensor: ISensor, pressureThreshold: IPressureThreshold) {
    this.sensor = sensor;
    this.pressureThreshold = pressureThreshold;
    this.alarmOn = false;
  }

  private setAlarmOn(isAlarmOn: boolean) {
    this.alarmOn = isAlarmOn;
    return this.alarmOn;
  }

  public check() {
    const psiPressureValue = this.sensor.popNextPressurePsiValue();
    const shouldSetAlarmOn = this.pressureThreshold.check(psiPressureValue);

    this.setAlarmOn(shouldSetAlarmOn);
  }

  public isAlarmOn() {
    return this.alarmOn;
  }
}
