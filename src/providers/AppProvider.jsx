import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const AppProvider = ({children}) => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {children}
    </ApplicationProvider>
  );
};

export default AppProvider;
