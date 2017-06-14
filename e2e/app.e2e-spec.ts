import { ProductPage } from './app.po';

describe('product App', () => {
  let page: ProductPage;

  beforeEach(() => {
    page = new ProductPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
