export interface IPressureThreshold {
  check(value: number): boolean
}

export class PressureThreshold implements IPressureThreshold {
  private highPressureThreshold: number;
  private lowPressureThreshold: number;

  constructor() {
    this.lowPressureThreshold = 17;
    this.highPressureThreshold = 21;
  }

  public check(psiPressureValue: number) {
    return (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue);
  }
}
