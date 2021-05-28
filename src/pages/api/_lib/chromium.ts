import puppeteer, { Page } from 'puppeteer-core'
import { getOptions } from './options'

let _page: Page | null

async function getPage(isDev: boolean): Promise<Page> {
  if (_page) {
    return _page
  }

  const options = await getOptions(isDev)
  const browser = await puppeteer.launch(options)

  _page = await browser.newPage()
  return _page
}

export async function getScreenshot(html: string, isDev: boolean) {
  const page = await getPage(isDev)

  await page.setViewport({
    width: 2048,
    height: 1260
  })
  await page.setContent(html)
  await page.evaluateHandle('document.fonts.ready')

  const file = await page.screenshot({ type: 'png' })

  return file
}
