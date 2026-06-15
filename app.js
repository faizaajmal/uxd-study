/* =========================================================
   FEED STUDY PROTOTYPE -- app.js

   SETUP: Paste your Pexels API key below.
   Get one free at https://www.pexels.com/api/
   ========================================================= */

/* ---------------------------------------------------------
   CARD DATA (48 cards)
   query = search term sent to Pexels for that card's video
   --------------------------------------------------------- */
const CARDS = [
  { user:"@noodleworld",    caption:"The best dan dan noodles ever",                 tags:"#streetfood #noodles",      likes:"241K", scene:"🍜",  query:"street food noodles" },
  { user:"@wanderlust.k",   caption:"Paris at golden hour never gets old",           tags:"#travel #paris",            likes:"892K", scene:"🗼",  query:"paris city travel" },
  { user:"@funnymoments",   caption:"When Monday hits different",                    tags:"#comedy #relatable",        likes:"1.2M", scene:"😹",  query:"funny cat animal" },
  { user:"@stylebyzen",     caption:"That coat tho -- full fit inspo below",         tags:"#fashion #ootd",            likes:"374K", scene:"👗",  query:"fashion style woman" },
  { user:"@wildlifeplanet", caption:"A lion just looked right at my lens",           tags:"#wildlife #nature",         likes:"2.1M", scene:"🦁",  query:"lion wildlife savanna" },
  { user:"@speedrunking",   caption:"New world record! Sub 4 min!!",                 tags:"#gaming #speedrun",         likes:"567K", scene:"🎮",  query:"gaming setup technology" },
  { user:"@artbymila",      caption:"Started with a blank canvas at midnight",       tags:"#art #timelapse",           likes:"441K", scene:"🎨",  query:"painting art brush" },
  { user:"@soccer.clips",   caption:"That bicycle kick though",                      tags:"#sports #soccer",           likes:"3.4M", scene:"⚽",  query:"soccer football sport" },
  { user:"@pizzapilgrim",   caption:"18 hours of dough fermentation",                tags:"#food #pizza",              likes:"219K", scene:"🍕",  query:"pizza cooking italian food" },
  { user:"@altitude.life",  caption:"5400m above sea level. Worth it.",              tags:"#mountains #trekking",      likes:"729K", scene:"🏔️", query:"mountain hiking nature" },
  { user:"@antarcticlens",  caption:"They waddled right past us",                    tags:"#penguins #wildlife",       likes:"1.8M", scene:"🐧",  query:"penguin bird cold" },
  { user:"@artsfound",      caption:"Found this performer in Barcelona",             tags:"#streetart #travel",        likes:"332K", scene:"🎭",  query:"street performer music dance" },
  { user:"@tasteofseoul",   caption:"Korean street corn at 2am",                     tags:"#koreanfood #streetfood",   likes:"388K", scene:"🌽",  query:"korean food market asia" },
  { user:"@chefnoah",       caption:"Butter chicken from scratch in 30 min",         tags:"#indianfood #recipe",       likes:"512K", scene:"🍛",  query:"cooking chef kitchen" },
  { user:"@ramenritual",    caption:"Tonkotsu broth simmered 12 hours",              tags:"#ramen #japanese",          likes:"674K", scene:"🍱",  query:"ramen japanese soup" },
  { user:"@solotravelmaps", caption:"Secret beach in Croatia nobody talks about",    tags:"#croatia #travel",          likes:"1.1M", scene:"🏝️", query:"beach ocean tropical waves" },
  { user:"@trainwindow",    caption:"Trans-Siberian railway at sunset",              tags:"#traintravel #landscape",   likes:"543K", scene:"🌅",  query:"train journey sunset landscape" },
  { user:"@nomad.lens",     caption:"Living in Lisbon for $900 per month",           tags:"#digitalnomad #portugal",   likes:"987K", scene:"✈️", query:"city cafe laptop travel" },
  { user:"@dailydose.lol",  caption:"My dog is absolutely judging me",               tags:"#dogs #comedy",             likes:"2.3M", scene:"🐶",  query:"cute dog puppy funny" },
  { user:"@officehumour",   caption:"Passive aggressive sticky note escalation",     tags:"#work #comedy",             likes:"876K", scene:"😂",  query:"office work desk people" },
  { user:"@thriftqueen",    caption:"Entire outfit: 12 euros from charity shop",     tags:"#thrift #sustainable",      likes:"1.8M", scene:"👠",  query:"vintage fashion shopping" },
  { user:"@minimalist.fit", caption:"5 pieces, 30 outfits -- capsule wardrobe",      tags:"#minimalist #fashion",      likes:"923K", scene:"🧥",  query:"minimalist fashion clothing" },
  { user:"@oceandeep.co",   caption:"Bioluminescent waves at midnight",              tags:"#ocean #nature",            likes:"3.4M", scene:"🌊",  query:"ocean waves night sea" },
  { user:"@foxden",         caption:"Hand-raised fox recognises my voice",           tags:"#fox #animals",             likes:"2.7M", scene:"🦊",  query:"fox animal forest wildlife" },
  { user:"@elephantwatch",  caption:"Baby elephant learning to use its trunk",       tags:"#elephant #wildlife",       likes:"4.1M", scene:"🐘",  query:"elephant baby wildlife africa" },
  { user:"@retropixel",     caption:"Found my Game Boy from 1994. Still works.",     tags:"#retrogaming #nostalgia",   likes:"2.2M", scene:"🕹️", query:"retro vintage technology" },
  { user:"@buildlog.pc",    caption:"$300 PC build that beats a PS5",                tags:"#pcbuild #gaming",          likes:"1.3M", scene:"💻",  query:"computer technology setup" },
  { user:"@sculpt.studio",  caption:"Carving a face from a single block of marble",  tags:"#sculpture #art",           likes:"2.8M", scene:"🗿",  query:"sculpture marble craft art" },
  { user:"@ink.by.hana",    caption:"This tattoo took 14 hours straight",            tags:"#tattoo #art",              likes:"1.9M", scene:"🎨",  query:"tattoo art ink" },
  { user:"@glassblower",    caption:"Molten glass at 1100 degrees looks like lava",  tags:"#glassblowing #craft",      likes:"5.1M", scene:"🌋",  query:"glass blowing fire craft" },
  { user:"@surfbreak",      caption:"30-foot wave, no hesitation. Respect.",         tags:"#surfing #sports",          likes:"2.6M", scene:"🏄",  query:"surfing waves ocean sport" },
  { user:"@gymreel",        caption:"365 days of training. The transformation.",     tags:"#gym #fitness",             likes:"4.8M", scene:"🏋️", query:"gym workout fitness training" },
  { user:"@freeclimber",    caption:"Scaled this 200m cliff with no rope",           tags:"#climbing #extreme",        likes:"6.2M", scene:"🧗",  query:"rock climbing mountain sport" },
  { user:"@parkour.pov",    caption:"Paris rooftops from a different angle",         tags:"#parkour #sports",          likes:"3.9M", scene:"🏙️", query:"parkour urban city jump" },
  { user:"@dessertdiary",   caption:"This croissant took 3 days to laminate",        tags:"#baking #pastry",           likes:"431K", scene:"🥐",  query:"baking pastry bread croissant" },
  { user:"@islandhop",      caption:"This lagoon in Philippines looks unreal",       tags:"#philippines #travel",      likes:"1.4M", scene:"🐚",  query:"tropical island lagoon turquoise" },
  { user:"@vintagevault",   caption:"90s Levi jeans haul -- unbelievable price",     tags:"#vintage #denim",           likes:"678K", scene:"👖",  query:"vintage clothing thrift store" },
  { user:"@colourtheory",   caption:"Stop wearing colours that wash you out",        tags:"#style #colouranalysis",    likes:"2.4M", scene:"🌈",  query:"fashion colour style influencer" },
  { user:"@cloudleopard",   caption:"Spotted in the wild -- once in a lifetime",     tags:"#leopard #wildlife",        likes:"1.6M", scene:"🐆",  query:"leopard jungle wild cat" },
  { user:"@esportsclips",   caption:"This play should be studied in schools",        tags:"#esports #gaming",          likes:"4.5M", scene:"🏆",  query:"esports gaming tournament" },
  { user:"@indiedevdiary",  caption:"I made this game alone in my bedroom",          tags:"#indiegame #gamedev",       likes:"876K", scene:"🎲",  query:"coding developer computer" },
  { user:"@muralistco",     caption:"Turning a blank wall into a landmark",          tags:"#mural #streetart",         likes:"3.2M", scene:"🖌️", query:"mural street art graffiti" },
  { user:"@ultrarunner",    caption:"100 miles in 24 hours. Never again.",           tags:"#ultramarathon #running",   likes:"1.7M", scene:"🏃",  query:"running trail marathon" },
  { user:"@parentmode",     caption:"Explaining WiFi to my nan for the 8th time",    tags:"#family #comedy",           likes:"1.5M", scene:"👵",  query:"family home funny" },
  { user:"@roommatestory",  caption:"He thought this was a salad ingredient",        tags:"#roommate #comedy",         likes:"654K", scene:"🤦",  query:"cooking kitchen funny fail" },
  { user:"@gymfails",       caption:"Overconfidence: a documentary",                 tags:"#gym #comedy #fail",        likes:"3.1M", scene:"😬",  query:"gym fail funny workout" },
  { user:"@bonsaimaster",   caption:"10 years of growth in 60 seconds",              tags:"#bonsai #nature",           likes:"988K", scene:"🌿",  query:"bonsai tree nature plant" },
  { user:"@deepseadive",    caption:"Found this shipwreck 40 metres down",           tags:"#diving #ocean",            likes:"1.3M", scene:"🤿",  query:"scuba diving underwater ocean" },
];

/* gradient shown while video loads or as fallback */
const GRADS = [
  "linear-gradient(160deg,#1a3a2a,#0d1f0d,#2a1a0d)",
  "linear-gradient(160deg,#1a1a3a,#0d0d2a,#1a0d2a)",
  "linear-gradient(160deg,#3a1a1a,#2a0d0d,#3a2a1a)",
  "linear-gradient(160deg,#1a2a3a,#0d1a2a,#1a3a2a)",
  "linear-gradient(160deg,#2a1a3a,#1a0d2a,#3a1a2a)",
  "linear-gradient(160deg,#3a2a1a,#2a1a0d,#1a3a1a)",
  "linear-gradient(160deg,#1a3a3a,#0d2a2a,#2a3a1a)",
  "linear-gradient(160deg,#3a1a2a,#2a0d1a,#1a2a3a)",
];

/* will hold the resolved streamable mp4 links after API fetch */
const resolvedURLs = new Array(CARDS.length).fill(null);

/* SVG icons */
const SVG = {
  thumbsUp: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H2v9zm18.5-9H14V7a3 3 0 0 0-3-3h-.5L8 10.5V20h9.5l2.5-6.5.5-1.5c0-.83-.67-1.5-1.5-1.5z"/></svg>',
  thumbsDown: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2V4zM3.5 13H10v4a3 3 0 0 0 3 3h.5l2.5-6.5V4H7l-2.5 6.5-.5 1.5c0 .83.67 1.5 1.5 1.5z"/></svg>',
};

/* =========================================================
   CONSTANTS
   ========================================================= */
const SESSION_SECS = 8 * 60;
const CUE1_CARD    = 8;
const CUE2_CARD    = 14;

/* =========================================================
   BEHAVIORAL LOG
   ========================================================= */
const log = {
  participantCode:"", sessionStart:null, sessionEnd:null,
  sessionEndReason:"", totalTimeSec:0, cardsViewed:0, scrollPx:0,
  timeBeforeFirstCueSec:null, timePerCard:{},
  likedCards:[], dislikedCards:[], buttonInteractions:[],
  ecoModeEnabled:false, ecoModeFirstTimestamp:null,
  ecoModeToggleCount:0, ecoModeOnAtEnd:false,
  cue1:{ shown:false, shownAt:null, action:null },
  cue2:{ shown:false, shownAt:null, action:null },
  badgeTaps:[],
};

/* =========================================================
   APP STATE
   ========================================================= */
let S = {
  phase:"code", currentCard:0, cardEnteredAt:null,
  cue1Done:false, cue2Done:false, ecoOn:false,
  timerInterval:null, elapsedSec:0,
};

/* =========================================================
   UTILITIES
   ========================================================= */
function now()     { return Date.now(); }
function elapsed() { return log.sessionStart ? Math.floor((now()-log.sessionStart)/1000) : 0; }
function fmtTime(s){ return Math.floor(s/60)>0 ? "~"+Math.floor(s/60)+" min" : "~"+s+"s"; }
function fmtCO2(s) { return "~"+(s/60*0.7).toFixed(1)+"g CO2"; }
function fmtMSS(s) { return Math.floor(s/60)+":"+(String(s%60).padStart(2,"0")); }
function logBtn(n) { log.buttonInteractions.push({button:n, timestamp:new Date().toISOString(), elapsedSec:elapsed()}); }
function showModal(id){ document.getElementById(id).classList.add("visible"); }
function hideModal(id){ document.getElementById(id).classList.remove("visible"); }
function $(id)     { return document.getElementById(id); }

/* =========================================================
   PEXELS API
   - Fetches best portrait MP4 link for each card query
   - We request per_page=5 and pick the best file quality
   - Results are cached in resolvedURLs[] so each card's
     video element gets a direct browser-playable src
   ========================================================= */
async function fetchVideoURL(cardIndex) {
  const query = encodeURIComponent(CARDS[cardIndex].query);
  const url   = "https://api.pexels.com/videos/search?query=" + query
              + "&per_page=5&orientation=portrait&size=medium";
  try {
    const res  = await fetch(url, { headers: { Authorization: PEXELS_API_KEY } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.videos || data.videos.length === 0) return null;

    /* pick a random video from top results for variety across participants */
    const video = data.videos[Math.floor(Math.random() * data.videos.length)];

    /* find best quality file: prefer HD (<=1080p height) portrait mp4 */
    const files = (video.video_files || [])
      .filter(f => f.file_type === "video/mp4" && f.link)
      .sort((a, b) => {
        /* prefer portrait orientation */
        const aPort = a.height > a.width ? 1 : 0;
        const bPort = b.height > b.width ? 1 : 0;
        if (bPort !== aPort) return bPort - aPort;
        /* then prefer 720p-1080p range */
        const aScore = Math.abs(a.height - 900);
        const bScore = Math.abs(b.height - 900);
        return aScore - bScore;
      });

    return files.length > 0 ? files[0].link : null;
  } catch (e) {
    return null;   /* fail silently -- card shows emoji fallback */
  }
}

/* lazy fetch -- called as user scrolls, fetches ahead of current card */
const fetchedIndices = new Set();

async function fetchVideosAround(centerIdx) {
  /* fetch current card + next 5 cards ahead */
  const toFetch = [];
  for (let i = centerIdx; i < Math.min(centerIdx + 6, CARDS.length); i++) {
    if (!fetchedIndices.has(i)) {
      fetchedIndices.add(i);
      toFetch.push(i);
    }
  }
  if (toFetch.length === 0) return;

  /* fetch in parallel */
  await Promise.all(toFetch.map(async i => {
    const url = await fetchVideoURL(i);
    resolvedURLs[i] = url;
    /* inject src into already-rendered video element */
    if (url) {
      const vid = $("vid-" + i);
      if (vid && !vid.src) {
        vid.src = url;
        /* hide emoji scene when video is ready */
        vid.addEventListener("canplay", () => {
          const scene = $("vscene-" + i);
          if (scene) scene.style.display = "none";
        }, { once: true });
      }
    }
  }));
}



/* =========================================================
   CODE SCREEN
   ========================================================= */
const inputCode = $("input-code");
const btnStart  = $("btn-start");

inputCode.addEventListener("input",   () => { btnStart.disabled = !inputCode.value.trim(); });
inputCode.addEventListener("keydown", e  => { if(e.key==="Enter" && !btnStart.disabled) btnStart.click(); });

btnStart.addEventListener("click", () => {
  log.participantCode = inputCode.value.trim().toUpperCase();
  logBtn("start");
  transitionTo("feed");
});

/* =========================================================
   BUILD FEED
   ========================================================= */
function buildFeed() {
  const container = $("feed-container");
  container.innerHTML = "";

  CARDS.forEach((d, i) => {
    const bg  = GRADS[i % GRADS.length];

    const card = document.createElement("div");
    card.className     = "video-card";
    card.dataset.index = i;

    card.innerHTML =
      "<div class='vid-bg' style='background:" + bg + "'>" +
        "<video id='vid-" + i + "' loop muted playsinline preload='none'></video>" +
      "</div>" +
      "<div class='vid-dim'></div>" +
      "<div class='vid-scene' id='vscene-" + i + "' onclick='playCard(" + i + ")'> " +
        "<div class='play-ring'>&#9654;</div>" +
        "<span class='scene-emoji'>" + d.scene + "</span>" +
        "<span class='scene-label'>VIDEO " + (i+1) + " / " + CARDS.length + "</span>" +
      "</div>" +
      "<div class='card-overlay'>" +
        "<div class='card-username'>" + d.user + "</div>" +
        "<div class='card-caption'>" + d.caption + " <span class='card-hashtags'>" + d.tags + "</span></div>" +
      "</div>" +
      "<div class='card-sidebar'>" +
        "<div class='side-btn' id='like-" + i + "' onclick='handleLike(" + i + ")'>" +
          "<div class='side-icon-wrap'><div class='side-icon-circle'>" + SVG.thumbsUp + "</div></div>" +
          "<span class='side-count' id='lc-" + i + "'>" + d.likes + "</span>" +
        "</div>" +
        "<div class='side-btn' id='dislike-" + i + "' onclick='handleDislike(" + i + ")'>" +
          "<div class='side-icon-wrap'><div class='side-icon-circle'>" + SVG.thumbsDown + "</div></div>" +
          "<span class='side-count' id='dc-" + i + "'>Nope</span>" +
        "</div>" +
      "</div>";

    container.appendChild(card);


  });
}

/* =========================================================
   VIDEO SYNC -- play current card, pause all others
   ========================================================= */
function syncVideos(activeIdx) {
  CARDS.forEach((_, i) => {
    const v = $("vid-" + i);
    if (!v || !v.src) return;
    if (i === activeIdx) {
      if (!S.ecoOn) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    } else {
      v.pause();
      v.currentTime = 0;
    }
  });
}

/* =========================================================
   LIKE / DISLIKE
   ========================================================= */
const likedSet    = new Set();
const dislikedSet = new Set();

function triggerPop(id) {
  const el = $(id);
  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
  el.addEventListener("animationend", () => el.classList.remove("pop"), {once:true});
}

function handleLike(i) {
  const lb = $("like-"+i), db = $("dislike-"+i);
  if (likedSet.has(i)) {
    likedSet.delete(i); lb.classList.remove("liked"); logBtn("unlike-"+i);
  } else {
    likedSet.add(i); dislikedSet.delete(i);
    lb.classList.add("liked"); db.classList.remove("disliked");
    triggerPop("like-"+i); logBtn("like-"+i);
  }
  log.likedCards = [...likedSet]; log.dislikedCards = [...dislikedSet];
}

function handleDislike(i) {
  const db = $("dislike-"+i), lb = $("like-"+i);
  if (dislikedSet.has(i)) {
    dislikedSet.delete(i); db.classList.remove("disliked"); logBtn("undislike-"+i);
  } else {
    dislikedSet.add(i); likedSet.delete(i);
    db.classList.add("disliked"); lb.classList.remove("liked");
    triggerPop("dislike-"+i); logBtn("dislike-"+i);
  }
  log.likedCards = [...likedSet]; log.dislikedCards = [...dislikedSet];
}

/* =========================================================
   START FEED
   ========================================================= */
function startFeed() {
  const feed = $("feed-container");
  feed.classList.add("active");
  $("top-bar").style.display              = "flex";
  $("session-timer").style.display        = "block";
  $("eco-badge").style.display            = "flex";
  $("btn-end-session").style.display      = "block";

  log.sessionStart = now();
  S.cardEnteredAt  = now();
  S.currentCard    = 0;
  log.cardsViewed  = 1;

  /* start fetching first 6 videos immediately */
  fetchVideosAround(0);
  syncVideos(0);

  S.timerInterval = setInterval(() => {
    S.elapsedSec    = elapsed();
    const rem       = Math.max(0, SESSION_SECS - S.elapsedSec);
    const t         = $("session-timer");
    t.textContent   = fmtMSS(rem);
    t.classList.toggle("warning", rem <= 60);
    if (rem === 0) { log.sessionEndReason = "time-limit-8min"; endSession(); }
  }, 1000);

  feed.addEventListener("scroll", onScroll, {passive:true});
}

function onScroll() {
  const feed = $("feed-container");
  log.scrollPx   = Math.round(feed.scrollTop);
  const newIdx   = Math.round(feed.scrollTop / window.innerHeight);
  if (newIdx !== S.currentCard) {
    const spent = Math.floor((now()-S.cardEnteredAt)/1000);
    log.timePerCard[S.currentCard] = (log.timePerCard[S.currentCard]||0)+spent;
    log.cardsViewed = Math.max(log.cardsViewed, newIdx+1);
    S.currentCard   = newIdx;
    S.cardEnteredAt = now();
    fetchVideosAround(newIdx);
    syncVideos(newIdx);
    checkCues(newIdx);
  }
}

/* =========================================================
   CUES (card-index triggered)
   ========================================================= */
function checkCues(idx) {
  if (!S.cue1Done && idx >= CUE1_CARD) {
    S.cue1Done = true;
    log.cue1.shown = true; log.cue1.shownAt = new Date().toISOString();
    log.timeBeforeFirstCueSec = elapsed();
    showCue1(); return;
  }
  if (!S.cue2Done && idx >= CUE2_CARD && !S.ecoOn) {
    S.cue2Done = true;
    log.cue2.shown = true; log.cue2.shownAt = new Date().toISOString();
    showCue2();
  }
}

function showCue1() {
  const s = elapsed();
  $("cue1-time").textContent = fmtTime(s);
  $("cue1-mins").textContent = fmtTime(s);
  $("cue1-co2").textContent  = fmtCO2(s);
  $("bar1-time").style.width = Math.min(85,s/480*100)+"%";
  $("bar1-co2").style.width  = Math.min(70,s/480*80)+"%";
  showModal("modal-layer1");
}
function showCue2() {
  $("cue2-session").textContent = fmtCO2(elapsed());
  showModal("modal-layer2");
}

/* =========================================================
   END SESSION BUTTON
   ========================================================= */
$("btn-end-session").addEventListener("click", () => {
  logBtn("end-session-btn"); showModal("modal-confirm-end");
});
$("confirm-cancel").addEventListener("click", () => {
  logBtn("confirm-cancel"); hideModal("modal-confirm-end");
});
$("confirm-end").addEventListener("click", () => {
  logBtn("confirm-end"); hideModal("modal-confirm-end");
  log.sessionEndReason = "researcher-ended"; endSession();
});

/* =========================================================
   ECO BADGE
   ========================================================= */
$("eco-badge").addEventListener("click", () => {
  logBtn("eco-badge-tap");
  log.badgeTaps.push({at:new Date().toISOString(), ecoWas:S.ecoOn});
  openBadgeModal();
});

function openBadgeModal() {
  const s = elapsed();
  $("badge-body").textContent    = S.ecoOn ? "Your session with eco mode on"  : "Your session with eco mode off";
  $("badge-row-lbl").textContent = S.ecoOn ? "Eco session" : "Your session";
  $("badge-co2").textContent     = S.ecoOn ? "~0.8g CO2" : fmtCO2(s);
  $("badge-bar").style.width     = S.ecoOn ? "27%" : Math.min(85,s/480*100)+"%";
  $("badge-bar").className       = "stat-fill"+(S.ecoOn ? " g" : "");
  $("badge-eco-compare").style.display = S.ecoOn ? "none" : "block";
  const btn = $("badge-toggle-eco");
  btn.textContent = S.ecoOn ? "Turn off Eco Mode" : "Turn on Eco Mode";
  btn.className   = S.ecoOn ? "mbtn dark" : "mbtn grn";
  showModal("modal-badge");
}

$("skip-badge").addEventListener("click",       () => { logBtn("badge-skip");     hideModal("modal-badge"); });
$("badge-continue").addEventListener("click",   () => { logBtn("badge-continue"); hideModal("modal-badge"); });
$("badge-toggle-eco").addEventListener("click", () => {
  if (S.ecoOn) { disableEco(); logBtn("badge-eco-off"); }
  else         { enableEco();  logBtn("badge-eco-on");  }
  hideModal("modal-badge");
});

/* =========================================================
   MODAL 1 (Layer 1)
   ========================================================= */
$("skip1").addEventListener("click", () => { logBtn("cue1-skip"); log.cue1.action="skip"; hideModal("modal-layer1"); });
$("cue1-continue").addEventListener("click", () => { logBtn("cue1-continue"); log.cue1.action="continue"; hideModal("modal-layer1"); });
$("cue1-tellmore").addEventListener("click", () => {
  logBtn("cue1-tell-more"); log.cue1.action="tell-more";
  hideModal("modal-layer1");
  S.cue2Done=true; log.cue2.shown=true; log.cue2.shownAt=new Date().toISOString();
  setTimeout(showCue2, 320);
});

/* =========================================================
   MODAL 2 (Layer 2)
   ========================================================= */
$("skip2").addEventListener("click", () => { logBtn("cue2-skip"); log.cue2.action="skip"; hideModal("modal-layer2"); });
$("cue2-continue").addEventListener("click", () => { logBtn("cue2-continue"); log.cue2.action="continue"; hideModal("modal-layer2"); });
$("cue2-eco").addEventListener("click", () => { logBtn("cue2-eco-on"); log.cue2.action="eco-on"; enableEco(); hideModal("modal-layer2"); });

/* =========================================================
   ECO MODE
   ========================================================= */
function enableEco() {
  S.ecoOn = true;
  if (!log.ecoModeEnabled) { log.ecoModeEnabled=true; log.ecoModeFirstTimestamp=new Date().toISOString(); }
  log.ecoModeToggleCount++;
  $("eco-badge").className         = "eco-on";
  $("eco-label").textContent       = "Eco Mode On";
  $("feed-container").style.filter = "brightness(.87) saturate(.62)";
  const v = $("vid-" + S.currentCard);
if (v) v.pause();
}
function disableEco() {
  S.ecoOn = false; log.ecoModeToggleCount++;
  $("eco-badge").className         = "eco-off";
  $("eco-label").textContent       = "Eco Mode Off";
  $("feed-container").style.filter = "";
  const v = $("vid-" + S.currentCard);
if (v && v.src) v.play().catch(() => {});
}

/* =========================================================
   END SESSION
   ========================================================= */
function endSession() {
  if (S.phase==="end") return;
  S.phase = "end";
  clearInterval(S.timerInterval);
  const spent = Math.floor((now()-S.cardEnteredAt)/1000);
  log.timePerCard[S.currentCard] = (log.timePerCard[S.currentCard]||0)+spent;
  log.sessionEnd    = new Date().toISOString();
  log.totalTimeSec  = elapsed();
  log.ecoModeOnAtEnd = S.ecoOn;
  if (!log.sessionEndReason) log.sessionEndReason = "end-of-feed";
  transitionTo("end");
}

/* =========================================================
   TRANSITIONS
   ========================================================= */
function transitionTo(phase) {
  S.phase = phase;
  ["screen-code","screen-end"].forEach(id => $(id).classList.add("hidden"));
  $("feed-container").classList.remove("active");
  $("top-bar").style.display         = "none";
  $("session-timer").style.display   = "none";
  $("eco-badge").style.display       = "none";
  $("btn-end-session").style.display = "none";

  if (phase==="code")  { $("screen-code").classList.remove("hidden"); }
  else if (phase==="feed") { buildFeed(); startFeed(); }
  else if (phase==="end")  { renderLog(); $("screen-end").classList.remove("hidden"); }
}

function playCard(i) {
  const v = $("vid-" + i);
  if (!v) return;
  if (v.paused) {
    v.play().catch(() => {});
    $("vscene-" + i).style.display = "none";
  } else {
    v.pause();
    $("vscene-" + i).style.display = "flex";
  }
  logBtn("manual-play-card-" + i);
}
/* =========================================================
   LOG + EXPORT
   ========================================================= */
function renderLog() {
  const out = {
    participantCode: log.participantCode,
    sessionStart: log.sessionStart ? new Date(log.sessionStart).toISOString() : null,
    sessionEnd: log.sessionEnd,
    sessionEndReason: log.sessionEndReason,
    totalTimeSec: log.totalTimeSec,
    cardsViewed: log.cardsViewed,
    scrollPx: log.scrollPx,
    timeBeforeFirstCueSec: log.timeBeforeFirstCueSec,
    timePerCard: log.timePerCard,
    likedCards: log.likedCards,
    dislikedCards: log.dislikedCards,
    ecoModeEnabled: log.ecoModeEnabled,
    ecoModeFirstTimestamp: log.ecoModeFirstTimestamp,
    ecoModeToggleCount: log.ecoModeToggleCount,
    ecoModeOnAtEnd: log.ecoModeOnAtEnd,
    cue1: log.cue1,
    cue2: log.cue2,
    badgeTaps: log.badgeTaps,
    buttonInteractions: log.buttonInteractions,
  };
  $("log-output").textContent = JSON.stringify(out, null, 2);
}

$("btn-copy").addEventListener("click", () => {
  navigator.clipboard.writeText($("log-output").textContent).then(() => {
    const b = $("btn-copy"), orig = b.textContent;
    b.textContent = "Copied!";
    setTimeout(() => { b.textContent = orig; }, 2000);
  });
});

$("btn-download").addEventListener("click", () => {
  const name = "session-" + (log.participantCode||"anon") + "-" + Date.now() + ".json";
  const blob = new Blob([$("log-output").textContent], {type:"application/json"});
  const a    = document.createElement("a");
  a.href     = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
});

$("btn-restart").addEventListener("click", () => location.reload());

/* =========================================================
   INIT
   ========================================================= */
transitionTo("code");
