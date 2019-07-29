export interface IApplicationState {
  user: IUserState;
  document: IDocumentState;
  router: any;
}

export interface IDocumentState {
  isLoading: boolean;
}

export interface IUserState {
  email: string;
}

export interface INavigation {
  name: string;
  url: string;
  icon: string;
}

export interface IRoute {
  path: string;
  name: string;
  component: any;
  exact?: boolean;
}

declare global {
  type DispatchType = any;
}
