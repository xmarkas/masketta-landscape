import { StrictMode } from 'react';
import { createStore } from 'tinybase';
import { Provider, useCreateStore } from 'tinybase/ui-react';
import { Inspector } from 'tinybase/ui-react-inspector';
import { Home } from './Components/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const App = () => {
  

  return (
    <StrictMode>
      <Provider>
        <>
        <Home />
        </>
      </Provider>
    </StrictMode>
  );
};
