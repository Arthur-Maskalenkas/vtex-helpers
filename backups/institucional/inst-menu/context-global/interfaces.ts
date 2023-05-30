export interface GlobalSiteEditorValues {
  schemaAppInstitutionalMenu: ItemInstMenu[]
}

export interface GlobalUseContextProps extends GlobalSiteEditorValues {
  
}

export interface ItemInstMenu {
  type: string
  __editorItemTitle: string
  text: string
  href?: string
}