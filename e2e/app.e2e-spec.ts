import { MyFirstDeckbuilderPage } from './app.po';

describe('my-first-deckbuilder App', () => {
  let page: MyFirstDeckbuilderPage;

  beforeEach(() => {
    page = new MyFirstDeckbuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
