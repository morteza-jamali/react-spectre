import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { DefaultButton } from '../src/.';

const renderer = createRenderer();

const App = () => (
  <RendererProvider renderer={renderer}>
    <DefaultButton text="Default Button" />
  </RendererProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
