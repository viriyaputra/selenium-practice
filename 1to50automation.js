const { Builder, By, Key, until } = require(`selenium-webdriver`);
const chrome = require(`chromedriver`);

async function loginTest() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://zzzscore.com/1to50/en/");

    let search = await driver.findElements(By.css("#grid > div"));

    let i = 1;

    for (let i = 1; i <= 50; i++) {
      const buku = await cariDi(search, i);
      const isiBuku = await buku.getText();
      await buku.click();
    }
  } finally {
    await driver.quit();
  }
}

async function cariDi(rakBuku, bukuYangDiCari) {
  for (const buku of rakBuku) {
    const isiBuku = await buku.getText();
    if (isiBuku == bukuYangDiCari) {
      return buku;
    }
  }
}
loginTest();
