
var RES = [
  {t:"Computational and Inferential Thinking (Data 8)", l:2, by:"Ani Adhikari, John DeNero & David Wagner, UC Berkeley", d:"UC Berkeley's Data 8 textbook, free online: data science in Python, from tables and visualization to inference and prediction. No prerequisites.", u:"https://inferentialthinking.com/", c:["Computer Science","Mathematics","Books"]},
  // Mathematics
  {t:"Book of Proof", l:2, by:"Richard Hammack", d:"Free textbook on writing proofs: induction, contradiction, counting, relations.", u:"https://richardhammack.github.io/BookOfProof/Main.pdf", c:["Mathematics","Books"]},
  {t:"Mathematics for Computer Science", l:3, by:"Eric Lehman, Tom Leighton & Albert Meyer, MIT", d:"MIT's free textbook: discrete maths, proofs and probability, built for CS.", u:"https://people.csail.mit.edu/meyer/mcs.pdf", c:["Mathematics","Computer Science","Books"]},
  {t:"Summation", l:4, by:"Evan Chen", d:"Olympiad-style handout on evaluating sums and series.", u:"https://web.evanchen.cc/handouts/Summation/Summation.pdf", c:["Mathematics"]},
  {t:"Mathua", l:1, by:"Mathua", d:"Prerequisite-sequenced maths lessons with mastery checks and spaced repetition.", u:"https://mathua.com/", c:["Mathematics"]},
  {t:"Introduction to Probability", l:3, by:"Hossein Pishro-Nik", d:"Free probability textbook with examples and videos.", u:"https://www.probabilitycourse.com/", c:["Mathematics","Books"]},
  // Computer Science
  {t:"CS50P: Introduction to Programming with Python", l:1, by:"David Malan, Harvard", d:"The first coding course. Free certificate included.", u:"https://cs50.harvard.edu/python", c:["Computer Science"]},
  {t:"CS50x: Introduction to Computer Science", l:2, by:"David Malan, Harvard", d:"Harvard's flagship intro to CS; the step after CS50P.", u:"https://cs50.harvard.edu/x", c:["Computer Science"]},
  {t:"The Missing Semester of Your CS Education", l:3, by:"MIT CSAIL", d:"The practical tools courses skip: shell, editors, version control, debugging, profiling.", u:"https://missing.csail.mit.edu/", c:["Computer Science"]},
  // AI & ML
  {t:"Neural Networks (visual series)", l:2, by:"3Blue1Brown", d:"The picture of what a neural network is doing, via handwritten digits, before any maths.", u:"https://www.3blue1brown.com/lessons/neural-networks/", c:["AI & ML","Mathematics"]},
  {t:"The Little Book of Deep Learning", l:4, by:"François Fleuret", d:"A short, free introduction to the maths behind deep learning.", u:"https://ant.fleuret.org/francois/lbdl.html", c:["AI & ML","Mathematics","Books"]},
  {t:"Understanding Deep Learning", l:5, by:"Simon Prince", d:"Free deep-learning textbook. Keep as the reference, not a course to finish.", u:"https://udlbook.github.io/udlbook/", c:["AI & ML","Books"]},
  {t:"AI Engineering from Scratch", l:4, by:"AI Engineering from Scratch", d:"Free, open-source AI-engineering curriculum. Assumes you can already code a little.", u:"https://aiengineeringfromscratch.com", c:["AI & ML","Computer Science"]},
  {t:"Introduction to AI Safety, Ethics, and Society", l:3, by:"Dan Hendrycks", d:"Free textbook on AI safety: technical and societal sides.", u:"https://www.aisafetybook.com/textbook/ai-fundamentals", c:["AI & ML","Books"]},
  {t:"Towards Understanding Score-Seeking", l:3, by:"Redwood Research", d:"What models are chasing when they cheat: experiments separating score-seeking from reward-seeking.", u:"https://blog.redwoodresearch.org/p/towards-understanding-score-seeking", c:["AI & ML","Essays"]},
  {t:"OpenAI Agents Keep Disabling Monitoring", l:3, by:"Redwood Research", d:"Two disclosed incidents of agents turning off their own oversight, and what they mean.", u:"https://blog.redwoodresearch.org/p/openai-agents-keep-disabling-monitoring", c:["AI & ML","Essays"]},
  {t:"How Much Does Claude's Constitution Actually Matter?", l:2, by:"Asterisk", d:"On Anthropic's bet of training a model on stories of good character, and its measured limits.", u:"https://asteriskmag.substack.com/p/how-much-does-claudes-constitution", c:["AI & ML","Essays"]},
  {t:"Simulated Control Evaluations", l:3, by:"Redwood Research", d:"How to test AI monitors without running real attacks.", u:"https://blog.redwoodresearch.org/p/simulated-control-evaluations", c:["AI & ML","Essays"]},
  // Economics
  {t:"The Economy 2.0 & Doing Economics (CORE Econ)", l:1, by:"CORE Econ", d:"Free modern economics textbooks taught with real policy data.", u:"https://www.core-econ.org/ebooks/", c:["Economics","Books"]},
  {t:"Econ 159: Game Theory", l:2, by:"Ben Polak, Yale Open Courses", d:"A full filmed Yale course on game theory.", u:"https://oyc.yale.edu/economics/econ-159", c:["Economics","Mathematics"]},
  {t:"Prediction Markets (2004)", l:3, by:"Justin Wolfers & Eric Zitzewitz", d:"The classic paper on how markets turn dispersed information into forecasts.", u:"https://www.aeaweb.org/articles?id=10.1257/0895330041371321", c:["Economics"]},
  {t:"How Central Bankers Spend Their Time", l:3, by:"NBER Working Paper 35913", d:"20,000+ calendar entries from Bernanke, Yellen and Powell: the work behind rate decisions.", u:"https://www.nber.org/papers/w35913", c:["Economics"]},
  {t:"Saving for the Machines", l:3, by:"Jesús Fernández-Villaverde", d:"Who funds the capital that AI needs.", u:"https://www.sas.upenn.edu/~jesusfv/Saving_Machines.pdf", c:["Economics","AI & ML"]},
  {t:"Networks, Crowds, and Markets", l:3, by:"David Easley & Jon Kleinberg", d:"Free textbook on networks, games and markets. Start with Chapter 22.", u:"https://www.cs.cornell.edu/home/kleinber/networks-book/networks-book.pdf", c:["Economics","Computer Science","Mathematics","Books"]},
  {t:"QuantEcon", l:4, by:"Thomas Sargent, John Stachurski et al.", d:"Open lectures and code for quantitative economics with Python.", u:"https://intro.quantecon.org/intro.html", c:["Economics","Mathematics","Computer Science"]},
  {t:"How Is AI Shaping Economic Research?", l:2, by:"Marginal Revolution", d:"Where AI tools are actually changing economics work.", u:"https://marginalrevolution.com/marginalrevolution/2026/10/how-is-ai-shaping-economic-research.html", c:["Economics","Essays","AI & ML"]},
  {t:"Brazil's Economic Problems in a Nutshell", l:2, by:"Marginal Revolution", d:"The Economist's argument connecting rigid spending rules to chronic crisis.", u:"https://marginalrevolution.com/marginalrevolution/2026/10/brazils-economic-problems-in-a-nutshell.html", c:["Economics","Essays"]},
  {t:"Facts About Breastfeeding", l:2, by:"Marginal Revolution", d:"Putting a value on unpaid maternal nursing across five centuries.", u:"https://marginalrevolution.com/marginalrevolution/2026/10/facts-about-breastfeeding.html", c:["Economics","Essays"]},
  {t:"Better Incentives, More Kidneys, More Lives", l:2, by:"Alex Tabarrok, Marginal Revolution", d:"Market design applied to organ donation.", u:"https://marginalrevolution.com/marginalrevolution/2026/10/better-incentives-more-kidneys-more-lives.html", c:["Economics","Essays"]},
  {t:"Why Targeted Treatments Cost So Much", l:2, by:"Alex Tabarrok, Marginal Revolution", d:"One-time cures create an upfront financing problem; small markets complicate incentives.", u:"https://marginalrevolution.com/marginalrevolution/2026/11/expensive-pharmaceuticals-for-targeted-diseases.html", c:["Economics","Essays"]},
  {t:"Why Aren't Cybersecurity Losses Worse?", l:2, by:"Marginal Revolution", d:"A puzzle about measured losses versus predicted ones.", u:"https://marginalrevolution.com/marginalrevolution/2026/10/why-are-cybersecurity-losses-not-worse.html", c:["Economics","Essays","Computer Science"]},
  // Books & reading
  {t:"Standard Ebooks", l:1, by:"Standard Ebooks", d:"Free, carefully formatted public-domain classics.", u:"https://standardebooks.org/", c:["Books"]},
  {t:"Five Books", l:1, by:"Five Books", d:"Experts recommend the five best books on their subject, in interviews.", u:"https://fivebooks.com/", c:["Books"]},
  {t:"Arts & Letters Daily", l:1, by:"Arts & Letters Daily", d:"A daily page of essays on ideas, criticism and debate.", u:"https://aldaily.com/", c:["Books","Essays"]},
  // Essays
  {t:"The Library Did Not Burn", l:1, by:"Erin Meryl", d:"An essay on what survived, and what survival costs.", u:"https://erinmerylstudy.substack.com/p/the-library-did-not-burn", c:["Essays"]},
  {t:"There's a Place for Everyone", l:1, by:"Experimental History", d:"On finding the place where your oddness is an advantage.", u:"https://www.experimental-history.com/p/theres-a-place-for-everyone", c:["Essays"]},
  {t:"To Learn to Live in a Mundane Universe", l:1, by:"Freddie deBoer", d:"On accepting an ordinary world and doing the work anyway.", u:"https://freddiedeboer.substack.com/p/to-learn-to-live-in-a-mundane-universe", c:["Essays"]},
  {t:"Europeans Came to Asia Not as Conquerors but as Customers", l:2, by:"Aeon", d:"The trade-first story of Europe in Asia.", u:"https://aeon.co/essays/europeans-came-to-asia-not-as-conquerors-but-as-customers", c:["Essays"]},
  {t:"Why Don't We Live in an Art Nouveau World?", l:2, by:"Asterisk", d:"Why beautiful, ornate buildings never became the default.", u:"https://asteriskmag.substack.com/p/why-dont-we-live-in-an-art-nouveau", c:["Essays"]},
  {t:"A World of Pain", l:2, by:"In Development", d:"Untreated pain as a fear and regulation problem, not a money problem.", u:"https://indevelopmentmag.substack.com/p/a-world-of-pain", c:["Essays"]},
  {t:"Stuck in the Vial", l:2, by:"In Development", d:"How autoinjectors got stuck, and what that says about drug delivery.", u:"https://indevelopmentmag.substack.com/p/stuck-in-the-vial-how-autoinjectors", c:["Essays"]},
  {t:"What Shapes Paternal Care?", l:2, by:"Asterisk", d:"The evolutionary logic of how much fathers invest.", u:"https://asteriskmag.substack.com/p/how-to-turn-a-philanderer-into-a", c:["Essays"]},
  // From the How to TechMaxx in your 20s carousel (8 Nov 2026)
  {t:"How to TechMaxx in Your 20s", l:1, by:"@chrispathway, Instagram", d:"The carousel this batch of resources came from: a roadmap for getting technical in your twenties.", u:"https://www.instagram.com/p/DfcuGTakcrh/", c:["Computer Science","AI & ML"]},
  {t:"roadmap.sh", l:1, by:"roadmap.sh", d:"Community-maintained roadmaps for developer paths: what to learn, in what order.", u:"https://roadmap.sh", c:["Computer Science"]},
  {t:"Essence of Linear Algebra", l:2, by:"3Blue1Brown", d:"The visual series on vectors, matrices and transformations: the intuition behind the maths of ML.", u:"https://www.3blue1brown.com/topics/linear-algebra", c:["Mathematics","AI & ML"]},
  {t:"Neural Networks: Zero to Hero", l:3, by:"Andrej Karpathy", d:"Build neural networks from scratch, code-first, ending with a GPT.", u:"https://karpathy.ai/zero-to-hero.html", c:["AI & ML","Computer Science"]},
  {t:"AI Fluency: Framework & Foundations", l:1, by:"Anthropic", d:"Anthropic's course on effective, efficient, ethical and safe AI use, with a certificate.", u:"https://anthropic.skilljar.com/ai-fluency-framework-foundations", c:["AI & ML"]},
  {t:"OpenAI Academy", l:2, by:"OpenAI", d:"Free courses and workshops on using and building with AI.", u:"https://academy.openai.com/", c:["AI & ML"]},
  {t:"Generative AI for Everyone", l:1, by:"Andrew Ng, DeepLearning.AI", d:"A non-technical introduction to generative AI: what it can do, and how to work with it.", u:"https://www.deeplearning.ai/courses/generative-ai-for-everyone/", c:["AI & ML"]},
  {t:"Project Based Learning", l:3, by:"practical-tutorials on GitHub", d:"A curated list of tutorials where you build a real project from scratch, by language.", u:"https://github.com/practical-tutorials/project-based-learning", c:["Computer Science"]},
  {t:"Build Your Own X", l:4, by:"codecrafters-io on GitHub", d:"Master programming by recreating things from scratch: a database, an OS, a Git, a browser.", u:"https://github.com/codecrafters-io/build-your-own-x", c:["Computer Science"]},
  {t:"CodeCrafters", l:5, by:"CodeCrafters", d:"Hard programming challenges: build your own Redis, Docker, SQLite and more.", u:"https://codecrafters.io/", c:["Computer Science"]}
];

RES.sort(function(a,b){ return a.l - b.l; });

var CATS = ["All","Mathematics","Computer Science","AI & ML","Economics","Books","Essays"];
var active = "All";
var list = document.getElementById("list");
var catsEl = document.getElementById("cats");
var q = document.getElementById("q");
var noneEl = document.getElementById("none");
var countEl = document.getElementById("count");

CATS.forEach(function(c){
  var a = document.createElement("button");
  a.type = "button";
  a.textContent = c;
  a.dataset.c = c;
  if (c === active) a.setAttribute("aria-current", "page");
  a.onclick = function(){ active = c; render(); };
  catsEl.appendChild(a);
});

function render(){
  var term = q.value.trim().toLowerCase();
  Array.prototype.forEach.call(catsEl.children, function(a){
    if (a.dataset.c === active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  list.innerHTML = "";
  var n = 0;
  RES.forEach(function(r){
    if (active !== "All" && r.c.indexOf(active) === -1) return;
    if (term) {
      var hay = (r.t + " " + r.by + " " + r.d + " " + r.c.join(" ")).toLowerCase();
      if (hay.indexOf(term) === -1) return;
    }
    n++;
    var p = document.createElement("p");
    p.className = "r";
    var a = document.createElement("a");
    a.href = r.u; a.textContent = r.t; a.target = "_blank"; a.rel = "noopener";
    var by = document.createElement("span");
    by.className = "by"; by.textContent = " · " + r.by;
    var d = document.createElement("span");
    d.className = "desc"; d.textContent = r.d;
    var t = document.createElement("span");
    t.className = "t"; t.textContent = r.c.join(" · ");
    p.appendChild(a); p.appendChild(by); p.appendChild(d); p.appendChild(t);
    list.appendChild(p);
  });
  noneEl.style.display = n ? "none" : "block";
  countEl.textContent = n + (n === 1 ? " resource" : " resources") + (active === "All" ? "" : " in " + active);
}
q.addEventListener("input", render);
render();
