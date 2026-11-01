/* ===== CENTRAL CONFIG: edit here. Replace placeholder with your approved affiliate URL. ===== */
const SITE={name:"RemoteWise",editor:"RemoteWise Editorial Team",updated:"2026-11-01",newsletterUrl:""};
const PH="[INSERT APPROVED AFFILIATE LINK]";
const AFF={trello:PH,asana:PH,clickup:PH,notion:PH,canva:PH,grammarly:PH,coursera:PH,udemy:PH,upwork:PH,fiverr:PH,resumeio:PH,linkedin:PH};
const TOOLS={
trello:{n:"Trello",d:"Card-based boards for simple task tracking.",pros:"Easy to learn; free tier",cons:"Limited for complex projects",c:"pm"},
asana:{n:"Asana",d:"Task and project management for small teams.",pros:"Multiple views; free tier",cons:"Can feel heavy for solo use",c:"pm"},
clickup:{n:"ClickUp",d:"Flexible workspace with tasks, docs and goals.",pros:"Highly customisable",cons:"Steeper learning curve",c:"pm"},
notion:{n:"Notion",d:"Notes, databases and planning in one workspace.",pros:"Flexible; good for personal systems",cons:"Setup takes time",c:"pm"},
canva:{n:"Canva",d:"Design tool with CV and portfolio templates.",pros:"Beginner friendly",cons:"Fancy layouts can fail ATS parsing",c:"cv"},
grammarly:{n:"Grammarly",d:"Writing assistant for grammar and tone.",pros:"Catches errors quickly",cons:"Suggestions need human judgement",c:"ai"},
coursera:{n:"Coursera",d:"University and industry courses and certificates.",pros:"Recognised providers",cons:"Certificates and financial aid vary",c:"learn"},
udemy:{n:"Udemy",d:"Marketplace of self-paced courses.",pros:"Wide range of topics",cons:"Quality varies by instructor",c:"learn"},
upwork:{n:"Upwork",d:"Freelance marketplace.",pros:"Large client base",cons:"Fees and competition; check country availability",c:"free"},
fiverr:{n:"Fiverr",d:"Marketplace for packaged freelance services.",pros:"Clear service listings",cons:"Fees; competitive categories",c:"free"},
resumeio:{n:"Resume.io",d:"Online CV builder with templates.",pros:"Fast formatting",cons:"Compare pricing and export limits first",c:"cv"},
linkedin:{n:"LinkedIn",d:"Professional network and job search.",pros:"Recruiters actively search it",cons:"Premium features are paid",c:"career"}};
const CATS={
"remote-jobs":{t:"Remote Jobs",d:"Guides to finding legitimate remote work, for beginners and international applicants.",topics:["Remote jobs for beginners","International remote job platforms","Remote jobs without experience","Work-from-home opportunities","Roles open to international applicants"]},
"career-development":{t:"Career Development",d:"Plan your next move and build skills employers value.",topics:["Career planning","Professional development","Interview preparation","LinkedIn optimisation","Skills development","Career transitions"]},
"resume-cv":{t:"Resume & CV",d:"Write clear, targeted application documents.",topics:["CV writing guides","Resume templates","Cover letter guides","Resume-building tools","Interview preparation resources"]},
"freelancing":{t:"Freelancing",d:"Start, price and manage freelance work.",topics:["How to start freelancing","Freelancing platforms","Finding international clients","Freelance skills","Pricing and client management"]},
"ai-tools":{t:"AI & Productivity Tools",d:"Tools to apply, write and organise your work more efficiently.",topics:["AI tools for job seekers","Productivity software","Project management tools","Writing tools","Business automation tools"]},
"online-learning":{t:"Online Learning",d:"Courses and platforms to build digital skills.",topics:["Online professional courses","Digital skills","Career certifications","Learning platforms","Professional development resources"]}};
/* ===== ARTICLES: add an object to publish a new article. body = [[heading, paragraph | [bullets]], ...] ===== */
const FC="Platform features, fees and country eligibility can change. Check the official provider website for the latest details before applying, signing up or paying.";
const ARTS=require('./articles.js');

/* WEBSITE ADDRESS: the only place to change it. No trailing slash. Use your real pages.dev address (or custom domain later). */
SITE.domain='https://remotewise.pages.dev';
SITE.googleVerification='LqVdAIyF8t7sNGT5_94PENAesyplJyrEofQESVq4-Q8'; /* paste the Google Search Console HTML-tag code here (content value only) */
SITE.formUrl='';
SITE.contactEmail='remotewise.contact@proton.me';
module.exports={SITE,PH,AFF,TOOLS,CATS,ARTS,FC};
