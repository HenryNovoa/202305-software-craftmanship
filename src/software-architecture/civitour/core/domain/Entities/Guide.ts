import { Name } from '../ValueObjects/Name';
import { Entity } from './Entity';

interface GuideProps {
    name: Name
}

export class Guide extends Entity<GuideProps> {
  private constructor(props: GuideProps) {
    super(props);
  }

  get name(): Name {
    return this.props.name;
  }

  public static create(props: GuideProps) {
    if (props.name === null || props.name === undefined) {
      throw new Error('Must provide a name for the user');
    }

    return new Guide(props);
  }
}
