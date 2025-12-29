import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CharacterInfoPage, CharactersListPage } from './pages';
import {
  CHARACTER_INFO_PAGE,
  CHARACTERS_LIST_PAGE,
} from 'src/shared/constants/urls';

const browserRouter = createBrowserRouter([
  {
    path: CHARACTERS_LIST_PAGE,
    element: <CharactersListPage />,
  },
  {
    path: CHARACTER_INFO_PAGE,
    element: <CharacterInfoPage />,
  },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
