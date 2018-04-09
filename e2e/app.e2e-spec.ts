import { ShoppingRecipePage } from './app.po';

describe('shopping-recipe App', () => {
  let page: ShoppingRecipePage;

  beforeEach(() => {
    page = new ShoppingRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
