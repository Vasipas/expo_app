import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';

const getHeaderTitle = (route: Partial<Route<string, object | undefined>>) => {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Feed':
      return 'News feed';
    case 'Home':
      return 'App Home Page';
    case 'About':
      return 'Page About Us';
  }
}

export default getHeaderTitle;