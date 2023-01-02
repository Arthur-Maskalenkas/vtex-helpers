import { RefinedDataOnProductContext } from "../../components/badges-avanti/_interfaces";
import { schema_flags_custom } from "./_schemas";
import { schema_root_custom_app_badge_custom } from "./_schemas-mapped";

//
// ** Tipos de valores em que o site-editor vai possuir na raiz do objeto (root). **
//
// ** Todos os tipos desses objetos presentes nas raizes devem ser colocados em ./_schemas **
//

export type GlobalSiteEditorValues = {
  schemaAppBadgeCustom?: schema_flags_custom[]
}

//
// ** Tipos de valores em que o useGlobalContext() vai possuir **
//

export type GlobalUseContextProps = {
  getschemaAppBadgeCustom?: schema_flags_custom
  getCollectionMapped: (refinedDataOnProductContext: RefinedDataOnProductContext) => schema_root_custom_app_badge_custom

}
