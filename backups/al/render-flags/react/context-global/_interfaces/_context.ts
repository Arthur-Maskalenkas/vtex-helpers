import {schema_site_editor_default_flags_custom} from "./_schemas-site-editor-default";
import {schema_site_editor_remapped_root_custom_app_badge_custom} from "./_schemas-site-editor-remapped";
import {ProductContextState} from "vtex.product-context/react/ProductTypes";

//
// ** Tipos de valores em que o site-editor vai possuir na raiz do objeto (root). **
//
// ** Todos os tipos desses objetos presentes nas raizes devem ser colocados em ./_schemas **
//

export type GlobalSiteEditorValues = {
	schemaAppFlagCustom?: schema_site_editor_default_flags_custom[]
}

//
// ** Tipos de valores em que o useGlobalContext() vai possuir **
//

export type GlobalUseContextProps = {
	getCollectionFlagRemapped: (refinedDataOnProductContext: Partial<ProductContextState> | undefined) => schema_site_editor_remapped_root_custom_app_badge_custom | null
}