import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'anyName',
  description: 'anyName2',
  version: '1.0.0',
  manifest_version: 3,
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/views/index.tsx'],
      run_at: 'document_idle'
    }
  ],
  icons: {
    16: 'img/logo-16.png',
    32: 'img/logo-34.png',
    48: 'img/logo-48.png',
    128: 'img/logo-128.png'
  },

  action: {
    default_icon: 'img/logo-48.png'
  },
  web_accessible_resources: [
    {
      resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: []
    }
  ],
  permissions: []
})