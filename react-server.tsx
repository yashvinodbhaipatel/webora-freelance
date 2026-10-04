import { renderToString } from 'react-dom/server';
import { App } from './react-app';
import type { PageName } from './react-pages';
export const renderPage=(page:PageName)=>renderToString(<App page={page}/>);
