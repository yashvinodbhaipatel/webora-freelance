import { hydrateRoot } from 'react-dom/client';
import { App } from './react-app';
import { pages, type PageName } from './react-pages';
const root=document.getElementById('webora-root');
const page=root?.dataset.page as PageName;
if(root&&page in pages)hydrateRoot(root,<App page={page}/>);
