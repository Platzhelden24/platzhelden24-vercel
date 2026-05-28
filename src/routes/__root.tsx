import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-7xl text-brand-navy">404</h1>
        <p className="mt-3 text-muted-foreground">Diese Seite existiert nicht.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-white">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold">Etwas ist schiefgelaufen</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-brand-green px-5 py-3 text-sm font-bold text-white"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Platzhelden24 – Entrümpelung in Kleve & am Niederrhein" },
      { name: "description", content: "Schnelle und zuverlässige Entrümpelung in Kleve. Besenreine Übergabe, faire Preise und schnelle Termine. Jetzt kostenlos anfragen." },
      { property: "og:title", content: "Platzhelden24 – Entrümpelung in Kleve & am Niederrhein" },
      { property: "og:description", content: "Schnelle und zuverlässige Entrümpelung in Kleve. Besenreine Übergabe, faire Preise und schnelle Termine. Jetzt kostenlos anfragen." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Platzhelden24 – Entrümpelung in Kleve & am Niederrhein" },
      { name: "twitter:description", content: "Schnelle und zuverlässige Entrümpelung in Kleve. Besenreine Übergabe, faire Preise und schnelle Termine. Jetzt kostenlos anfragen." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/DRRGNidQSDfbbeWG3rFvsxqL6FH3/social-images/social-1778334404411-ChatGPT_Image_9._Mai_2026,_15_46_38.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/DRRGNidQSDfbbeWG3rFvsxqL6FH3/social-images/social-1778334404411-ChatGPT_Image_9._Mai_2026,_15_46_38.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
