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

  { user:"@fictional_feed", caption:"Pages turning in a quiet room 📖", tags:"#asmr #books #sounds", likes:"786K", scene:"📖", query:"book pages turning ASMR no people" },

  { user:"@fictional_feed", caption:"Golden hour over the city", tags:"#city #sunset", likes:"892K", scene:"🌇", query:"city skyline golden hour sunset no people" },

  { user:"@fictional_feed", caption:"A setup built for late-night sessions", tags:"#gaming #technology", likes:"567K", scene:"🎮", query:"gaming computer setup RGB desk no people" },

  { user:"@fictional_feed", caption:"Above the clouds", tags:"#mountains #nature", likes:"729K", scene:"🏔️", query:"mountain landscape clouds aerial no people" },

  { user:"@fictional_feed", caption:"When the desk gets out of control", tags:"#workspace #comedy", likes:"876K", scene:"🗒️", query:"messy office desk papers workspace no people" },

  { user:"@fictional_feed", caption:"A year of growth in one frame", tags:"#plants #nature", likes:"988K", scene:"🌿", query:"plant growth timelapse no people" },

  { user:"@fictional_feed", caption:"A different world beneath the surface", tags:"#ocean #underwater", likes:"1.3M", scene:"🌊", query:"underwater ocean reef rocks no people animals" },

  { user:"@fictional_feed", caption:"The ocean glowing after dark", tags:"#ocean #nature", likes:"3.4M", scene:"🌊", query:"bioluminescent ocean waves night no people" },

  { user:"@fictional_feed", caption:"Monday mood, in object form", tags:"#comedy #everyday", likes:"1.2M", scene:"☕", query:"empty coffee cup messy desk no people" },

  { user:"@fictional_feed", caption:"A closer look at everyday design", tags:"#design #objects", likes:"374K", scene:"🪑", query:"minimalist interior design objects no people" },

  { user:"@fictional_feed", caption:"Light, color, and a blank canvas", tags:"#art #timelapse", likes:"441K", scene:"🎨", query:"painting canvas art studio no people" },

  { user:"@fictional_feed", caption:"The perfect curve", tags:"#sports #motion", likes:"3.4M", scene:"⚽", query:"football ball empty stadium no people" },

  { user:"@fictional_feed", caption:"18 hours of fermentation", tags:"#food #pizza", likes:"219K", scene:"🍕", query:"pizza dough preparation closeup no people" },

  { user:"@fictional_feed", caption:"A landscape worth stopping for", tags:"#mountains #nature", likes:"729K", scene:"🏔️", query:"mountain valley landscape nature no people" },

  { user:"@fictional_feed", caption:"Frozen landscapes in motion", tags:"#winter #nature", likes:"1.8M", scene:"❄️", query:"snow landscape ice glacier no people" },

  { user:"@fictional_feed", caption:"Color appearing on an empty wall", tags:"#streetart #art", likes:"332K", scene:"🎨", query:"colorful mural graffiti wall empty street no people" },

  { user:"@fictional_feed", caption:"Street food after dark", tags:"#food #streetfood", likes:"388K", scene:"🌽", query:"street food market food closeup no people" },

  { user:"@fictional_feed", caption:"A recipe built from scratch", tags:"#food #recipe", likes:"512K", scene:"🍛", query:"indian food cooking ingredients closeup no people" },

  { user:"@fictional_feed", caption:"A bowl worth waiting for", tags:"#ramen #japanese", likes:"674K", scene:"🍜", query:"tonkotsu ramen bowl closeup no people" },

  { user:"@fictional_feed", caption:"Clear water, quiet shoreline", tags:"#travel #nature", likes:"1.1M", scene:"🏝️", query:"croatia coastline clear water empty beach no people" },

  { user:"@fictional_feed", caption:"A railway disappearing into the horizon", tags:"#train #landscape", likes:"543K", scene:"🚆", query:"railway tracks sunset landscape no people" },

  { user:"@fictional_feed", caption:"A city view from above", tags:"#travel #architecture", likes:"987K", scene:"🏙️", query:"lisbon architecture city aerial no people" },

  { user:"@fictional_feed", caption:"A quiet corner of the wardrobe", tags:"#fashion #clothing", likes:"1.8M", scene:"👕", query:"vintage clothes rack clothing no people" },

  { user:"@fictional_feed", caption:"Five pieces, endless combinations", tags:"#fashion #minimalism", likes:"923K", scene:"🧥", query:"minimalist clothing wardrobe flat lay no people" },

  { user:"@fictional_feed", caption:"Waves under a different kind of light", tags:"#ocean #night", likes:"3.4M", scene:"🌊", query:"ocean waves night long exposure no people" },

  { user:"@fictional_feed", caption:"A little technology from another era", tags:"#technology #nostalgia", likes:"2.2M", scene:"🕹️", query:"retro game console vintage technology no people" },

  { user:"@fictional_feed", caption:"A compact setup with serious power", tags:"#technology #gaming", likes:"1.3M", scene:"💻", query:"PC computer setup desk technology no people" },

  { user:"@fictional_feed", caption:"From stone to sculpture", tags:"#sculpture #art", likes:"2.8M", scene:"🗿", query:"marble sculpture carving workshop no people" },

  { user:"@fictional_feed", caption:"Ink meeting paper", tags:"#art #design", likes:"1.9M", scene:"🎨", query:"ink drawing art paper closeup no people" },

  { user:"@fictional_feed", caption:"Glass glowing at extreme temperatures", tags:"#craft #glass", likes:"5.1M", scene:"🔥", query:"molten glass glassblowing closeup no people" },

  { user:"@fictional_feed", caption:"The ocean never stays still", tags:"#ocean #waves", likes:"2.6M", scene:"🌊", query:"large ocean waves empty coastline no people" },

  { user:"@fictional_feed", caption:"Small changes add up", tags:"#fitness #routine", likes:"4.8M", scene:"⏱️", query:"fitness equipment empty gym no people" },

  { user:"@fictional_feed", caption:"Rock, texture, and gravity", tags:"#nature #landscape", likes:"6.2M", scene:"🪨", query:"rock cliff mountain landscape no people" },

  { user:"@fictional_feed", caption:"Geometry above the rooftops", tags:"#architecture #city", likes:"3.9M", scene:"🏙️", query:"paris rooftops architecture aerial no people" },

  { user:"@fictional_feed", caption:"Three days in the making", tags:"#baking #pastry", likes:"431K", scene:"🥐", query:"croissant pastry baking closeup no people" },

  { user:"@fictional_feed", caption:"Turquoise water and limestone", tags:"#travel #nature", likes:"1.4M", scene:"🏝️", query:"philippines lagoon turquoise water aerial no people" },

  { user:"@fictional_feed", caption:"Denim never really goes away", tags:"#fashion #denim", likes:"678K", scene:"👖", query:"vintage denim jeans clothing flat lay no people" },

  { user:"@fictional_feed", caption:"A study in color", tags:"#design #color", likes:"2.4M", scene:"🌈", query:"color palette objects design abstract no people" },

  { user:"@fictional_feed", caption:"A game of light and shadow", tags:"#gaming #technology", likes:"4.5M", scene:"🎮", query:"arcade gaming machines empty no people" },

  { user:"@fictional_feed", caption:"Built from an empty screen", tags:"#technology #coding", likes:"876K", scene:"💻", query:"computer code screen programming desk no people" },

  { user:"@fictional_feed", caption:"Turning concrete into color", tags:"#mural #streetart", likes:"3.2M", scene:"🖌️", query:"large colorful mural wall empty street no people" },

  { user:"@fictional_feed", caption:"The trail continues beyond the frame", tags:"#nature #landscape", likes:"1.7M", scene:"🥾", query:"empty hiking trail forest landscape no people" },

  { user:"@fictional_feed", caption:"A kitchen experiment gone slightly wrong", tags:"#food #comedy", likes:"654K", scene:"🍳", query:"messy kitchen cooking ingredients no people" },

  { user:"@fictional_feed", caption:"When the plan meets reality", tags:"#comedy #everyday", likes:"3.1M", scene:"📦", query:"messy desk spilled objects everyday life no people" },

  // ASMR / sensory content

  { user:"@fictional_feed", caption:"The sound of rain on glass 🌧️", tags:"#asmr #rain #relaxing", likes:"1.6M", scene:"🌧️", query:"rain window closeup ASMR no people" },

  { user:"@fictional_feed", caption:"Perfectly satisfying water sounds", tags:"#asmr #water #satisfying", likes:"934K", scene:"💧", query:"water pouring closeup ASMR no people" },

  { user:"@fictional_feed", caption:"Crunch, crackle, repeat", tags:"#asmr #satisfying #sounds", likes:"2.1M", scene:"🍂", query:"leaves crunching closeup ASMR no people animals" },

  { user:"@fictional_feed", caption:"The sound of waves hitting the shore 🌊", tags:"#asmr #ocean #relaxing", likes:"3.2M", scene:"🌊", query:"ocean waves shoreline ASMR no people animals" },

  { user:"@fictional_feed", caption:"A little storm ambience ⛈️", tags:"#asmr #rain #nature", likes:"1.4M", scene:"⛈️", query:"rain storm window ASMR no people animals" },

  { user:"@fictional_feed", caption:"Pages turning in a quiet room 📖", tags:"#asmr #books #sounds", likes:"786K", scene:"📖", query:"book pages turning ASMR no people" },

];

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

const resolvedURLs = new Array(CARDS.length).fill(null);
const resolvedThumbs = new Array(CARDS.length).fill(null);

const SVG = {
  thumbsUp: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H2v9zm18.5-9H14V7a3 3 0 0 0-3-3h-.5L8 10.5V20h9.5l2.5-6.5.5-1.5c0-.83-.67-1.5-1.5-1.5z"/></svg>',
  thumbsDown: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2V4zM3.5 13H10v4a3 3 0 0 0 3 3h.5l2.5-6.5V4H7l-2.5 6.5-.5 1.5c0 .83.67 1.5 1.5 1.5z"/></svg>',
};

/* =========================================================
   CONSTANTS
   ========================================================= */
const SESSION_SECS = 8 * 60;
const CUE1_CARD    = 8;
const CUE2_CARD    = 20;
const SKIP_THRESHOLD_SEC = 1;
const GRAMS_PER_AUTOPLAYED_VIDEO = 0.2;

/* =========================================================
   BEHAVIORAL LOG
   ========================================================= */
const log = {
  participantCode:"", studyCondition:"", sessionStart:null, sessionEnd:null,
  sessionEndReason:"", totalTimeSec:0, cardsViewed:0, skippedCards:0,
  timeBeforeFirstCueSec:null, timePerCard:{},
  likedCards:[], dislikedCards:[], buttonInteractions:[],
  ecoModeEnabled:false, ecoModeFirstTimestamp:null,
  ecoModeToggleCount:0, ecoModeOnAtEnd:false,
  ecoModeDisabled:false, ecoModeDisabledTimestamp:null,
  cardsWatchedWithEcoOn: 0,
  ecoModeLatency: null,
  cue1:{ shown:false, shownAt:null, action:null, closedAt:null, readingTimeSec:0, interactions:0 },
  cue2:{ shown:false, shownAt:null, action:null, closedAt:null, readingTimeSec:0, interactions:0 },
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
function fmtMSS(s) { return Math.floor(s/60)+":"+(String(s%60).padStart(2,"0")); }
function logBtn(n) { log.buttonInteractions.push({button:n, timestamp:new Date().toISOString(), elapsedSec:elapsed()}); }
function showModal(id){ document.getElementById(id).classList.add("visible"); }
function hideModal(id){ document.getElementById(id).classList.remove("visible"); }
function $(id)     { return document.getElementById(id); }

/* =========================================================
   LIVE CO2 -- single source of truth for both popups
   ========================================================= */
function autoPlayedCount() { return S.currentCard + 1; }
function totalCO2Grams()   { return autoPlayedCount() * GRAMS_PER_AUTOPLAYED_VIDEO; }
function fmtCO2(grams)     { return grams.toFixed(1) + "g"; }

function countSkippedCards() {
  let skipped = 0;
  for (let i = 0; i < S.currentCard; i++) {
    const timeSpent = log.timePerCard[i] || 0;
    if (timeSpent < SKIP_THRESHOLD_SEC) skipped++;
  }
  return skipped;
}

/* =========================================================
   PEXELS API
   ========================================================= */
async function fetchVideoURL(cardIndex) {
  const query = encodeURIComponent(CARDS[cardIndex].query);
  const url   = "https://api.pexels.com/videos/search?query=" + query
              + "&per_page=5&orientation=portrait&size=medium";
  try {
    const res  = await fetch(url, { headers: { Authorization: CONFIG.PEXELS_API_KEY } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.videos || data.videos.length === 0) return null;

    const video = data.videos[Math.floor(Math.random() * data.videos.length)];

    const files = (video.video_files || [])
      .filter(f => f.file_type === "video/mp4" && f.link)
      .sort((a, b) => {
        const aPort = a.height > a.width ? 1 : 0;
        const bPort = b.height > b.width ? 1 : 0;
        if (bPort !== aPort) return bPort - aPort;
        const aScore = Math.abs(a.height - 900);
        const bScore = Math.abs(b.height - 900);
        return aScore - bScore;
      });

    return {
      videoUrl: files.length > 0 ? files[0].link : null,
      thumbUrl: video.image || null
    };
  } catch (e) {
    return null;
  }
}

const fetchedIndices = new Set();

async function fetchVideosAround(centerIdx) {
  const toFetch = [];
  for (let i = centerIdx; i < Math.min(centerIdx + 6, CARDS.length); i++) {
    if (!fetchedIndices.has(i)) {
      fetchedIndices.add(i);
      toFetch.push(i);
    }
  }
  if (toFetch.length === 0) return;

  await Promise.all(toFetch.map(async i => {
    const result = await fetchVideoURL(i);
    if (result) {
      resolvedURLs[i]  = result.videoUrl;
      resolvedThumbs[i] = result.thumbUrl;
      const vid = $("vid-" + i);
      if (vid && !vid.src && result.videoUrl) {
        vid.src = result.videoUrl;
        vid.addEventListener("canplay", () => {
          const scene = $("vscene-" + i);
         /* only hide scene and autoplay if this is the active card and eco is off */
    if (i === S.currentCard && !S.ecoOn) {
            const scene = $("vscene-" + i);
      if (scene) scene.style.display = "none";
      vid.play().catch(() => {});
    }
        }, { once: true });
      }
      if (vid && result.thumbUrl) {
        vid.poster = result.thumbUrl;
      }
    }
  }));
}

/* =========================================================
   CONDITION TOGGLE
   ========================================================= 
document.querySelectorAll(".condition-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".condition-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    studyCondition = btn.dataset.cond;
  });
});*/
const urlParams    = new URLSearchParams(window.location.search);
const studyCondition = urlParams.get("condition") === "experiment" ? "experiment" : "control";

/* =========================================================
   CODE SCREEN
   ========================================================= */
const inputCode = $("input-code");
const btnStart  = $("btn-start");

inputCode.addEventListener("input",   () => { btnStart.disabled = !inputCode.value.trim(); });
inputCode.addEventListener("keydown", e  => { if(e.key==="Enter" && !btnStart.disabled) btnStart.click(); });

btnStart.addEventListener("click", () => {
  log.participantCode = inputCode.value.trim().toUpperCase();
  log.studyCondition = studyCondition;
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
        "<div class='play-ring'>&#9654;</div>"  +
      "</div>" +
      "<div class='card-overlay'>" +
        "<div class='card-username'>"+d.user+"</div>" +
        "<div class='card-caption'>"+d.caption+" <span class='card-hashtags'>"+d.tags+"</span></div>" +
      "</div>" +
      "<div class='card-sidebar'>" +
        "<div class='side-btn' id='like-" + i + "' onclick='handleLike(" + i + ")'>" +
          "<div class='side-icon-wrap'><div class='side-icon-circle'>" + SVG.thumbsUp + "</div></div>" +
        "</div>" +
        "<div class='side-btn' id='dislike-" + i + "' onclick='handleDislike(" + i + ")'>" +
          "<div class='side-icon-wrap'><div class='side-icon-circle'>" + SVG.thumbsDown + "</div></div>" +
          "<span class='side-count' id='dc-" + i + "'></span>" +
        "</div>" +
      "</div>";

    container.appendChild(card);
  });
}

/* =========================================================
   VIDEO SYNC
   ========================================================= */
function syncVideos(activeIdx) {
  CARDS.forEach((_, i) => {
    const v = $("vid-" + i);
        const scene = $("vscene-" + i);

    if (!v || !v.src) return;
    if (i === activeIdx) {
      if (!S.ecoOn && v.src) {
        v.play().catch(() => {});
                if (scene) scene.style.display = "none";

      } else {
        v.pause();
        if (scene) {
          scene.style.display = "flex";
          updatePlayIcon(scene, false);
        }
      }
    } else {
      v.pause();
      v.currentTime = 0;
      /* restore play icon on non-active cards so eco re-entry shows correctly */
      if (scene) {
        scene.style.display = "flex";
        updatePlayIcon(scene, false);
      }
    }
  });
}
function updatePlayIcon(sceneEl, isPlaying) {
  const ring = sceneEl.querySelector(".play-ring");
  if (ring) ring.innerHTML = isPlaying ? "&#9646;&#9646;" : "&#9654;";
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
async function startFeed() {
  const feed = $("feed-container");
  feed.classList.add("active");
  //$("session-timer").style.display   = "block";
  $("eco-badge").style.display       = "none";
  //$("btn-end-session").style.display = "block";

  log.sessionStart = now();
  S.cardEnteredAt  = now();
  S.currentCard    = 0;
  log.cardsViewed  = 1;

  await fetchVideosAround(0);
  syncVideos(0);

  /*S.timerInterval = setInterval(() => {
    S.elapsedSec    = elapsed();
    const rem       = Math.max(0, SESSION_SECS - S.elapsedSec);
    const t         = $("session-timer");
    t.textContent   = fmtMSS(rem);
    t.classList.toggle("warning", rem <= 60);
    if (rem === 0) { log.sessionEndReason = "time-limit-session"; endSession(); }
  }, 1000);*/

  feed.addEventListener("scroll", onScroll, {passive:true});
}

function onScroll() {
  const feed = $("feed-container");
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
    /* end session when participant reaches the last card */
    if (newIdx >= CARDS.length - 1) {
      log.sessionEndReason = "end-of-feed";
      setTimeout(endSession, 3000);   /* 3 second delay so they see the last card */
    }
  }
}

/* =========================================================
   CUES (card-index triggered, experiment condition only)
   ========================================================= */
function checkCues(idx) {
  if (studyCondition !== "experiment") return;
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
  
  const co2 = totalCO2Grams();

  $("eco-badge").style.display = "flex";

  $("cue1-count").textContent   = autoPlayedCount();
  $("cue1-co2-val").textContent = fmtCO2(co2);
  showModal("modal-layer1");
}

function showCue2() {
  const co2 = totalCO2Grams();
   const ecoCo2  = co2 * 0.3;
  //$("cue2-co2").textContent = fmtCO2(co2);
   $("cue2-std-co2").textContent = fmtCO2(co2);
  $("cue2-eco-co2").textContent = fmtCO2(ecoCo2);

  const btn = $("cue2-eco-toggle");
  if (S.ecoOn) {
    btn.textContent = "Turn off Eco Mode";
    btn.className   = "mbtn dark";
  } else {
    btn.textContent = "Enable Eco Mode";
    btn.className   = "mbtn grn";
  }
  showModal("modal-layer2");
}

/* =========================================================
   END SESSION BUTTON
   ========================================================= 
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
*/

function closeCue1(action) {
  log.cue1.action         = action;
  log.cue1.closedAt       = new Date().toISOString();
  log.cue1.readingTimeSec = Math.floor((new Date(log.cue1.closedAt) - new Date(log.cue1.shownAt)) / 1000);
  hideModal("modal-layer1");
}

function closeCue2(action) {
  log.cue2.action         = action;
  log.cue2.closedAt       = new Date().toISOString();
  log.cue2.readingTimeSec = Math.floor((new Date(log.cue2.closedAt) - new Date(log.cue2.shownAt)) / 1000);
  hideModal("modal-layer2");
}
/* =========================================================
   ECO BADGE -- reuses Cue 2 modal
   ========================================================= */
$("eco-badge").addEventListener("click", () => {
  logBtn("eco-badge-tap");
  //log.cue3.opened    = true;
 // log.cue3.openCount++;
  //if (!log.cue3.openedAt) log.cue3.openedAt = new Date().toISOString();
  log.badgeTaps.push({ at: new Date().toISOString(), ecoWas: S.ecoOn });
  showCue2();
});

/* =========================================================
   MODAL 1 (Layer 1)
   ========================================================= */
$("skip1").addEventListener("click", () => {
  logBtn("cue1-skip"); log.cue1.interactions++; closeCue1("skip");
});
$("cue1-continue").addEventListener("click", () => {
  logBtn("cue1-continue"); log.cue1.interactions++; closeCue1("continue");
});
$("cue1-tellmore").addEventListener("click", () => {
  logBtn("cue1-tell-more"); log.cue1.interactions++; closeCue1("tell-more");
  S.cue2Done=true; log.cue2.shown=true; log.cue2.shownAt=new Date().toISOString();
  setTimeout(showCue2, 320);
});

/* =========================================================
   MODAL 2 (Layer 2) -- also handles badge tap re-entry
   ========================================================= */
$("skip2").addEventListener("click", () => {
  logBtn("cue2-skip"); log.cue2.interactions++; closeCue2("skip");
});
$("cue2-continue").addEventListener("click", () => {
  logBtn("cue2-continue"); log.cue2.interactions++; closeCue2("continue");
});
$("cue2-eco-toggle").addEventListener("click", () => {
  log.cue2.interactions++;
  if (S.ecoOn) {
    disableEco(); logBtn("cue2-eco-off"); closeCue2("eco-off");
  } else {
    enableEco(); logBtn("cue2-eco-on"); closeCue2("eco-on");
  }
});

/* =========================================================
   ECO MODE
   ========================================================= */
function enableEco() {
  S.ecoOn = true;
  if (!log.ecoModeEnabled) {   
  log.ecoModeEnabled=true; 
  log.ecoModeFirstTimestamp=new Date().toISOString(); 
    /* latency = seconds from Cue 2 being shown to eco mode being enabled */
    if (log.cue2.shownAt) {
      log.ecoModeLatency = Math.floor(
        (new Date(log.ecoModeFirstTimestamp) - new Date(log.cue2.shownAt)) / 1000
      );
    }
  }
  log.ecoModeToggleCount++;
  $("eco-badge").className  = "eco-on";
  $("eco-leaf").textContent = "🟢 Eco Mode On";
  $("feed-container").style.filter = "brightness(.87) saturate(.62)";
  const v = $("vid-" + S.currentCard);
  const scene = $("vscene-" + S.currentCard);

  if (v) v.pause();
  if (scene) {
    scene.style.display = "flex";
    updatePlayIcon(scene, false);
  }
}
function disableEco() {
  S.ecoOn = false; log.ecoModeToggleCount++;
  log.ecoModeDisabled          = true;
  log.ecoModeDisabledTimestamp = new Date().toISOString();
  $("eco-badge").className  = "eco-off";
  $("eco-leaf").textContent = "🟠 Eco Mode Off";
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
  //clearInterval(S.timerInterval);
  const spent = Math.floor((now()-S.cardEnteredAt)/1000);
  log.timePerCard[S.currentCard] = (log.timePerCard[S.currentCard]||0)+spent;
  log.sessionEnd    = new Date().toISOString();
  log.totalTimeSec  = elapsed();
  log.ecoModeOnAtEnd = S.ecoOn;
  log.skippedCards = countSkippedCards();
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
  //$("session-timer").style.display   = "none";
  $("eco-badge").style.display       = "none";
 // $("btn-end-session").style.display = "none";

  if (phase==="code")  { $("screen-code").classList.remove("hidden"); }
  else if (phase==="feed") { buildFeed(); startFeed(); }
  else if (phase==="end")  {
    //renderLog();
    sendLogToSheets({
      participantCode: log.participantCode,
      studyCondition: log.studyCondition,
      sessionStart: log.sessionStart ? new Date(log.sessionStart).toISOString() : null,
      sessionEnd: log.sessionEnd,
      sessionEndReason: log.sessionEndReason,
      totalTimeSec: log.totalTimeSec,
      cardsViewed: log.cardsViewed,
      skippedCards: log.skippedCards,
      timeBeforeFirstCueSec: log.timeBeforeFirstCueSec,
      likedCards: log.likedCards,
      dislikedCards: log.dislikedCards,
      ecoModeEnabled: log.ecoModeEnabled,
      ecoModeToggleCount: log.ecoModeToggleCount,
      ecoModeOnAtEnd: log.ecoModeOnAtEnd,
      ecoModeDisabled:            log.ecoModeDisabled,
      ecoModeDisabledTimestamp:   log.ecoModeDisabledTimestamp,
      cue1:                       log.cue1,
      cue2:                       log.cue2,
      badgeTaps:                  log.badgeTaps,
      cardsWatchedWithEcoOn: log.cardsWatchedWithEcoOn,
      ecoModeLatency:        log.ecoModeLatency,
      buttonInteractions:         log.buttonInteractions,
    });
    $("screen-end").classList.remove("hidden");
  }
}

function playCard(i) {
  const v     = $("vid-" + i);
  const scene = $("vscene-" + i);
  if (!v) return;
  if (v.paused) {
    v.play().catch(() => {});
    if (scene) scene.style.display = "none";
    /* count intentional plays while eco mode is on */
    if (S.ecoOn) log.cardsWatchedWithEcoOn++;
  } else {
    v.pause();
    if (scene) {
      scene.style.display = "flex";
      updatePlayIcon(scene, false);
    }
  }
  logBtn("manual-play-card-" + i);
}

/* =========================================================
   LOG + EXPORT
   ========================================================= */
function sendLogToSheets(logData) {
  fetch(CONFIG.SHEETS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(logData)
  }).catch(() => {});
}

function renderLog() {
  const out = {
    participantCode: log.participantCode,
    studyCondition: log.studyCondition,
    sessionStart: log.sessionStart ? new Date(log.sessionStart).toISOString() : null,
    sessionEnd: log.sessionEnd,
    sessionEndReason: log.sessionEndReason,
    totalTimeSec: log.totalTimeSec,
    cardsViewed: log.cardsViewed,
    skippedCards: log.skippedCards,
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





//$("btn-restart").addEventListener("click", () => location.reload());

/* =========================================================
   INIT
   ========================================================= */
transitionTo("code");
