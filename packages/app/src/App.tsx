import React from 'react';
import { Route } from 'react-router-dom';
import {
  apiDocsPlugin,
  ApiExplorerPage,
  // DefaultApiExplorerPageProps,
} from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
  // DefaultCatalogPageProps,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import {
  RouterProps,
  ScaffolderPage,
  scaffolderPlugin,
} from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import {
  TechRadarPage,
  TechRadarPageProps,
} from '@backstage-community/plugin-tech-radar';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
  // TechDocsReaderPageProps,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';

import {
  AlertDisplay,
  OAuthRequestDialog,
  SignInPage,
} from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import { TimeSaverPage, TimeSaverSamplesPage } from '@alithya-oss/plugin-time-saver';
import { HomepageCompositionRoot } from '@backstage/plugin-home';
import { homePage } from './components/home/HomePage';
import { catalogMessages, catalogReactMessages } from './translations';

const app = createApp({
  __experimentalTranslations: {
    availableLanguages: ['en', 'fr'],
    resources: [catalogMessages, catalogReactMessages],
  },
  apis,
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
      createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
  components: {
    SignInPage: props => <SignInPage {...props} auto providers={['guest']} />,
  },
});

// const catalogIndexPageRouterOptions: DefaultCatalogPageProps = {
//   // initiallySelectedFilter: //UserListFilterKind;
//   // columns: , // TableColumn<CatalogTableRow>[] | CatalogTableColumnsFunc;
//   // actions: , // TableProps<CatalogTableRow>['actions'];
//   // initialKind: , // string;
//   // tableOptions: , // TableProps<CatalogTableRow>['options'];
//   // emptyContent: , // ReactNode;
//   // ownerPickerMode: , // EntityOwnerPickerProps['mode'];
//   // pagination: , // boolean | {
//   //     limit: number;
//   // };
//   // filters: , // ReactNode;
//   // initiallySelectedNamespaces:  // string[];
// };

// const techDocsIndexPageRouterOptions: TechDocsReaderPageProps = {
//   // entityRef: , // CompoundEntityRef;
//   // children: //TechDocsReaderPageRenderFunction | ReactNode;
// };

// const TechDocsReaderPageRouterOptions: TechDocsReaderPageProps = {
//   // entityRef: , // CompoundEntityRef;
//   // children: //TechDocsReaderPageRenderFunction | ReactNode;
// };

const scaffolderPageRouteOptions: RouterProps = {
  headerOptions: {
    title: 'Software Templates',
    subtitle: '',
    pageTitleOverride: 'Software Templates',
  },
};

// const apisRouteOptions: DefaultApiExplorerPageProps = {
//   initiallySelectedFilter: 'all',
//   // columns: ,
//   // actions: ,
//   ownerPickerMode: 'all',
// };

const TechRadarPageRouterOptions: TechRadarPageProps = {
  title: 'TechRadar Page',
  subtitle: '',
  pageTitle: 'TechRadar',
  // id: string,
  width: 0,
  height: 0,
  // svgProps: object,
  // searchText: string,
};

const routes = (
  <FlatRoutes>
    <Route path="/" element={<HomepageCompositionRoot />}>
      {homePage}
    </Route>
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route
      path="/create"
      element={<ScaffolderPage {...scaffolderPageRouteOptions} />}
    />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/tech-radar"
      element={
        <TechRadarPage
          {...TechRadarPageRouterOptions}
          width={1500}
          height={800}
        />
      }
    />
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
    <Route path="/time-saver" element={<TimeSaverPage />} />
    <Route path="/time-saver-samples" element={<TimeSaverSamplesPage />} />
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
