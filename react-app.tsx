import { useEffect, useRef, useState } from 'react';
import { Header } from './react-header';
import { Footer } from './react-footer';
import { BriefDialog } from './react-dialog';
import { SiteContext } from './react-context';
import { useMotion } from './react-motion';
import { pages, type PageName } from './react-pages';
export function App({page}:{page:PageName}) {
 const [paused,setPaused]=useState(false);const dialogRef=useRef<HTMLDialogElement>(null);
 useEffect(()=>{try{setPaused(localStorage.getItem('webora-motion')==='paused');}catch{}},[]);
 useMotion(paused);
 const Page=pages[page];
 function toggleMotion(){setPaused(value=>{const next=!value;try{localStorage.setItem('webora-motion',next?'paused':'playing');}catch{}return next;});}
 function openBrief(){dialogRef.current?.showModal();document.body.style.overflow='hidden';}
 return <SiteContext.Provider value={{paused,toggleMotion,openBrief}}><div className="page-curtain" aria-hidden="true"><span>webora<span>✳</span></span><small>IDEAS INTO IMPACT.</small></div><div className="scroll-progress" aria-hidden="true"></div><a className="skip" href="#main">Skip to content</a><Header page={page}/><Page/><Footer/><BriefDialog dialogRef={dialogRef}/></SiteContext.Provider>;
}
