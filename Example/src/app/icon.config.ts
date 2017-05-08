import { Icon, IconServiceConfig } from 'ng2-ui';
/**
 * Created by honeybleed on 2017/5/8.
 */
const ICON_FAMILY = 'iconfont';
const ICON_MAP = [
  new Icon('user', '\ue636')
];
export let iconConfig: IconServiceConfig = new IconServiceConfig(ICON_FAMILY, ICON_MAP);
