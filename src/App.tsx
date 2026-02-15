import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import {
  CHARACTER_INFO_PAGE,
  CHARACTERS_LIST_PAGE,
} from 'src/shared/constants';

import { CharacterInfoPage, CharactersListPage, NotFoundPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={CHARACTERS_LIST_PAGE} />} />
        <Route path={CHARACTERS_LIST_PAGE} element={<CharactersListPage />} />
        <Route path={CHARACTER_INFO_PAGE} element={<CharacterInfoPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
