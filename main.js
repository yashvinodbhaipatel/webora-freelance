                                                                           
const projects            = [
{ title: 'Forma — everyday, elevated', description: 'A self-initiated website concept for a fictional homeware brand. An exploration of quiet typography, tactile colour, and a considered shopping experience.', direction: 'An editorial layout, warm neutrals, and sculptural product presentation. A starting point for a bespoke brand website, not a live store or completed client project.' },
{ title: 'Day Off — made for the feed', description: 'A self-initiated campaign concept for a fictional botanical drink. Designed to explore a bold, recognisable visual world for social content.', direction: 'Citrus colour, oversized type, and playful product compositions that translate across campaign assets. This is a visual concept, not a claim of campaign performance.' },
{ title: 'New perspectives', description: 'A self-initiated spatial illustration study, exploring how a place can become an engaging, easy-to-read brand asset.', direction: 'An isometric neighbourhood, a distinctive destination marker, and a restrained palette. The illustration is conceptual and does not represent an actual location or survey.' }
];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.documentElement.classList.add('js');
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }}), {threshold:0.08});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
const menu = document.querySelector                   ('.menu') ;
const navigation = document.querySelector             ('#navigation') ;
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu +';}
menu.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close −':'Menu +';});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
const projectDialog=document.querySelector                   ('#project-dialog') ;
const briefDialog=document.querySelector                   ('#brief-dialog') ;
function openDialog(dialog                  ){dialog.showModal();document.body.style.overflow='hidden';}
document.querySelectorAll                   ('[data-project]').forEach(button=>button.addEventListener('click',()=>{const project=projects[Number(button.dataset.project)];document.querySelector('#project-title') .textContent=project.title;document.querySelector('#project-description') .textContent=project.description;document.querySelector('#project-direction') .textContent=project.direction;openDialog(projectDialog);}));
document.querySelectorAll                   ('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close') .addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.style.overflow='';});dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();});});
document.querySelector('#project-enquire') .addEventListener('click',()=>projectDialog.close());
document.querySelector('#brief-open') .addEventListener('click',()=>openDialog(briefDialog));
document.querySelectorAll                   ('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector                   ('#service-select') .value=link.dataset.service ;}));
document.querySelector('#year') .textContent=String(new Date().getFullYear());
document.querySelector                 ('#brief-form') .addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget                   ;if(!form.reportValidity())return;const data=new FormData(form);const message=`Hi Webora! I'm ${data.get('name')}.\n\nService: ${data.get('service')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;window.open(`https://wa.me/918469030829?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');document.querySelector('#form-status') .textContent='Your WhatsApp draft is ready. Review it and press Send in WhatsApp to contact Webora.';});
const showcase=document.querySelector             ('.showcase') ;
const orb=document.querySelector             ('.orb') ;
let ticking=false;
function paintScroll(){const rect=showcase.getBoundingClientRect();if(!reducedMotion.matches&&rect.bottom>0&&rect.top<innerHeight){const progress=Math.max(-1,Math.min(1,(innerHeight/2-rect.top)/innerHeight));orb.style.transform=`translateY(${progress*45}px) rotate(${-20+progress*20}deg)`;}ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(paintScroll);ticking=true;}},{passive:true});
paintScroll();
