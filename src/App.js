import MainNav from "./components/MainNav/MainNav";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <I18nextProvider i18n={i18n}>
    <MainNav changeLanguage={changeLanguage}/>
    </I18nextProvider>
  );
}

export default App;
