import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zeros — Software factory en Buenos Aires",
    short_name: "Zeros",
    description:
      "Software factory para productos web, mobile, IA y automatización.",
    start_url: "/es",
    display: "standalone",
    background_color: "#0a0b0d",
    theme_color: "#0a0b0d",
    lang: "es-AR",
    icons: [
      {
        src: `${SITE_URL}/icon-dark-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: `${SITE_URL}/apple-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
