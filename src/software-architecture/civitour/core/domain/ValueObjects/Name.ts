/* eslint-disable no-useless-constructor */
import { ValueObject } from './ValueObject';

interface NameProps{
    value: string
}

export class Name extends ValueObject<NameProps> {
  static readonly MIN_LENGTH = 3;
  static readonly MAX_LENGTH = 25;

  private constructor(props: NameProps) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(name: string) : Name {
    if (name === undefined || name === null || name.length <= Name.MIN_LENGTH || name.length > Name.MAX_LENGTH) {
      throw new Error('User must be greater than 3 chars and less than 25.');
    } else {
      return new Name({ value: name });
    }
  }
}

