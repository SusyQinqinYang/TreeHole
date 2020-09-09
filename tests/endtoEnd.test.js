const puppeteer = require("puppeteer");
require("regenerator-runtime/runtime"); //for async test need to import this line to regenerate-runtime
let page;
let browser;

describe("End-End Test", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
    });
    page = await browser.newPage();
    page.waitFor(3000);
  });
  //it would close within a second. 
  afterAll(() => {
    browser.close();
  });

  //for end-end want to have the page open before each test.
  beforeEach(async () => {
    await page.goto("http://localhost:3055/");
  });

  //end to end test for relateditemsAndOutFit
  test('Should be titled "Tree Hole"', async () => {
    await expect(page.title()).resolves.toMatch("Tree Hole");
  });

});