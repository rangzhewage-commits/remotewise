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
resumeio:{n:"Resume builder (choose one)",d:"Online CV builders with templates.",pros:"Fast formatting",cons:"Compare pricing and export limits first",c:"cv"},
linkedin:{n:"LinkedIn",d:"Professional network and job search.",pros:"Recruiters actively search it",cons:"Premium features are paid",c:"career"}};
const CATS={
"remote-jobs":{t:"Remote Jobs",d:"Guides to finding legitimate remote work, for beginners and international applicants.",topics:["Remote jobs for beginners","International remote job platforms","Remote jobs without experience","Work-from-home opportunities","Roles open to international applicants"]},
"career-development":{t:"Career Development",d:"Plan your next move and build skills employers value.",topics:["Career planning","Professional development","Interview preparation","LinkedIn optimisation","Skills development","Career transitions"]},
"resume-cv":{t:"Resume & CV",d:"Write clear, targeted application documents.",topics:["CV writing guides","Resume templates","Cover letter guides","Resume-building tools","Interview preparation resources"]},
"freelancing":{t:"Freelancing",d:"Start, price and manage freelance work.",topics:["How to start freelancing","Freelancing platforms","Finding international clients","Freelance skills","Pricing and client management"]},
"ai-tools":{t:"AI & Productivity Tools",d:"Tools to apply, write and organise your work more efficiently.",topics:["AI tools for job seekers","Productivity software","Project management tools","Writing tools","Business automation tools"]},
"online-learning":{t:"Online Learning",d:"Courses and platforms to build digital skills.",topics:["Online professional courses","Digital skills","Career certifications","Learning platforms","Professional development resources"]}};
/* ===== ARTICLES: add an object to publish a new article. body = [[heading, paragraph | [bullets]], ...] ===== */
const FC="Fact-check before publishing: platform features, fees and country eligibility change often. Verify on each official site.";
const ARTS=[
{s:"international-remote-job-websites",t:"15 Websites to Find International Remote Jobs",c:"remote-jobs",d:"A starting list of remote job boards and marketplaces, with advice on checking eligibility.",tools:["linkedin","upwork"],body:[
["How to use this list","These are well-known places to look, not a promise of vacancies. Listings change daily, so always read the location rules in each posting."],
["The 15 websites",["We Work Remotely","Remote OK","Remotive","Working Nomads","Himalayas","Jobspresso","Remote.co","FlexJobs (check current fees)","JustRemote","Wellfound (startups)","LinkedIn Jobs (use the remote filter)","Indeed (filter by remote)","Upwork (freelance)","Arc.dev (developers)","Toptal (screened freelancers)"]],
["Check geographical eligibility","Many posts say US-only, EU-only or specific time zones. Look for phrases like work anywhere, worldwide or contractor. Employers may also require payment methods or tax paperwork that depend on your country."],
["Avoid scams","Legitimate employers do not ask applicants to pay fees, buy equipment upfront or move chats to messaging apps before any interview. Verify the company website and recruiter identity."]]},
{s:"best-remote-jobs-for-beginners",t:"Best Remote Jobs for Beginners",c:"remote-jobs",d:"Entry-level remote roles and the skills that help you apply.",tools:["linkedin"],body:[
["Roles worth exploring",["Customer support","Virtual assistance","Content moderation or data entry (check pay and legitimacy)","Social media coordination","Transcription and captioning","Online tutoring","Junior content writing"]],
["Match roles to what you have","List skills you already use: written English, spreadsheets, scheduling, a second language. Pick roles where two or three of those apply."],
["Be realistic","Entry-level remote roles are competitive and pay varies widely by employer and country. We do not quote salary figures here; research current ranges before applying."]]},
{s:"professional-cv-for-remote-jobs",t:"How to Create a Professional CV for Remote Jobs",c:"resume-cv",d:"Structure a clear CV that shows remote-readiness.",tools:["resumeio","canva"],body:[
["Keep the format simple","Use one column, standard headings and a plain font. Many employers use applicant tracking systems that can misread complex layouts."],
["What to include",["Name, email, city and country, LinkedIn URL","A two-line summary tied to the job","Achievements with measurable results you can verify","Tools you use: Slack, Zoom, Google Workspace, project boards","Time zone and availability"]],
["Show remote skills","Give examples of written communication, self-management and working across time zones. Link to a portfolio if relevant."],
["Tailor every application","Mirror the key requirements in the posting using your own honest experience."]]},
{s:"best-ai-tools-for-job-applications",t:"Best AI Tools for Job Applications",c:"ai-tools",d:"How to use AI assistants for drafting and practice without losing your voice.",tools:["grammarly","notion"],body:[
["Where AI helps",["Brainstorming achievements from your work history","Rewriting a cover letter draft for clarity","Generating practice interview questions","Checking grammar and tone"]],
["Where to be careful","Never submit AI text unchecked. Do not let it invent experience, dates or skills. Remove generic phrases and add real detail."],
["Privacy","Avoid pasting sensitive personal data into any tool before reading its data policy."],
["Choosing a tool","Compare free limits, privacy terms and export options. Verify current features and pricing before relying on any tool."]]},
{s:"prepare-for-remote-job-interview",t:"How to Prepare for a Remote Job Interview",c:"career-development",d:"Technical setup, preparation and questions specific to remote roles.",tools:[],body:[
["Test your setup","Check camera, microphone, lighting and internet a day early. Have a backup such as phone hotspot and a second way to reach the interviewer."],
["Prepare answers",["Why remote work suits you","How you manage your time","How you communicate when blocked","A project you finished independently","Your time zone and overlap hours"]],
["Ask good questions","Ask about team communication, expected response times, tools and how performance is measured."],
["Afterwards","Send a short thank-you message and note any follow-up dates."]]},
{s:"best-free-project-management-tools",t:"Best Free Project Management Tools",c:"ai-tools",d:"Compare popular free plans for organising remote work.",tools:["trello","asana","clickup","notion"],compare:true,body:[
["Choose by need","Solo freelancers usually need simple boards and deadlines. Teams need assignments, comments and reporting."],
["Compare before committing","Free plans change. Check user limits, storage and feature locks on each official pricing page before you recommend or adopt one."]]},
{s:"improve-your-linkedin-profile",t:"How to Improve Your LinkedIn Profile",c:"career-development",d:"Practical profile edits that help recruiters understand you.",tools:["linkedin"],body:[
["Headline and photo","Write what you do and who you help, not just a job title. Use a clear, friendly photo."],
["About section","Open with your focus, add two or three achievements and state the work you want."],
["Experience","Describe results, not duties. Add skills that match target roles."],
["Settings","Turn on the open-to-work setting that suits you and set location preferences, including remote."]]},
{s:"best-online-courses-for-remote-workers",t:"Best Online Courses for Remote Workers",c:"online-learning",d:"Skill areas and platforms to consider, with advice on judging quality.",tools:["coursera","udemy"],body:[
["Skills in demand for remote work",["Written communication","Spreadsheet and data basics","Project management","Digital marketing fundamentals","Customer support practice","Basic web or design skills"]],
["Judge a course","Read the syllabus, check the instructor background and look for projects you can show in a portfolio. Certificates help less than demonstrable work."],
["Cost","Many platforms offer free audit options or discounts. Verify current pricing and certificate terms."]]},
{s:"start-freelancing-without-experience",t:"How to Start Freelancing Without Experience",c:"freelancing",d:"A first-steps plan for new freelancers.",tools:["upwork","fiverr"],body:[
["Pick one service","Choose a narrow service you can deliver, such as proofreading, design of social posts or admin support."],
["Build proof","Create two or three sample projects or volunteer for a small organisation. Put them in a simple portfolio."],
["Find first clients","Tell your network, use freelance platforms where available in your country and send short personalised pitches."],
["Pricing and contracts","Set rates after researching current market ranges, agree scope in writing and use clear payment terms."]]},
{s:"build-a-remote-career-from-africa",t:"How to Build a Remote Career From Africa",c:"remote-jobs",d:"Practical considerations for African job seekers going remote.",tools:["linkedin","upwork"],body:[
["Know the practical issues",["Reliable power and internet backup","Payment options and fees for receiving international income","Tax and legal obligations in your country","Time-zone overlap with employers"]],
["Target the right opportunities","Look for employers that hire in Africa or worldwide, and for contractor roles. Eligibility depends on the employer and local law, so confirm in writing."],
["Build credibility","Show results through a portfolio, references and a complete LinkedIn profile."],
["Verify before you pay","Never pay to get a job. Check any payment platform for availability and fees in your country."]]}];

/* WEBSITE ADDRESS: the only place to change it. No trailing slash. Use your real pages.dev address (or custom domain later). */
SITE.domain='https://remotewise.pages.dev';
SITE.googleVerification=''; /* paste the Google Search Console HTML-tag code here (content value only) */
SITE.formUrl='';
module.exports={SITE,PH,AFF,TOOLS,CATS,ARTS,FC};
