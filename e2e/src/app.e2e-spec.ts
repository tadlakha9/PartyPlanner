<<<<<<< HEAD
import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
=======
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
>>>>>>> a16622d9c8d8b5f287c15342ebd86dd37c454371
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

<<<<<<< HEAD
  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("Welcome to black-dashboard-angular!");
=======
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to angularApp!');
>>>>>>> a16622d9c8d8b5f287c15342ebd86dd37c454371
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
<<<<<<< HEAD
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
=======
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
>>>>>>> a16622d9c8d8b5f287c15342ebd86dd37c454371
  });
});
