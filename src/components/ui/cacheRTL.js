import createCache from "@emotion/cache/dist/emotion-cache.cjs";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})