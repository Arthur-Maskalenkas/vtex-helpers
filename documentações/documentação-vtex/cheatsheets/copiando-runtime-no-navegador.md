const {emitter,cacheHints,    components,pages,  introspectionResult,uncriticalStyleRefs,
    criticalSource,  extensions ,messages,...restRuntimeParams} = __RUNTIME__


const {breakpointStyles, fonts, overrides, styleMeta, ...routeParams} = restRuntimeParams.route

let contentResponseParams = null

if (restRuntimeParams?.contentResponse) {
    const {extensionsContent, ...restContentResponse} = restRuntimeParams.contentResponse

    contentResponseParams = restContentResponse
}

const data = Object.assign({}, {
    ...restRuntimeParams,
    route: routeParams,
    contentResponse: contentResponseParams,
})

data