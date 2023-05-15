import Alarm from '../alarm';
import { ISensor } from '../sensor';
import { IPressureThreshold } from '../pressureThreshold';

class FakeSensor implements ISensor {
	constructor(private number: number){}

	popNextPressurePsiValue(): number {
		return this.number;
	}
}

class FakePressureThreshold implements IPressureThreshold {
	check(pressure: number): boolean {
		return pressure < 18 || 22 < pressure;
	}
}

describe('Tyre Pressure Monitoring System', () => {
	describe('Alarm', () => {
		it('should be able to be instanced', () => {
			const alarm = new Alarm(new FakeSensor(20), new FakePressureThreshold());

			expect(alarm).toBeInstanceOf(Alarm);
		});

		describe('isAlarmOn', () => {
			it('should set the alarm on', () => {
				const alarm = new Alarm(new FakeSensor(20), new FakePressureThreshold());
				alarm.check();

				expect(alarm.isAlarmOn()).toEqual(false);
			});

			it('should set the alarm off', () => {
				const alarm = new Alarm(new FakeSensor(99), new FakePressureThreshold());
				alarm.check();

				expect(alarm.isAlarmOn()).toEqual(true);
			});
		})
	});
});