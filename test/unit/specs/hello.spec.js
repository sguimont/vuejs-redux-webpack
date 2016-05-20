import Vue from 'vue';
import Hello from 'src/components/hello';

describe('hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><hello></hello></div>',
      components: { Hello }
    }).$mount();
    expect(vm.$el.querySelector('.hello h3').textContent).to.contain('Hello World!');
  });
});
