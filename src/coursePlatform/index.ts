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

export enum componentType {
  COURSE = 'course',
  VIDEO = 'video',
  POST = 'post',
  PODCAST = 'podcast',
  LINK = 'link',
}

class Course extends BaseComponent {
  #type = componentType.COURSE;

  getType(): string {
    return this.#type;
  }
}

class Video extends BaseComponent {
  #type = componentType.VIDEO;

  getType(): string {
    return this.#type;
  }
}

class Post extends BaseComponent {
  #type = componentType.POST;

  getType(): string {
    return this.#type;
  }
}

class Podcast extends BaseComponent {
  #type = componentType.PODCAST;

  getType(): string {
    return this.#type;
  }
}

class Link extends BaseComponent {
  #type = componentType.LINK;

  getType(): string {
    return this.#type;
  }
}

type ComponentsMapType = {
  [type in componentType]: new (name?: string) => BaseComponent;
};

export class ComponentsFactory {
  #components: ComponentsMapType = {
    [componentType.COURSE]: Course,
    [componentType.VIDEO]: Video,
    [componentType.POST]: Post,
    [componentType.PODCAST]: Podcast,
    [componentType.LINK]: Link,
  };

  create(type: componentType, name?: string): BaseComponent {
    return new this.#components[type](name);
  }
}
