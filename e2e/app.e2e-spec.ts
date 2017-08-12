import { HelloLibPage } from './app.po';

describe('hello-lib App', () => {
  let page: HelloLibPage;

  beforeEach(() => {
    page = new HelloLibPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
