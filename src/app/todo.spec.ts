import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });


  it('should accept value in the constructor', () => {

    let abc = new Todo({
      title : 'test',
      complete : true
    });
    expect(abc.title).toEqual('test');
    expect(abc.complete).toEqual(true);
  });


});
