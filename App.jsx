import './global.css';
import AppProvider from './src/providers/AppProvider';
import Routes from './src/routes';

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
