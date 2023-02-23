import { StoreProvider } from './src/context/store-context';
import Router from './src/navigation/Router';

export default function App() {

  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}