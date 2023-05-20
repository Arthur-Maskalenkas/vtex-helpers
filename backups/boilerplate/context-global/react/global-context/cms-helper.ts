export class CMSHelper {

  public static thisPageIsSiteEditor():boolean {
    return window?.location?.href?.includes('siteEditor')
  }

  public static thisIsDevWorkspace(): boolean {
    const url = window?.location?.href;

      const regex = /^https?:\/\/([a-z0-9]+)--([a-z0-9]+)\.myvtex\.com\/.*__siteEditor/;

    return  regex.test(url);
  }

  public static generatePage(title:string,content:any): any {
    return {
      title,
      type: 'array',
      maxItems: 1,
      items: content
    }
  }
}




type StringType = {
  type: 'string'
  title: string
  description?: string
  default?: string
  enum?: string[],
  enumNames?: string[],
  widget?: {
    "ui:widget": "textarea" | "image-uploader"
  }
}

type NumberType = {
  type: 'number',
  title: string,
  description?: string
  default?: string
}

type BooleanType = {
  type: 'boolean',
  title: string,
  description?: string
  default?: boolean
}

export type SchemaSiteEditor = SchemaObjectSiteEditor | SchemaArraySiteEditor | BooleanType | NumberType | StringType

export type SchemaObjectSiteEditor = {
  type: 'object';
  properties: Record<string, SchemaSiteEditor>;
}

export type SchemaArraySiteEditor = {
  type: 'array'
  title: string;
  minItems?: number;
  maxItems?: number;
  items: SchemaObjectSiteEditor;
}


