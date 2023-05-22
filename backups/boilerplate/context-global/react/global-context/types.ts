import { GlobalContextTypeAvantiMenu } from "../UseGlobalContextAvantiMenu"
import { GlobalContextTypeAvantiFooter } from "./contexts/global-avanti-footer-context/global-context-type-avanti-footer"
import { GlobalContextTypePricePix } from "./contexts/global-price-pix-context/global-context-type-price-pix"

export interface GlobalSiteEditorProps {
  _global_price_pix: [GlobalContextTypePricePix] | null,
  _global_avanti_menu: [GlobalContextTypeAvantiMenu] | null,
  _global_avanti_footer: [GlobalContextTypeAvantiFooter] | null,
  children: any
}

export interface GlobalProviderProps {
  _global_price_pix: GlobalContextTypePricePix | null,
  _global_avanti_menu: GlobalContextTypeAvantiMenu | null,
  _global_avanti_footer: GlobalContextTypeAvantiFooter | null
}
