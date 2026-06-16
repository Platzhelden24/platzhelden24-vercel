/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as StandorteRouteImport } from './routes/standorte'
import { Route as ImpressumRouteImport } from './routes/impressum'
import { Route as FaqRouteImport } from './routes/faq'
import { Route as DatenschutzRouteImport } from './routes/datenschutz'
import { Route as CookiesRouteImport } from './routes/cookies'
import { Route as AgbRouteImport } from './routes/agb'
import { Route as IndexRouteImport } from './routes/index'
import { Route as StandorteIndexRouteImport } from './routes/standorte/index'
import { Route as StandorteCityRouteImport } from './routes/standorte/$city'

const StandorteRoute = StandorteRouteImport.update({
  id: '/standorte',
  path: '/standorte',
  getParentRoute: () => rootRouteImport,
} as any)

const ImpressumRoute = ImpressumRouteImport.update({
  id: '/impressum',
  path: '/impressum',
  getParentRoute: () => rootRouteImport,
} as any)

const FaqRoute = FaqRouteImport.update({
  id: '/faq',
  path: '/faq',
  getParentRoute: () => rootRouteImport,
} as any)

const DatenschutzRoute = DatenschutzRouteImport.update({
  id: '/datenschutz',
  path: '/datenschutz',
  getParentRoute: () => rootRouteImport,
} as any)

const CookiesRoute = CookiesRouteImport.update({
  id: '/cookies',
  path: '/cookies',
  getParentRoute: () => rootRouteImport,
} as any)

const AgbRoute = AgbRouteImport.update({
  id: '/agb',
  path: '/agb',
  getParentRoute: () => rootRouteImport,
} as any)

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const StandorteIndexRoute = StandorteIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => StandorteRoute,
} as any)

const StandorteCityRoute = StandorteCityRouteImport.update({
  id: '/$city',
  path: '/$city',
  getParentRoute: () => StandorteRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/agb': typeof AgbRoute
  '/cookies': typeof CookiesRoute
  '/datenschutz': typeof DatenschutzRoute
  '/faq': typeof FaqRoute
  '/impressum': typeof ImpressumRoute
  '/standorte': typeof StandorteIndexRoute
  '/standorte/$city': typeof StandorteCityRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/agb': typeof AgbRoute
  '/cookies': typeof CookiesRoute
  '/datenschutz': typeof DatenschutzRoute
  '/faq': typeof FaqRoute
  '/impressum': typeof ImpressumRoute
  '/standorte': typeof StandorteIndexRoute
  '/standorte/$city': typeof StandorteCityRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/agb': typeof AgbRoute
  '/cookies': typeof CookiesRoute
  '/datenschutz': typeof DatenschutzRoute
  '/faq': typeof FaqRoute
  '/impressum': typeof ImpressumRoute
  '/standorte': typeof StandorteRoute
  '/standorte/': typeof StandorteIndexRoute
  '/standorte/$city': typeof StandorteCityRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/agb' | '/cookies' | '/datenschutz' | '/faq' | '/impressum' | '/standorte' | '/standorte/$city'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/agb' | '/cookies' | '/datenschutz' | '/faq' | '/impressum' | '/standorte' | '/standorte/$city'
  id:
    | '__root__'
    | '/'
    | '/agb'
    | '/cookies'
    | '/datenschutz'
    | '/faq'
    | '/impressum'
    | '/standorte'
    | '/standorte/'
    | '/standorte/$city'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AgbRoute: typeof AgbRoute
  CookiesRoute: typeof CookiesRoute
  DatenschutzRoute: typeof DatenschutzRoute
  FaqRoute: typeof FaqRoute
  ImpressumRoute: typeof ImpressumRoute
  StandorteRoute: typeof StandorteRoute
}

const StandorteRouteChildren = {
  StandorteIndexRoute: StandorteIndexRoute,
  StandorteCityRoute: StandorteCityRoute,
}

const StandorteRouteWithChildren = StandorteRoute._addFileChildren(StandorteRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AgbRoute: AgbRoute,
  CookiesRoute: CookiesRoute,
  DatenschutzRoute: DatenschutzRoute,
  FaqRoute: FaqRoute,
  ImpressumRoute: ImpressumRoute,
  StandorteRoute: StandorteRouteWithChildren,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
