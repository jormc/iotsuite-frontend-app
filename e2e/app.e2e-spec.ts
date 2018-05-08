import { IotsuiteFrontendAppPage } from './app.po';

describe('iotsuite-frontend-app App', () => {
  let page: IotsuiteFrontendAppPage;

  beforeEach(() => {
    page = new IotsuiteFrontendAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
