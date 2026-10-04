import { readFile, writeFile, readdir } from 'node:fs/promises';
import { demos } from './service-visuals.mjs';
export const siteUrl='https://yashvinodbhaipatel.github.io/webora-freelance/';
const url=slug=>siteUrl+(slug==='index'?'':slug+'.html');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const clean=s=>s.replace(/<[^>]+>/g,'').replaceAll('&amp;','&').replaceAll('&quot;','"');
const metadata={
 index:['Yash Patel | Freelance Web Developer & Designer | Webora','Yash Patel (Patel Yash) offers freelance web design, Shopify development, React Native apps, Meta and Google Ads, UGC, influencer marketing and 3D maps.'],
 about:['About Yash Patel (Patel Yash) | Webora Freelancer','Meet Yash Patel, also known as Patel Yash, the freelancer behind Webora. Explore his web development, Shopify, marketing, content and 3D map services.'],
 services:['Freelance Design, Development & Marketing Services | Webora','Explore freelance services by Yash Patel: websites, Shopify stores, React Native apps, Meta and Google Ads, UGC, influencer campaigns and 3D maps.'],
 work:['Web, Shopify, Ads & 3D Design Illustrations | Webora','See seven animated service demonstrations by Webora: websites, Shopify, mobile apps, Meta and Google ads, UGC, influencer marketing and 3D map design.'],
 technology:['React, Node.js, PHP & Shopify Developer | Yash Patel','Yash Patel develops websites and apps with HTML, CSS, JavaScript, TypeScript, React, React Native, Node.js, PHP, SQL, MongoDB and Shopify.'],
 contact:['Contact Yash Patel | Hire a Freelancer at Webora','Discuss your website, Shopify store, app, campaign or creative project with Yash Patel at Webora. WhatsApp +91 8469030829 to share your brief.'],
 insights:['Website & Brand Marketing Insights | Webora','Practical Webora notes on website briefs, useful content and connected brand experiences to help you plan a design, development or marketing project.'],
 careers:['Freelance Collaboration with Webora | Yash Patel','Introduce your design, development, content or 3D portfolio to Webora for potential project collaborations. No salaried vacancies are currently listed.'],
 privacy:['Privacy & Enquiry Information | Webora','How Webora handles project enquiries, WhatsApp links, Google Fonts and browser motion preferences. Contact Yash Patel with privacy questions.'],
 'service-web-design':['Freelance Web Designer & Developer | Yash Patel','Hire Yash Patel for responsive website design and full-stack development with React, TypeScript, Node.js, PHP, SQL and MongoDB. Discuss your project.'],
 'service-shopify':['Freelance Shopify Designer & Developer | Yash Patel','Shopify storefront design, theme customisation, product pages and store setup by Yash Patel at Webora. Plan a shopping journey around your brand.'],
 'service-mobile-apps':['Freelance React Native App Developer | Yash Patel','Mobile app UI design and React Native development by Yash Patel. Plan user journeys, API integration, testing and release preparation with Webora.'],
 'service-performance-marketing':['Meta & Google Ads Freelancer | Yash Patel at Webora','Plan Facebook, Instagram and Google Ads with Yash Patel. Webora offers campaign strategy, ad creative, audience planning, setup and performance reviews.'],
 'service-ugc-content':['UGC & Reels Content Creation Services | Webora','Product videos, reels and short-form content by Webora. Work with Yash Patel on creative concepts, hooks, scripts, product-led briefs and edited assets.'],
 'service-influencer-marketing':['Freelance Influencer Marketing Services | Webora','Connect your brand with relevant creators. Yash Patel at Webora offers creator research, campaign briefs, deliverable coordination and content review.'],
 'service-3d-map-design':['3D Map & Isometric Design Freelancer | Yash Patel','Custom 3D map illustrations, isometric landmarks and spatial graphics by Yash Patel at Webora for destinations, developments, events and presentations.']
};
const person={'@type':'Person','@id':siteUrl+'#yash-patel',name:'Yash Patel',alternateName:'Patel Yash',url:url('about'),jobTitle:'Freelance web designer, developer and digital marketer',description:'Yash Patel, also known as Patel Yash, is the independent freelancer behind Webora.',worksFor:{'@id':siteUrl+'#webora'},knowsAbout:['Web design','Web development','Shopify','React','React Native','TypeScript','JavaScript','HTML','CSS','Node.js','PHP','SQL','MongoDB','Meta Ads','Google Ads','UGC content creation','Influencer marketing','3D map design']};
const markets=['United States','Canada','India','United Kingdom','Australia'].map(name=>({'@type':'Country',name}));
const org={'@type':'Organization','@id':siteUrl+'#webora',name:'Webora',url:siteUrl,areaServed:markets,description:'The independent freelance practice of Yash Patel, connecting design, development, marketing, content and 3D maps.',founder:{'@id':person['@id']},telephone:'+918469030829',sameAs:['https://www.instagram.com/webora.co.in_/'],contactPoint:{'@type':'ContactPoint',contactType:'project enquiries',telephone:'+918469030829',url:'https://wa.me/918469030829'}};
const site={'@type':'WebSite','@id':siteUrl+'#website',url:siteUrl,name:'Webora',publisher:{'@id':org['@id']},inLanguage:'en'};
const files=(await readdir('.')).filter(f=>f.endsWith('.html')).sort();
for(const file of files){
 const slug=file.slice(0,-5); let html=await readFile(file,'utf8');
 const reactRendered=html.includes('id="webora-root"');
 html=html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/g,'');
 if(!reactRendered)html=html.replace(/<!-- breadcrumbs:start -->[\s\S]*?<!-- breadcrumbs:end -->/g,'');
 const originalTitle=clean(html.match(/<title>(.*?)<\/title>/s)[1]);
 const originalDescription=clean(html.match(/<meta name="description" content="(.*?)">/s)[1]);
 const [title,description]=metadata[slug]||[originalTitle,originalDescription];
 html=html.replace(/<title>[\s\S]*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${escape(description)}">`);
 const canonical=url(slug);const demo=demos.find(d=>'service-'+d.slug===slug);
 const page={'@type':slug==='about'?'ProfilePage':slug==='contact'?'ContactPage':'WebPage','@id':canonical+'#webpage',url:canonical,name:title,description,inLanguage:'en',isPartOf:{'@id':site['@id']},about:{'@id':org['@id']}};
 const graph=[org,person,site,page];
 if(slug==='about')page.mainEntity={'@id':person['@id']};
 if(demo){const service={'@type':'Service','@id':canonical+'#service',url:canonical,name:demo.name,serviceType:demo.name,description:demo.detail,areaServed:markets,provider:{'@id':person['@id']}};graph.push(service);page.mainEntity={'@id':service['@id']};}
 if(slug==='services'){const catalog={'@type':'OfferCatalog','@id':canonical+'#catalog',name:'Webora freelance services',itemListElement:demos.map(d=>({'@type':'Offer',itemOffered:{'@type':'Service','@id':url('service-'+d.slug)+'#service',name:d.name,url:url('service-'+d.slug),provider:{'@id':person['@id']}}}))};graph.push(catalog);page.mainEntity={'@id':catalog['@id']};}
 if(slug.startsWith('insight-'))graph.push({'@type':'Article','@id':canonical+'#article',headline:clean(html.match(/<h1>(.*?)<\/h1>/s)[1]),description,mainEntityOfPage:{'@id':page['@id']},author:{'@id':org['@id']},publisher:{'@id':org['@id']},inLanguage:'en'});
 if(slug!=='index'){
  const parent=slug.startsWith('service-')?'services':slug.startsWith('work-')?'work':slug.startsWith('insight-')?'insights':null;
  const label=demo?.name||(reactRendered?clean(html.match(/<span aria-current="page">(.*?)<\/span>/s)?.[1]||originalTitle):clean(originalTitle).replace(/ — Webora$/,''));
  const crumbs=[{name:'Home',url:siteUrl},...(parent?[{name:parent.charAt(0).toUpperCase()+parent.slice(1),url:url(parent)}]:[]),{name:label,url:canonical}];
  graph.push({'@type':'BreadcrumbList','@id':canonical+'#breadcrumb',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:c.url}))});page.breadcrumb={'@id':canonical+'#breadcrumb'};
  if(!reactRendered)html=html.replace('<main id="main">','<main id="main"><!-- breadcrumbs:start --><nav class="seo-breadcrumb" aria-label="Breadcrumb">'+crumbs.map((c,i)=>i===crumbs.length-1?`<span aria-current="page">${escape(c.name)}</span>`:`<a href="${c.url}">${escape(c.name)}</a><span aria-hidden="true">/</span>`).join('')+'</nav><!-- breadcrumbs:end -->');
 }
 const tags=`<!-- seo:start --><link rel="canonical" href="${canonical}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="author" content="Yash Patel"><meta property="og:type" content="${slug.startsWith('insight-')?'article':'website'}"><meta property="og:site_name" content="Webora"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}"><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script><!-- seo:end -->`;
 await writeFile(file,html.replace('</head>',tags+'</head>'));
}
await writeFile('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+files.map(f=>`  <url><loc>${url(f.slice(0,-5))}</loc></url>`).join('\n')+'\n</urlset>\n');
// Project Pages cannot control /robots.txt at the github.io domain root.
// This file is informational at the project path; submit the sitemap in Search Console.
await writeFile('robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`);
console.log(`SEO metadata, structured data and sitemap generated for ${files.length} pages.`);
