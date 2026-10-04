import { useEffect, useState } from 'react';
import type { PageName } from './react-pages';
const links=['Work','Services','Technology','About','Insights','Careers'];
export function Header({page}:{page:PageName}) {
 const [open,setOpen]=useState(false);
 useEffect(()=>{ const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close); },[]);
 const active=page.startsWith('service-')?'services':page.startsWith('work-')?'work':page.startsWith('insight-')?'insights':page;
 return <header><a className="wordmark" href="./index.html" aria-label="Webora home">webora<span>✳</span></a><nav id="navigation" aria-label="Main navigation" className={open?'open':undefined}>{links.map(label=><a key={label} href={`./${label.toLowerCase()}.html`} aria-current={active===label.toLowerCase()?'page':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="header-cta" href="./contact.html" aria-current={page==='contact'?'page':undefined}>Contact <span>↗</span></a><button className="menu" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(value=>!value)}>{open?'Close −':'Menu +'}</button></header>;
}
