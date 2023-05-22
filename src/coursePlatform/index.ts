export abstract class BaseComponent {
  #name: string;
  #children: BaseComponent[] = [];

  constructor(name: string = '') {
    this.#name = name;
  }

  hasChildren(): boolean {
    return this.#children.length > 0;
  }

  addChildren(component: BaseComponent): boolean {
    if (component.getType() !== this.getType()) {
      this.#children.push(component);
      return true;
    }

    return false;
  }

  getName(): string {
    return this.#name;
  }

  abstract getType(): string;
}

enum componentType {
  COURSE = 'course',
  VIDEO = 'video',
  POST = 'post',
  PODCAST = 'podcast',
  LINK = 'link',
}

export class Course extends BaseComponent {
  #type = componentType.COURSE;

  getType(): string {
    return this.#type;
  }
}

export class Video extends BaseComponent {
  #type = componentType.VIDEO;

  getType(): string {
    return this.#type;
  }
}

export class Post extends BaseComponent {
  #type = componentType.POST;

  getType(): string {
    return this.#type;
  }
}

export class Podcast extends BaseComponent {
  #type = componentType.PODCAST;

  getType(): string {
    return this.#type;
  }
}

export class Link extends BaseComponent {
  #type = componentType.LINK;

  getType(): string {
    return this.#type;
  }
}
