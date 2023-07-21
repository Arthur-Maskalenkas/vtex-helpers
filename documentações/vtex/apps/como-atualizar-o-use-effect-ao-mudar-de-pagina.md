# runtime atualizar pagina
# useEffectatualizar pagina
# useeffect atualizar pagina
# pagina atualizar

  React.useEffect(() => {
    (async () => {
      const vtexApiGetUser = new VtexRepositoryAccount()
      const smartHintRepositoryMetaData = new SmartHintRepositoryMetaData()
      const getScriptTracking = new GetScriptTracking(vtexApiGetUser, smartHintRepositoryMetaData)
      console.log(`🚀 ~ file: index.tsx:22 ~ getScriptTracking:`, getScriptTracking)

      const channel = runtime?.deviceInfo?.isMobile
        ? 'Mobile'
        : 'Desktop'

      const trackingData = await getScriptTracking.handle({ channel, shCode, pages: runtime?.page })
      console.log(`🚀 ~ file: index.tsx:25 ~ trackingData:`, trackingData)
    })()
  }, [runtime.route])