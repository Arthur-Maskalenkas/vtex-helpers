import { SchemaObjectSiteEditor} from "../../cms-helper";

export const GlobalContextSchemaAvantiFooter = (): SchemaObjectSiteEditor => ({
  type: 'object',
  properties: {
    __editorItemTitle: {
      title: "Configurações Footer",
      type: "string"
      },
   }
   })
