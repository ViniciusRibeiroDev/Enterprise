import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './Style/globalStyle';
import { ResetStyle } from './Style/reset';
import { RoutesPages } from './Routers';

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <RouterProvider router={RoutesPages} />
    </>
  );
}

export default App;
