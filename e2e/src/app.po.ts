<<<<<<< HEAD
import { browser, by, element } from "protractor";
=======
import { browser, by, element } from 'protractor';
>>>>>>> a16622d9c8d8b5f287c15342ebd86dd37c454371

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
<<<<<<< HEAD
    return element(by.css("app-root h1")).getText() as Promise<string>;
=======
    return element(by.css('app-root h1')).getText() as Promise<string>;
>>>>>>> a16622d9c8d8b5f287c15342ebd86dd37c454371
  }
}
