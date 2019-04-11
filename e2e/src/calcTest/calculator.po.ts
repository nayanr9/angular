import { browser, element, by } from 'protractor';

export class CalcPage{
    navigateTo() {
        return browser.get('/')
        .then(() => this.clickCalLink());
    }

    fillValues(first: number, second: number) {
        element(by.name('firstValue')).sendKeys(first);
        element(by.name('secondValue')).sendKeys(second);
    }

    clickButton() {
        element(by.tagName('button')).click();
    }

    clickCalLink() {
        element(by.id('calLink')).click();
    }

    getResult() {
        return element(by.id('result')).getText();
    }
}