export class SidenavItem {
  name: string;
  icon?: string;
  route?: string;
  routeOrFunction?: any;
  parent?: SidenavItem;
  subItems?: SidenavItem[];
  position?: number;
  pathMatchExact?: boolean;
  badge?: string;
  badgeColor?: string;
  type?: 'item' | 'subheading';
  customClass?: string;
}
