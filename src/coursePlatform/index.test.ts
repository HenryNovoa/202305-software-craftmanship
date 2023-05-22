import { BaseComponent, Course, Link, Post, Video } from '.';

describe('Course platform', () => {
  it('should instance course correctly', () => {
    const course = new Course();

    expect(course).toBeInstanceOf(BaseComponent);
  });

  it('should be able to tell if a component has nested children', () => {
    const course = new Course();

    const post = new Post();
    course.addChildren(post);

    const video = new Video();
    const link = new Link();
    post.addChildren(video);
    post.addChildren(link);

    expect(course.hasChildren()).toBe(true);
    expect(post.hasChildren()).toBe(true);
    expect(video.hasChildren()).toBe(false);
    expect(link.hasChildren()).toBe(false);
  });
});
