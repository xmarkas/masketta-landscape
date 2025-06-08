import { StrictMode } from 'react';
import { Provider } from 'tinybase/ui-react';
import { Home } from './Components/Home';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Windows } from './Components/Windows';
import { PrivacyPolicy } from './Components/PrivacyPolicy';


export const App = () => {
  

  return (
    <StrictMode>
      <Provider>
       
        <Router>
          
          <Routes>
            <Route index={true} path="/" element={<Home />} />
            <Route
                path="/windows"
                element={[
                  <Windows />
                ]}
              />
               <Route
                path="/privacy"
                element={[
                  <PrivacyPolicy />
                ]}
              />
          </Routes>
        </Router>
        
      </Provider>
    </StrictMode>
  );
};
