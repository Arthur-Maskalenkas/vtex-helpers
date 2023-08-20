import {RuntimeModel} from "../models/runtime";

export class HtmlManager {
  public selectScriptWithRuntime(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const scriptElements: any = doc?.querySelectorAll('body.bg-base script');

    const scriptsWithRunTime = []

    for (const script of scriptElements) {
      const scriptContent = script?.textContent;
      if (/^\s+__RUNTIME__\s=\s{/.test(scriptContent)) {
        scriptsWithRunTime.push(scriptContent)
      }
    }

    return scriptsWithRunTime?.[0]
  }

  public parseRunTime(html: string):RuntimeModel | null {
    const contentToParse = html?.match(/__RUNTIME__ = (.*)/)?.[1]

    if (!contentToParse) return null

    const result = JSON.parse(contentToParse)

    if (!result || JSON.stringify(result) === '{}') return null

    return result
  }

}
