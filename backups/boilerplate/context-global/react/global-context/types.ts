import { GlobalAvantiMenuContext, GlobalContextTypeAvantiFooter, GlobalPixDiscounContext } from "./contexts";

export interface GlobalSiteEditorProps {
  _global_pix_discount: [GlobalPixDiscounContext] | [],
  _global_avanti_menu: [GlobalAvantiMenuContext] | [],
  _global_avanti_footer: [GlobalContextTypeAvantiFooter] | [],
  children: any
}

export interface GlobalProviderProps {
  _global_pix_discount: GlobalPixDiscounContext | null,
  _global_avanti_menu: GlobalAvantiMenuContext | null,
  _global_avanti_footer: GlobalContextTypeAvantiFooter | null
}
