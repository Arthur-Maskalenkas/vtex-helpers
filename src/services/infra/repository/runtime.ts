import { type ProtocolLoadRunTimeRepository } from '../../data/protocols/loadRuntimeRepository.ts'

export class RepositoryRuntime implements ProtocolLoadRunTimeRepository {
  private selectTagTemplate (html: string) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const selector = '[data-varname="__RUNTIME__"]'

    const runtimeOnTemplateTag = doc.querySelector(selector)

    const runtimeContent = runtimeOnTemplateTag?.innerHTML?.replace(/^\s+/, '')?.replace(/<\/?\w+>/gi, '')

    if (!runtimeContent || JSON.stringify(runtimeContent) === '{}') return null

    return JSON.parse(runtimeContent)
  }

  private selectScriptWithRuntime (html: string) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const scriptElements: any = doc?.querySelectorAll('body.bg-base script')

    const scriptsWithRunTime = []

    for (const script of scriptElements) {
      const scriptContent = script?.textContent
      if (/^\s+__RUNTIME__\s=\s{/.test(scriptContent)) {
        scriptsWithRunTime.push(scriptContent)
      }
    }

    return scriptsWithRunTime?.[0]
  }

  private parseRunTime (html: string) {
    const contentToParse = html?.match(/__RUNTIME__ = (.*)/)?.[1]

    if (!contentToParse) return null

    const result = JSON.parse(contentToParse)

    if (!result || JSON.stringify(result) === '{}') return null

    return result
  }

  async searchRuntimeInHTML (): ProtocolLoadRunTimeRepository.Result {
    let runtime = null
    const html = await fetch(window.location.href)
    const htmlParsed = await html.text()

    runtime = this.selectTagTemplate(htmlParsed)
    if (runtime) {
      console.log('#!! 🔥 TENTATIVA 1', runtime)
    }
    if (!runtime) {
      console.log('#!! 🔥 TENTATIVA 2', runtime)
      const scriptWithRuntime = this.selectScriptWithRuntime(htmlParsed)
      runtime = this.parseRunTime(scriptWithRuntime)
    }

    return runtime
  }
}