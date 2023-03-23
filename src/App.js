import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <RegisterForm></RegisterForm>
      </div>

      <div className='language'>
        <h2>
          <FormattedMessage id='app:language_selector' />
        </h2>
        <select onChange={(event) => setMessages(event.target.value)}>
          <option value='Spanish'>
            <FormattedMessage id='app:spanish' />
          </option>
          <option value='English'>
            <FormattedMessage id='app:english' />
          </option>
          <option value='French'>
            <FormattedMessage id='app:french' />
          </option>
        </select>

        <button onClick={() => setMessages(Spanish)}>
          <FormattedMessage id="app:spanish" />
        </button>
        <button onClick={() => setMessages(English)}>
          <FormattedMessage id="app:english" />
        </button>
        <button onClick={() => setMessages(French)}>
          <FormattedMessage id="app:french" />
        </button>
      </div>
    </IntlProvider>
  );
}

export default App;
