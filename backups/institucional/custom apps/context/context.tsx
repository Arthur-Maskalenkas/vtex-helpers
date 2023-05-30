import React, { useMemo } from 'react'
import { logIfIsDevWorkspace } from "../modules/logs"
import { CmsContext, CmsContextProviderProps, buildAppSchema, CmsProviderProps } from "./"


export const CmsContextProvider = (
  props: CmsContextProviderProps
) => {
  const cmsContext: CmsProviderProps = {
    _screen_config_dev: props?._screen_config_dev?.[0] ?? null,
    items: props?.items ?? [],
    _screen_config_banner: props?._screen_config_banner?.[0] ?? null,
    _screen_config_breadcrumb: props?._screen_config_breadcrumb?.[0] ?? null
  }
  console.log(`🚀 ~ file: context.tsx:15 ~ cmsContext:`, cmsContext)

  logIfIsDevWorkspace(`🚀 ~ file: context.tsx:8 ~ props:`, props)

  // utiilizando para prevenir quebras ao gerenciar os dados no site-editor.
  const cmsContextMemoized = useMemo(() => cmsContext, [])

  return (
    <CmsContext.Provider value={cmsContextMemoized}>
      {props.children}
    </CmsContext.Provider>
  )
}

CmsContextProvider.schema = buildAppSchema()
