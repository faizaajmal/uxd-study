/* =========================================================
   FEED STUDY PROTOTYPE -- app.js
   =========================================================
   VIDEO SETUP:
   Save your Pexels videos as:
     videos/vid1.mp4, videos/vid2.mp4, ... videos/vid48.mp4
   The prototype will automatically use them as card backgrounds.
   If a file is missing the card shows the emoji placeholder instead.
   ========================================================= */

/* ---------------------------------------------------------
   CARD DATA (48 cards)
   --------------------------------------------------------- */
const CARDS = [
  { user:"@noodleworld",    caption:"The best dan dan noodles ever",                tags:"#streetfood #noodles",      likes:"241K", scene:"🍜"  },
  { user:"@wanderlust.k",   caption:"Paris at golden hour never gets old",          tags:"#travel #paris",            likes:"892K", scene:"🗼"  },
  { user:"@funnymoments",   caption:"When Monday hits different",                   tags:"#comedy #relatable",        likes:"1.2M", scene:"😹"  },
  { user:"@stylebyzen",     caption:"That coat tho -- full fit inspo below",        tags:"#fashion #ootd",            likes:"374K", scene:"👗"  },
  { user:"@wildlifeplanet", caption:"A lion just looked right at my lens",          tags:"#wildlife #nature",         likes:"2.1M", scene:"🦁"  },
  { user:"@speedrunking",   caption:"New world record! Sub 4 min!!",                tags:"#gaming #speedrun",         likes:"567K", scene:"🎮"  },
  { user:"@artbymila",      caption:"Started with a blank canvas at midnight",      tags:"#art #timelapse",           likes:"441K", scene:"🎨"  },
  { user:"@soccer.clips",   caption:"That bicycle kick though",                     tags:"#sports #soccer",           likes:"3.4M", scene:"⚽"  },
  { user:"@pizzapilgrim",   caption:"18 hours of dough fermentation",               tags:"#food #pizza",              likes:"219K", scene:"🍕"  },
  { user:"@altitude.life",  caption:"5400m above sea level. Worth it.",             tags:"#mountains #trekking",      likes:"729K", scene:"🏔️" },
  { user:"@antarcticlens",  caption:"They waddled right past us",                   tags:"#penguins #wildlife",       likes:"1.8M", scene:"🐧"  },
  { user:"@artsfound",      caption:"Found this performer in Barcelona",            tags:"#streetart #travel",        likes:"332K", scene:"🎭"  },
  { user:"@tasteofseoul",   caption:"Korean street corn at 2am",                    tags:"#koreanfood #streetfood",   likes:"388K", scene:"🌽"  },
  { user:"@chefnoah",       caption:"Butter chicken from scratch in 30 min",        tags:"#indianfood #recipe",       likes:"512K", scene:"🍛"  },
  { user:"@ramenritual",    caption:"Tonkotsu broth simmered 12 hours",             tags:"#ramen #japanese",          likes:"674K", scene:"🍱"  },
  { user:"@solotravelmaps", caption:"Secret beach in Croatia nobody talks about",   tags:"#croatia #travel",          likes:"1.1M", scene:"🏝️" },
  { user:"@trainwindow",    caption:"Trans-Siberian railway at sunset",             tags:"#traintravel #landscape",   likes:"543K", scene:"🌅"  },
  { user:"@nomad.lens",     caption:"Living in Lisbon for $900 per month",          tags:"#digitalnomad #portugal",   likes:"987K", scene:"✈️" },
  { user:"@dailydose.lol",  caption:"My dog is absolutely judging me",              tags:"#dogs #comedy",             likes:"2.3M", scene:"🐶"  },
  { user:"@officehumour",   caption:"Passive aggressive sticky note escalation",    tags:"#work #comedy",             likes:"876K", scene:"😂"  },
  { user:"@thriftqueen",    caption:"Entire outfit: 12 euros from charity shop",    tags:"#thrift #sustainable",      likes:"1.8M", scene:"👠"  },
  { user:"@minimalist.fit", caption:"5 pieces, 30 outfits -- capsule wardrobe",     tags:"#minimalist #fashion",      likes:"923K", scene:"🧥"  },
  { user:"@oceandeep.co",   caption:"Bioluminescent waves at midnight",             tags:"#ocean #nature",            likes:"3.4M", scene:"🌊"  },
  { user:"@foxden",         caption:"Hand-raised fox recognises my voice",          tags:"#fox #animals",             likes:"2.7M", scene:"🦊"  },
  { user:"@elephantwatch",  caption:"Baby elephant learning to use its trunk",      tags:"#elephant #wildlife",       likes:"4.1M", scene:"🐘"  },
  { user:"@retropixel",     caption:"Found my Game Boy from 1994. Still works.",    tags:"#retrogaming #nostalgia",   likes:"2.2M", scene:"🕹️" },
  { user:"@buildlog.pc",    caption:"$300 PC build that beats a PS5",               tags:"#pcbuild #gaming",          likes:"1.3M", scene:"💻"  },
  { user:"@sculpt.studio",  caption:"Carving a face from a single block of marble", tags:"#sculpture #art",          likes:"2.8M", scene:"🗿"  },
  { user:"@ink.by.hana",    caption:"This tattoo took 14 hours straight",           tags:"#tattoo #art",              likes:"1.9M", scene:"🎨"  },
  { user:"@glassblower",    caption:"Molten glass at 1100 degrees looks like lava", tags:"#glassblowing #craft",     likes:"5.1M", scene:"🌋"  },
  { user:"@surfbreak",      caption:"30-foot wave, no hesitation. Respect.",        tags:"#surfing #sports",          likes:"2.6M", scene:"🏄"  },
  { user:"@gymreel",        caption:"365 days of training. The transformation.",    tags:"#gym #fitness",             likes:"4.8M", scene:"🏋️" },
  { user:"@freeclimber",    caption:"Scaled this 200m cliff with no rope",          tags:"#climbing #extreme",        likes:"6.2M", scene:"🧗"  },
  { user:"@parkour.pov",    caption:"Paris rooftops from a different angle",        tags:"#parkour #sports",          likes:"3.9M", scene:"🏙️" },
  { user:"@dessertdiary",   caption:"This croissant took 3 days to laminate",       tags:"#baking #pastry",           likes:"431K", scene:"🥐"  },
  { user:"@islandhop",      caption:"This lagoon in Philippines looks unreal",      tags:"#philippines #travel",      likes:"1.4M", scene:"🐚"  },
  { user:"@vintagevault",   caption:"90s Levi jeans haul -- unbelievable price",    tags:"#vintage #denim",           likes:"678K", scene:"👖"  },
  { user:"@colourtheory",   caption:"Stop wearing colours that wash you out",       tags:"#style #colouranalysis",    likes:"2.4M", scene:"🌈"  },
  { user:"@cloudleopard",   caption:"Spotted in the wild -- once in a lifetime",    tags:"#leopard #wildlife",        likes:"1.6M", scene:"🐆"  },
  { user:"@esportsclips",   caption:"This play should be studied in schools",       tags:"#esports #gaming",          likes:"4.5M", scene:"🏆"  },
  { user:"@indiedevdiary",  caption:"I made this game alone in my bedroom",         tags:"#indiegame #gamedev",       likes:"876K", scene:"🎲"  },
  { user:"@muralistco",     caption:"Turning a blank wall into a landmark",         tags:"#mural #streetart",         likes:"3.2M", scene:"🖌️" },
  { user:"@ultrarunner",    caption:"100 miles in 24 hours. Never again.",          tags:"#ultramarathon #running",   likes:"1.7M", scene:"🏃"  },
  { user:"@parentmode",     caption:"Explaining WiFi to my nan for the 8th time",   tags:"#family #comedy",           likes:"1.5M", scene:"👵"  },
  { user:"@roommatestory",  caption:"He thought this was a salad ingredient",       tags:"#roommate #comedy",         likes:"654K", scene:"🤦"  },
  { user:"@gymfails",       caption:"Overconfidence: a documentary",                tags:"#gym #comedy #fail",        likes:"3.1M", scene:"😬"  },
  { user:"@bonsaimaster",   caption:"10 years of growth in 60 seconds",             tags:"#bonsai #nature",           likes:"988K", scene:"🌿"  },
  { user:"@deepseadive",    caption:"Found this shipwreck 40 metres down",          tags:"#diving #ocean",            likes:"1.3M", scene:"🤿"  },
];

/* gradient fallback palette (cycles if fewer than 48 videos) */
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

/* SVG paths for action buttons */
const SVG = {
  thumbsUp: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H2v9zm18.5-9H14V7a3 3 0 0 0-3-3h-.5L8 10.5V20h9.5l2.5-6.5.5-1.5c0-.83-.67-1.5-1.5-1.5-.17 0 .5 0 .5 0z"/>
  </svg>`,
  thumbsDown: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 4h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2V4zM3.5 13H10v4a3 3 0 0 0 3 3h.5l2.5-6.5V4H7l-2.5 6.5-.5 1.5c0 .83.67 1.5 1.5 1.5.17 0-.5 0-.5 0z"/>
  </svg>`,
};

/* ---------------------------------------------------------
   CONSTANTS
   --------------------------------------------------------- */
const SESSION_SECS = 8 * 60;  /* 8-minute session */
const CUE1_CARD   = 3;        /* Layer 1 fires when user reaches card index 3 (4th card) */
const CUE2_CARD   = 5;        /* Layer 2 fires at card index 5 */

/* ---------------------------------------------------------
   BEHAVIORAL LOG
   --------------------------------------------------------- */
const log = {
  participantCode:       "",
  sessionStart:          null,
  sessionEnd:            null,
  sessionEndReason:      "",
  totalTimeSec:          0,
  cardsViewed:           0,
  scrollPx:              0,
  timeBeforeFirstCueSec: null,
  timePerCard:           {},
  likedCards:            [],
  dislikedCards:         [],
  buttonInteractions:    [],
  ecoModeEnabled:        false,
  ecoModeFirstTimestamp: null,
  ecoModeToggleCount:    0,
  ecoModeOnAtEnd:        false,
  cue1: { shown:false, shownAt:null, action:null },
  cue2: { shown:false, shownAt:null, action:null },
  badgeTaps:             [],
};

/* ---------------------------------------------------------
   APP STATE
   --------------------------------------------------------- */
let S = {
  phase:         "code",
  currentCard:   0,
  cardEnteredAt: null,
  cue1Done:      false,
  cue2Done:      false,
  ecoOn:         false,
  timerInterval: null,
  elapsedSec:    0,
};

/* ---------------------------------------------------------
   UTILITIES
   --------------------------------------------------------- */
function now()     { return Date.now(); }
function elapsed() { return log.sessionStart ? Math.floor((now() - log.sessionStart) / 1000) : 0; }
function fmtTime(s){ return Math.floor(s/60) > 0 ? `~${Math.floor(s/60)} min` : `~${s}s`; }
function fmtCO2(s) { return `~${(s / 60 * 0.7).toFixed(1)}g CO2`; }
function fmtMSS(s) { return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`; }
function logBtn(n) { log.buttonInteractions.push({ button:n, timestamp:new Date().toISOString(), elapsedSec:elapsed() }); }
function showModal(id) { document.getElementById(id).classList.add("visible"); }
function hideModal(id) { document.getElementById(id).classList.remove("visible"); }
function $(id)     { return document.getElementById(id); }

/* ---------------------------------------------------------
   CODE SCREEN
   --------------------------------------------------------- */
const inputCode = $("input-code");
const btnStart  = $("btn-start");
const btnEnd    = $("btn-end-session");

inputCode.addEventListener("input",   () => { btnStart.disabled = !inputCode.value.trim(); });
inputCode.addEventListener("keydown", e  => { if (e.key === "Enter" && !btnStart.disabled) btnStart.click(); });

btnStart.addEventListener("click", () => {
  log.participantCode = inputCode.value.trim().toUpperCase();
  logBtn("start");
  transitionTo("feed");
});

btnEnd.addEventListener("click", () => {
  if (S.phase !== "feed") return;
  logBtn("end-session");
  log.sessionEndReason = "manual-end";
  endSession();
});

/* ---------------------------------------------------------
   BUILD FEED DOM
   --------------------------------------------------------- */
function buildFeed() {
  const container = $("feed-container");
  container.innerHTML = "";

  CARDS.forEach((d, i) => {
    const num    = i + 1;
    const vidSrc = `videos/vid${num}.mp4`;
    const bg     = GRADS[i % GRADS.length];

    const card = document.createElement("div");
    card.className   = "video-card";
    card.dataset.index = i;

    /* We try to use a real video; if it 404s the onerror hides it */
    card.innerHTML = `
      <div class="vid-bg" id="vbg-${i}" style="background:${bg}">
        <video
          id="vid-${i}"
          src="${vidSrc}"
          loop muted playsinline
          preload="none"
          onerror="this.style.display='none'"
        ></video>
      </div>
      <div class="vid-dim"></div>
      <div class="vid-scene" id="vscene-${i}">
        <div class="play-ring">&#9654;</div>
        <span class="scene-emoji">${d.scene}</span>
        <span class="scene-label">VIDEO ${num} / ${CARDS.length}</span>
      </div>
      <div class="card-overlay">
        <div class="card-username">${d.user}</div>
        <div class="card-caption">${d.caption} <span class="card-hashtags">${d.tags}</span></div>
      </div>
      <div class="card-sidebar">
        <div class="side-btn" id="like-${i}" onclick="handleLike(${i})">
          <div class="side-icon-wrap">
            <div class="side-icon-circle">${SVG.thumbsUp}</div>
          </div>
          <span class="side-count" id="lc-${i}">${d.likes}</span>
        </div>
        <div class="side-btn" id="dislike-${i}" onclick="handleDislike(${i})">
          <div class="side-icon-wrap">
            <div class="side-icon-circle">${SVG.thumbsDown}</div>
          </div>
          <span class="side-count" id="dc-${i}">Nope</span>
        </div>
      </div>`;

    container.appendChild(card);

    /* hide placeholder scene once real video loads */
    const videoEl = card.querySelector("video");
    videoEl.addEventListener("canplay", () => {
      const scene = card.querySelector(".vid-scene");
      if (scene) scene.style.display = "none";
    });
  });
}

/* ---------------------------------------------------------
   VIDEO AUTOPLAY (play visible card, pause others)
   --------------------------------------------------------- */
function syncVideos(activeIdx) {
  CARDS.forEach((_, i) => {
    const v = $(`vid-${i}`);
    if (!v) return;
    if (i === activeIdx) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  });
}

/* ---------------------------------------------------------
   LIKE / DISLIKE
   --------------------------------------------------------- */
const likedSet    = new Set();
const dislikedSet = new Set();

function triggerPop(id) {
  const el = $(id);
  el.classList.remove("pop");
  void el.offsetWidth;
  el.classList.add("pop");
  el.addEventListener("animationend", () => el.classList.remove("pop"), { once:true });
}

function handleLike(i) {
  const likeBtn    = $(`like-${i}`);
  const dislikeBtn = $(`dislike-${i}`);
  if (likedSet.has(i)) {
    likedSet.delete(i);
    likeBtn.classList.remove("liked");
    logBtn(`unlike-card-${i}`);
  } else {
    likedSet.add(i);
    dislikedSet.delete(i);
    likeBtn.classList.add("liked");
    dislikeBtn.classList.remove("disliked");
    triggerPop(`like-${i}`);
    logBtn(`like-card-${i}`);
  }
  log.likedCards    = [...likedSet];
  log.dislikedCards = [...dislikedSet];
}

function handleDislike(i) {
  const dislikeBtn = $(`dislike-${i}`);
  const likeBtn    = $(`like-${i}`);
  if (dislikedSet.has(i)) {
    dislikedSet.delete(i);
    dislikeBtn.classList.remove("disliked");
    logBtn(`un-dislike-card-${i}`);
  } else {
    dislikedSet.add(i);
    likedSet.delete(i);
    dislikeBtn.classList.add("disliked");
    likeBtn.classList.remove("liked");
    triggerPop(`dislike-${i}`);
    logBtn(`dislike-card-${i}`);
  }
  log.likedCards    = [...likedSet];
  log.dislikedCards = [...dislikedSet];
}

/* ---------------------------------------------------------
   START FEED
   --------------------------------------------------------- */
function startFeed() {
  const feed = $("feed-container");
  feed.classList.add("active");
  $("top-bar").style.display       = "flex";
  $("session-timer").style.display = "block";
  $("eco-badge").style.display     = "flex";
  $("btn-end-session").style.display = "block";

  log.sessionStart  = now();
  S.cardEnteredAt   = now();
  S.currentCard     = 0;
  log.cardsViewed   = 1;

  syncVideos(0);

  /* countdown tick */
  S.timerInterval = setInterval(() => {
    S.elapsedSec    = elapsed();
    const remaining = Math.max(0, SESSION_SECS - S.elapsedSec);
    const timerEl   = $("session-timer");
    timerEl.textContent = fmtMSS(remaining);
    timerEl.classList.toggle("warning", remaining <= 60);
    if (remaining === 0) {
      log.sessionEndReason = "time-limit-8min";
      endSession();
    }
  }, 1000);

  feed.addEventListener("scroll", onScroll, { passive:true });
}

function onScroll() {
  const feed   = $("feed-container");
  log.scrollPx = Math.round(feed.scrollTop);
  const newIdx = Math.round(feed.scrollTop / window.innerHeight);

  if (newIdx !== S.currentCard) {
    /* log time on previous card */
    const spent = Math.floor((now() - S.cardEnteredAt) / 1000);
    log.timePerCard[S.currentCard] = (log.timePerCard[S.currentCard] || 0) + spent;
    log.cardsViewed = Math.max(log.cardsViewed, newIdx + 1);
    S.currentCard   = newIdx;
    S.cardEnteredAt = now();
    syncVideos(newIdx);
    checkCues(newIdx);
  }
}

/* ---------------------------------------------------------
   CUE TRIGGERS (card-index based)
   --------------------------------------------------------- */
function checkCues(idx) {
  if (!S.cue1Done && idx >= CUE1_CARD) {
    S.cue1Done         = true;
    log.cue1.shown     = true;
    log.cue1.shownAt   = new Date().toISOString();
    log.timeBeforeFirstCueSec = elapsed();
    showCue1();
    return;
  }
  if (!S.cue2Done && idx >= CUE2_CARD && !S.ecoOn) {
    S.cue2Done         = true;
    log.cue2.shown     = true;
    log.cue2.shownAt   = new Date().toISOString();
    showCue2();
  }
}

function showCue1() {
  const s = elapsed();
  $("cue1-time").textContent  = fmtTime(s);
  $("cue1-mins").textContent  = fmtTime(s);
  $("cue1-co2").textContent   = fmtCO2(s);
  $("bar1-time").style.width  = Math.min(85, s / 480 * 100) + "%";
  $("bar1-co2").style.width   = Math.min(70, s / 480 * 80)  + "%";
  showModal("modal-layer1");
}

function showCue2() {
  $("cue2-session").textContent = fmtCO2(elapsed());
  showModal("modal-layer2");
}

/* ---------------------------------------------------------
   ECO BADGE  -- tap to open session insights
   --------------------------------------------------------- */
$("eco-badge").addEventListener("click", () => {
  logBtn("eco-badge-tap");
  log.badgeTaps.push({ at:new Date().toISOString(), ecoWas:S.ecoOn });
  openBadgeModal();
});

function openBadgeModal() {
  const s   = elapsed();
  const co2 = fmtCO2(s);

  $("badge-body").textContent     = S.ecoOn ? "Your session with eco mode on" : "Your session with eco mode off";
  $("badge-row-lbl").textContent  = S.ecoOn ? "Eco session" : "Your session";
  $("badge-co2").textContent      = S.ecoOn ? "~0.8g CO2" : co2;
  $("badge-bar").style.width      = S.ecoOn ? "27%" : Math.min(85, s / 480 * 100) + "%";
  $("badge-bar").className        = "stat-fill" + (S.ecoOn ? " g" : "");

  $("badge-eco-compare").style.display = S.ecoOn ? "none" : "block";

  const toggleBtn = $("badge-toggle-eco");
  toggleBtn.textContent = S.ecoOn ? "Turn off Eco Mode" : "Turn on Eco Mode";
  toggleBtn.className   = S.ecoOn ? "mbtn dark" : "mbtn grn";

  showModal("modal-badge");
}

$("skip-badge").addEventListener("click", () => {
  logBtn("badge-skip"); hideModal("modal-badge");
});
$("badge-continue").addEventListener("click", () => {
  logBtn("badge-continue"); hideModal("modal-badge");
});
$("badge-toggle-eco").addEventListener("click", () => {
  if (S.ecoOn) { disableEco(); logBtn("badge-eco-off"); }
  else         { enableEco();  logBtn("badge-eco-on");  }
  hideModal("modal-badge");
});

/* ---------------------------------------------------------
   MODAL 1 (Layer 1 - Awareness)
   --------------------------------------------------------- */
$("skip1").addEventListener("click", () => {
  logBtn("cue1-skip"); log.cue1.action = "skip"; hideModal("modal-layer1");
});
$("cue1-continue").addEventListener("click", () => {
  logBtn("cue1-continue"); log.cue1.action = "continue"; hideModal("modal-layer1");
});
$("cue1-tellmore").addEventListener("click", () => {
  logBtn("cue1-tell-more"); log.cue1.action = "tell-more";
  hideModal("modal-layer1");
  /* immediately show Layer 2 */
  S.cue2Done       = true;
  log.cue2.shown   = true;
  log.cue2.shownAt = new Date().toISOString();
  setTimeout(showCue2, 320);
});

/* ---------------------------------------------------------
   MODAL 2 (Layer 2 - Eco offer)
   --------------------------------------------------------- */
$("skip2").addEventListener("click", () => {
  logBtn("cue2-skip"); log.cue2.action = "skip"; hideModal("modal-layer2");
});
$("cue2-continue").addEventListener("click", () => {
  logBtn("cue2-continue"); log.cue2.action = "continue"; hideModal("modal-layer2");
});
$("cue2-eco").addEventListener("click", () => {
  logBtn("cue2-eco-on"); log.cue2.action = "eco-on";
  enableEco(); hideModal("modal-layer2");
});

/* ---------------------------------------------------------
   ECO MODE
   --------------------------------------------------------- */
function enableEco() {
  S.ecoOn = true;
  if (!log.ecoModeEnabled) {
    log.ecoModeEnabled       = true;
    log.ecoModeFirstTimestamp = new Date().toISOString();
  }
  log.ecoModeToggleCount++;
  $("eco-badge").className         = "eco-on";
  $("eco-label").textContent       = "Eco Mode On";
  $("feed-container").style.filter = "brightness(.87) saturate(.62)";
}

function disableEco() {
  S.ecoOn = false;
  log.ecoModeToggleCount++;
  $("eco-badge").className         = "eco-off";
  $("eco-label").textContent       = "Eco Mode Off";
  $("feed-container").style.filter = "";
}

/* ---------------------------------------------------------
   END SESSION
   --------------------------------------------------------- */
function endSession() {
  if (S.phase === "end") return;
  S.phase = "end";
  clearInterval(S.timerInterval);

  /* log remaining time on current card */
  const spent = Math.floor((now() - S.cardEnteredAt) / 1000);
  log.timePerCard[S.currentCard] = (log.timePerCard[S.currentCard] || 0) + spent;

  log.sessionEnd      = new Date().toISOString();
  log.totalTimeSec    = elapsed();
  log.ecoModeOnAtEnd  = S.ecoOn;
  if (!log.sessionEndReason) log.sessionEndReason = "end-of-feed";

  transitionTo("end");
}

/* ---------------------------------------------------------
   SCREEN TRANSITIONS
   --------------------------------------------------------- */
function transitionTo(phase) {
  S.phase = phase;

  /* hide everything */
  ["screen-code", "screen-end"].forEach(id => $(id).classList.add("hidden"));
  $("feed-container").classList.remove("active");
  $("top-bar").style.display        = "none";
  $("session-timer").style.display  = "none";
  $("eco-badge").style.display      = "none";
  $("btn-end-session").style.display = "none";

  if (phase === "code") {
    $("screen-code").classList.remove("hidden");
  } else if (phase === "feed") {
    buildFeed();
    startFeed();
  } else if (phase === "end") {
    renderLog();
    $("screen-end").classList.remove("hidden");
  }
}

/* ---------------------------------------------------------
   LOG RENDER + EXPORT
   --------------------------------------------------------- */
function renderLog() {
  const output = {
    participantCode:          log.participantCode,
    sessionStart:             log.sessionStart ? new Date(log.sessionStart).toISOString() : null,
    sessionEnd:               log.sessionEnd,
    sessionEndReason:         log.sessionEndReason,
    totalTimeSec:             log.totalTimeSec,
    cardsViewed:              log.cardsViewed,
    scrollPx:                 log.scrollPx,
    timeBeforeFirstCueSec:    log.timeBeforeFirstCueSec,
    timePerCard:              log.timePerCard,
    likedCards:               log.likedCards,
    dislikedCards:            log.dislikedCards,
    ecoModeEnabled:           log.ecoModeEnabled,
    ecoModeFirstTimestamp:    log.ecoModeFirstTimestamp,
    ecoModeToggleCount:       log.ecoModeToggleCount,
    ecoModeOnAtEnd:           log.ecoModeOnAtEnd,
    cue1:                     log.cue1,
    cue2:                     log.cue2,
    badgeTaps:                log.badgeTaps,
    buttonInteractions:       log.buttonInteractions,
  };
  $("log-output").textContent = JSON.stringify(output, null, 2);
}

$("btn-copy").addEventListener("click", () => {
  navigator.clipboard.writeText($("log-output").textContent).then(() => {
    const b = $("btn-copy");
    const original = b.textContent;
    b.textContent = "Copied!";
    setTimeout(() => { b.textContent = original; }, 2000);
  });
});

$("btn-download").addEventListener("click", () => {
  const fileName = `session-log-${log.participantCode || 'anon'}-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  const blob = new Blob([$("log-output").textContent], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
});

$("btn-restart").addEventListener("click", () => location.reload());

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
transitionTo("code");
