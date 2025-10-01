import { CommonActions, DrawerActions, StackActions, createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();


const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};


const push = (name, params) =>
  navigationRef.current?.dispatch(StackActions.push(name, params));


const navigateAndReset = (name, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  );
};

const goBack = () => navigationRef.current?.goBack();

const toggleDrawer = () => navigationRef.current?.dispatch(DrawerActions.toggleDrawer());

export default {
  navigate,
  push,
  navigateAndReset,
  goBack,
  toggleDrawer,
};
