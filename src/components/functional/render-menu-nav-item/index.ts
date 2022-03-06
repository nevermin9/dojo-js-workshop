import { h } from "vue";
import { RouteLocationRaw, RouterLink } from "vue-router"

export default function renderMenuNavItem(routeLocation: RouteLocationRaw, label: string) {
    return function() {
        return h(
            RouterLink,
            {
                to: routeLocation,
            },
            {
                default: () => label,
            }
        )
    }
}
