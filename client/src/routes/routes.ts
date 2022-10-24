import { AuthPage, MainPage } from "../pages";

export const BASENAME = window.location.pathname.slice(0, -1);
export const site = window.location.origin + BASENAME;
// export const site = "http://localhost:7000";

export enum Routes {
  LOGIN_ROUTE = `/`,
  MAIN_ROUTE = `/main`,
  HELP_ROUTE = `/help`,
  TEST_ROUTE = `/test`,
  ADMIN_ROUTE = `/admin`,
  EXPERT_ROUTE = `/expert`,
  FIELD_OTS_ROUTE = `/field-ots`,
  CUSTOMER_ROUTE = `/customer`,
  USER_ROUTE = `/profile`,
  SUBSIDIARY_ROUTE = `/subsidiary`,
}

export const authRoutes = [
  // {
  //   path: Routes.ADMIN_ROUTE,
  //   Component: AdminPage,
  // },
  // {
  //   path: Routes.EXPERT_ROUTE,
  //   Component: ExpertPage,
  // },
  // {
  //   path: Routes.CUSTOMER_ROUTE,
  //   Component: CustomerPage,
  // },
  // {
  //   path: Routes.USER_ROUTE + "/:id",
  //   Component: UserPage,
  // },
  // {
  //   path: Routes.SUBSIDIARY_ROUTE + "/:id",
  //   Component: SubsidiaryPage,
  // },
  {
    path: Routes.MAIN_ROUTE,
    Component: MainPage,
  },
];

export const publicRoutes = [
  // {
  //   path: Routes.MAIN_ROUTE,
  //   Component: MainPage,
  // },
  // {
  //   path: Routes.SUBSIDIARY_ROUTE + "/:id",
  //   Component: SubsidiaryPage,
  // },
  {
    path: Routes.LOGIN_ROUTE,
    Component: AuthPage,
  },

  // {
  //   path: Routes.HELP_ROUTE,
  //   Component: HelpPage,
  // },
];
