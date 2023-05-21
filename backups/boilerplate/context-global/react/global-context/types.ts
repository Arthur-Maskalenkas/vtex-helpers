import { GlobalContextTypeAvantiFooter } from "./contexts/global-avanti-footer-context/global-context-type-avanti-footer"
import { GlobalAvantiMenuContext } from "./contexts/global-avanti-menu-context"
import { GlobalPixDiscounContext } from "./contexts/global-pix-discount-context"

export interface GlobalSiteEditorProps {
  _global_pix_discount: [GlobalPixDiscounContext] | null,
  _global_avanti_menu: [GlobalAvantiMenuContext] | null,
  _global_avanti_footer: [GlobalContextTypeAvantiFooter] | null,
  children: any
}

export interface GlobalProviderProps {
  _global_pix_discount: GlobalPixDiscounContext | null,
  _global_avanti_menu: GlobalAvantiMenuContext | null,
  _global_avanti_footer: GlobalContextTypeAvantiFooter | null
}
