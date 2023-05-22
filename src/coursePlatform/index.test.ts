import { BaseComponent, ComponentsFactory, componentType } from '.';

describe('Course platform', () => {
  const components = new ComponentsFactory();

  it('should instance components correctly', () => {
    const course = components.create(componentType.COURSE, 'awesome course!');

    expect(course).toBeInstanceOf(BaseComponent);
    expect(course.getType()).toBe(componentType.COURSE);
    expect(course.getName()).toBe('awesome course!');
  });

  it('should be able to tell if a component has children', () => {
    const course = components.create(componentType.COURSE);

    const post = components.create(componentType.POST);
    course.addChildren(post);

    const video = components.create(componentType.VIDEO);
    post.addChildren(video);

    expect(course.hasChildren()).toBe(true);
    expect(post.hasChildren()).toBe(true);
    expect(video.hasChildren()).toBe(false);
  });
});
