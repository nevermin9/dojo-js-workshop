import renderMenuNavItem from "@/components/functional/render-menu-nav-item";
import renderIcon from "@/components/functional/render-icon"
import { Component, VNode } from "vue";

export default class MenuItem {
    public label: () => VNode;
    public icon: () => VNode;
    public key: string;

    constructor(routeName: string, icon: Component) {
        this.label = renderMenuNavItem({ name: routeName }, routeName);
        this.icon = renderIcon(icon);
        this.key = routeName;
    }

    static createMenuItems(routesNames: { [key: string ]: string }, icon: Component): MenuItem[] {
        const menuItemsList = [];

        for (const name of Object.values(routesNames)) {
            menuItemsList.push(new MenuItem(name, icon))
        }

        return menuItemsList;
    }
}
