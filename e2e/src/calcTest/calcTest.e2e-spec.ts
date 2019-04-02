import { CalcPage } from "./calculator.po";
import { browser } from 'protractor';

let calcPage = new CalcPage();

describe('test the calculator.', () => {
    it('test additions', () => {
        calcPage.navigateTo();
        calcPage.fillValues(2, 3);
        calcPage.clickButton();
        browser.sleep(3000);
        expect(calcPage.getResult()).toBe('5');
    });
});