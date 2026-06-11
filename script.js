const menuToggle=document.querySelector("[data-menu-toggle]");
const nav=document.querySelector("[data-nav]");
const langButtons=document.querySelectorAll("[data-lang]");
let refreshVisualText=null;
const translations={
vi:{
"nav.package":"Tổng quan","nav.process":"Điểm nổi bật","nav.warranty":"Bảo hành","nav.contact":"Liên hệ","nav.cta":"Khám phá quyền lợi",
"hero.eyebrow":"Google AI Pro · 1 năm","hero.title":"Bớt việc lặp lại.\nThêm thời gian tạo giá trị.","hero.description":"Khi một chatbot là chưa đủ: nghiên cứu sâu hơn, tạo nội dung nhanh hơn, lập trình cùng AI agents và giữ mọi thứ trong hệ sinh thái Google.","hero.primaryCta":"Khám phá quyền lợi","hero.secondaryCta":"Xem gói 1 năm",
"package.label":"Gói hiện có","package.available":"Đang nhận đăng ký","package.price":"280k","package.year":"năm","package.useLabel":"Tư duy","package.useValue":"Gemini 3.5 Flash, Deep Research, NotebookLM","package.flowLabel":"Tạo dựng","package.flowValue":"Flow, Whisk, Veo và Antigravity","package.supportLabel":"Quyền lợi","package.supportValue":"1.000 AI credits/tháng + 5 TB","package.cta":"Xem toàn bộ điểm nổi bật",
"statement.text":"Đừng trả tiền cho AI chỉ để hỏi đáp. Hãy dùng nó để biến tài liệu thành insight, ý tưởng thành video và yêu cầu thành sản phẩm hoạt động được.",
"process.eyebrow":"Một gói, nhiều kết quả","process.title":"Từ vấn đề đến thành phẩm.","process.step1Title":"Ra quyết định với thông tin tốt hơn","process.step1Text":"Gemini 3.5 Flash xử lý bài toán phức tạp, Deep Research tổng hợp nhiều nguồn và NotebookLM biến tài liệu của bạn thành câu trả lời có căn cứ.","process.step2Title":"Biến ý tưởng thành nội dung có thể dùng","process.step2Text":"Tạo hình ảnh, cảnh quay và video với Flow, Veo và Whisk; gói Pro có 1.000 AI credits được làm mới mỗi tháng.","process.step3Title":"Giao việc lập trình cho AI agents","process.step3Text":"Google Antigravity giúp agents tự lập kế hoạch, thực thi và kiểm tra tác vụ phức tạp trên editor, terminal và trình duyệt, với hạn mức cao hơn cho thành viên AI Pro.",
"principles.clearTitle":"AI ngay nơi bạn làm việc","principles.clearText":"Dùng Gemini trong Gmail, Docs, Vids và nhiều ứng dụng Google quen thuộc, không phải liên tục đổi công cụ.","principles.fastTitle":"5 TB lưu trữ","principles.fastText":"Thêm không gian cho Drive, Gmail và Google Photos trong một gói.","principles.supportTitle":"Không chỉ là một chatbot","principles.supportText":"Một bộ công cụ cho học tập, nghiên cứu, nội dung, coding và công việc hằng ngày.",
"warranty.eyebrow":"An tâm sử dụng","warranty.title":"Bảo hành trong 2 tháng.","warranty.lead":"Tài khoản được bàn giao với toàn quyền kiểm soát — bạn có thể tự quản lý, cài đặt và sử dụng Google AI Pro theo nhu cầu.","warranty.coveredTitle":"Trường hợp được bảo hành","warranty.coveredText":"Áp dụng khi Google AI Pro bị thu hồi hàng loạt do thay đổi chính sách hoặc lỗi từ phía hệ thống Google, trong vòng 2 tháng kể từ ngày bàn giao.","warranty.excludedTitle":"Trường hợp không áp dụng","warranty.excludedText":"Tài khoản bị khóa do IP, thiết bị hoặc hành vi sử dụng bị Google đánh dấu bất thường; vi phạm chính sách Google; mất quyền truy cập do mạng, VPN, proxy hoặc bên thứ ba.","warranty.note":"Vui lòng liên hệ ngay khi phát sinh sự cố. Nếu cần hỗ trợ thêm trong quá trình sử dụng, bạn có thể cung cấp thông tin để được xử lý nhanh nhất.",
"contact.eyebrow":"Bước tiếp theo","contact.title":"Sẵn sàng làm nhiều hơn?","contact.text":"Sau khi đã xem đầy đủ quyền lợi, liên hệ để xác nhận điều kiện sử dụng và nhận hướng dẫn đăng ký Google AI Pro 1 năm.","contact.message":"Bắt đầu trò chuyện","footer.disclaimer":"Dịch vụ độc lập, không liên kết với Google."
},
en:{
"nav.package":"Overview","nav.process":"Highlights","nav.warranty":"Warranty","nav.contact":"Contact","nav.cta":"Explore benefits",
"hero.eyebrow":"Google AI Pro · 1 year","hero.title":"Less repetitive work.\nMore time to create value.","hero.description":"When one chatbot is not enough: research deeper, create content faster, code with AI agents, and keep your work inside the Google ecosystem.","hero.primaryCta":"Explore benefits","hero.secondaryCta":"View the 1-year plan",
"package.label":"Available plan","package.available":"Open for registration","package.price":"$10","package.year":"year","package.useLabel":"Think","package.useValue":"Gemini 3.5 Flash, Deep Research, NotebookLM","package.flowLabel":"Create","package.flowValue":"Flow, Whisk, Veo, and Antigravity","package.supportLabel":"Included","package.supportValue":"1,000 AI credits/month + 5 TB","package.cta":"See all highlights",
"statement.text":"Do not pay for AI just to chat. Use it to turn documents into insights, ideas into videos, and requirements into working products.",
"process.eyebrow":"One plan, more outcomes","process.title":"From problem to finished work.","process.step1Title":"Make decisions with better information","process.step1Text":"Gemini 3.5 Flash handles complex problems, Deep Research synthesizes sources, and NotebookLM grounds answers in your own material.","process.step2Title":"Turn ideas into usable content","process.step2Text":"Create images, scenes, and videos with Flow, Veo, and Whisk, backed by 1,000 AI credits refreshed each month.","process.step3Title":"Delegate coding work to AI agents","process.step3Text":"Google Antigravity lets agents plan, execute, and verify complex tasks across your editor, terminal, and browser, with higher limits for AI Pro members.",
"principles.clearTitle":"AI where you already work","principles.clearText":"Use Gemini in Gmail, Docs, Vids, and more familiar Google apps without constantly switching tools.","principles.fastTitle":"5 TB of storage","principles.fastText":"More space for Drive, Gmail, and Google Photos in one plan.","principles.supportTitle":"More than a chatbot","principles.supportText":"A practical toolkit for study, research, content, coding, and everyday work.",
"warranty.eyebrow":"Use with confidence","warranty.title":"2-month warranty.","warranty.lead":"The account is delivered with full control — you can manage, configure, and use Google AI Pro according to your needs.","warranty.coveredTitle":"What is covered","warranty.coveredText":"Coverage applies when Google AI Pro accounts are revoked on a large scale due to policy changes or errors in Google’s systems, within 2 months of delivery.","warranty.excludedTitle":"What is not covered","warranty.excludedText":"The account is locked because Google flags the IP address, device, or usage behavior as unusual; violations of Google policies; or loss of access caused by a network, VPN, proxy, or third party.","warranty.note":"Please contact us as soon as an issue occurs. If you need additional support during use, you may provide the relevant information so the issue can be handled as quickly as possible.",
"contact.eyebrow":"Next step","contact.title":"Ready to do more?","contact.text":"Now that you have seen the benefits, contact us to confirm usage terms and get registration guidance for the 1-year Google AI Pro plan.","contact.message":"Start a conversation","footer.disclaimer":"Independent service, not affiliated with Google."
}};
let currentLanguage=null;
const setLanguage=language=>{
if(currentLanguage===language)return;
currentLanguage=language;
const selected=translations[language]||translations.vi;
document.documentElement.lang=language;
document.querySelectorAll("[data-i18n]").forEach(element=>{const value=selected[element.dataset.i18n];if(value)element.textContent=value});
langButtons.forEach(button=>{const active=button.dataset.lang===language;button.classList.toggle("is-active",active);button.setAttribute("aria-pressed",String(active))});
try{localStorage.setItem("htvg-language",language)}catch{}
if(refreshVisualText)refreshVisualText();
};
let initialLanguage="vi";
try{initialLanguage=localStorage.getItem("htvg-language")==="en"?"en":"vi"}catch{}
langButtons.forEach(button=>button.addEventListener("click",()=>setLanguage(button.dataset.lang)));
setLanguage(initialLanguage);
const year=document.querySelector("[data-year]");if(year)year.textContent=new Date().getFullYear();
if(menuToggle&&nav){
const closeMenu=()=>{nav.classList.remove("is-open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","Open menu")};
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("is-open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Close menu":"Open menu")});
nav.addEventListener("click",event=>{if(event.target.closest("a"))closeMenu()});
document.addEventListener("click",event=>{if(!nav.contains(event.target)&&!menuToggle.contains(event.target))closeMenu()});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu()});
window.addEventListener("resize",()=>{if(window.innerWidth>900)closeMenu()});
}


/* Premium visual experience: GSAP, canvas, and desktop interactions. */
(()=>{
const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
if(reduceMotion.matches){document.documentElement.classList.remove("motion-enabled");return}
if(!window.gsap||!window.ScrollTrigger||!window.ScrollToPlugin){document.documentElement.classList.remove("motion-enabled");return}
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
document.documentElement.classList.add("visual-ready");
const finePointer=window.matchMedia("(pointer: fine)").matches;

// Hero canvas grid
const canvas=document.querySelector(".hero-grid");
const hero=document.querySelector(".hero");
if(canvas&&hero){
const context=canvas.getContext("2d");
let width=0,height=0,dpr=1,raf=0,pointerX=-9999,pointerY=-9999,canvasActive=false,heroVisible=true;
const lineColor=getComputedStyle(document.documentElement).getPropertyValue("--line").trim()||"#d9d9d0";
const resizeCanvas=()=>{const rect=hero.getBoundingClientRect();dpr=Math.min(window.devicePixelRatio||1,2);width=window.innerWidth;height=rect.height;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);canvas.style.width=width+"px";canvas.style.height=height+"px";context.setTransform(dpr,0,0,dpr,0,0)};
const draw=time=>{if(!canvasActive)return;context.clearRect(0,0,width,height);const pulse=.28+Math.sin(time/800)*.07;const gap=42;context.fillStyle=lineColor;for(let y=-gap;y<height+gap;y+=gap){const offset=(Math.round(y/gap)%2)*gap/2;for(let x=-gap;x<width+gap;x+=gap){const px=x+offset;const distance=Math.hypot(px-pointerX,y-pointerY);const ripple=finePointer&&distance<150?(1-distance/150)*1.8:0;context.globalAlpha=Math.min(.72,pulse+ripple*.18);context.beginPath();context.arc(px,y,1+ripple,0,Math.PI*2);context.fill()}}context.globalAlpha=1;raf=requestAnimationFrame(draw)};
const startCanvas=()=>{if(canvasActive||document.hidden||!heroVisible)return;canvasActive=true;raf=requestAnimationFrame(draw)};
const stopCanvas=()=>{canvasActive=false;cancelAnimationFrame(raf)};
resizeCanvas();
window.addEventListener("resize",resizeCanvas,{passive:true});
if(finePointer)hero.addEventListener("pointermove",event=>{const rect=canvas.getBoundingClientRect();pointerX=event.clientX-rect.left;pointerY=event.clientY-rect.top});
ScrollTrigger.create({trigger:hero,start:"top bottom",end:"bottom top",onToggle:self=>{heroVisible=self.isActive;if(heroVisible)startCanvas();else stopCanvas()}});
startCanvas();
document.addEventListener("visibilitychange",()=>{if(document.hidden)stopCanvas();else if(heroVisible)startCanvas()});
}

// Hero entrance
const title=document.querySelector(".hero h1");
const splitHeroTitle=()=>{if(!title)return[];const lines=title.textContent.split("\n");title.textContent="";return lines.map(line=>{const span=document.createElement("span");span.className="hero-title-line";span.textContent=line;title.appendChild(span);return span})};
let titleLines=splitHeroTitle();
gsap.set(title,{opacity:1});
gsap.set(".hero .eyebrow, .hero-description, .hero-actions",{y:20});
gsap.set(titleLines,{y:20});
gsap.set(".offer-card",{x:40});
gsap.timeline({delay:.15,defaults:{clearProps:"transform"}})
.to(".hero .eyebrow",{opacity:1,y:0,duration:.6,ease:"power2.out"})
.to(titleLines,{opacity:1,y:0,duration:.8,stagger:.12,ease:"power3.out"},"-=.25")
.to(".offer-card",{opacity:1,x:0,duration:.9,ease:"power2.out"},"<")
.to([".hero-description",".hero-actions"],{opacity:1,y:0,duration:.65,stagger:.1,ease:"power2.out"},"-=.38");

// Scroll-triggered section entrances
const revealOnce=(targets,from,to)=>gsap.utils.toArray(targets).forEach(target=>gsap.fromTo(target,from,{...to,scrollTrigger:{trigger:target,start:"top 85%",once:true}}));
revealOnce(".section-intro",{y:28},{opacity:1,y:0,duration:.75,ease:"power3.out"});
revealOnce(".steps li",{x:-38},{opacity:1,x:0,duration:.75,ease:"power3.out"});
revealOnce(".principles article",{y:36},{opacity:1,y:0,duration:.75,ease:"power3.out"});
revealOnce(".warranty-heading",{x:-32},{opacity:1,x:0,duration:.8,ease:"power3.out"});
gsap.fromTo(".warranty-card, .warranty-note",{y:34},{opacity:1,y:0,duration:.75,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:".warranty-details",start:"top 85%",once:true}});
gsap.fromTo(".contact-copy, .contact-actions",{x:index=>index?32:-32},{opacity:1,x:0,duration:.8,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:".contact",start:"top 85%",once:true}});

// Offer price counter and statement reading highlight
let priceTween=null;
const animatedPrices=new Set();
const parsePrice=value=>{const match=value.trim().match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);if(!match)return null;const decimals=(match[2].split(/[.,]/)[1]||"").length;return{label:value.trim(),prefix:match[1],target:Number(match[2].replace(",",".")),suffix:match[3],decimals}};
const buildPriceCounter=()=>{const price=document.querySelector(".offer-price");if(priceTween){priceTween.scrollTrigger?.kill();priceTween.kill();priceTween=null}if(!price)return;const config=parsePrice(price.textContent);if(!config||animatedPrices.has(config.label))return;const counter={value:0};const render=()=>{const value=config.decimals?counter.value.toFixed(config.decimals):Math.round(counter.value);price.textContent=config.prefix+value+config.suffix};priceTween=gsap.to(counter,{value:config.target,duration:1.2,ease:"power2.out",scrollTrigger:{trigger:price,start:"top 85%",once:true},onStart:()=>animatedPrices.add(config.label),onUpdate:render,onComplete:()=>{render();priceTween=null}})};
let statementTween=null;
const buildStatement=()=>{const paragraph=document.querySelector(".statement p");if(!paragraph)return;if(statementTween){statementTween.scrollTrigger?.kill();statementTween.kill()}const words=paragraph.textContent.trim().split(/\s+/);paragraph.textContent="";words.forEach((word,index)=>{const span=document.createElement("span");span.className="statement-word";span.textContent=word;paragraph.append(span,index<words.length-1?" ":"")});statementTween=gsap.to(paragraph.querySelectorAll(".statement-word"),{color:"var(--ink)",stagger:.04,ease:"none",scrollTrigger:{trigger:".statement",start:"top 72%",end:"bottom 35%",scrub:true}})};
buildPriceCounter();
buildStatement();
refreshVisualText=()=>{titleLines=splitHeroTitle();gsap.set(titleLines,{opacity:1});buildPriceCounter();buildStatement();ScrollTrigger.refresh()};

if(finePointer){
// Offer card 3D tilt
const card=document.querySelector(".offer-card");
const shine=card?.querySelector(".offer-shine");
if(card&&shine){
const rotateX=gsap.quickTo(card,"rotationX",{duration:.35,ease:"power3.out"});
const rotateY=gsap.quickTo(card,"rotationY",{duration:.35,ease:"power3.out"});
card.addEventListener("pointermove",event=>{const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width;const y=(event.clientY-rect.top)/rect.height;gsap.set(card,{transformPerspective:1000});rotateX((.5-y)*20);rotateY((x-.5)*20);card.style.setProperty("--shine-x",x*100+"%");card.style.setProperty("--shine-y",y*100+"%");gsap.to(shine,{opacity:.08,duration:.2})});
card.addEventListener("pointerleave",()=>{gsap.to(card,{rotationX:0,rotationY:0,duration:.6,ease:"elastic.out(1,.5)"});gsap.to(shine,{opacity:0,duration:.3})});
}

// Magnetic hero actions
document.querySelectorAll(".hero-actions .button-dark, .hero-actions .text-link").forEach(button=>{
const moveX=gsap.quickTo(button,"x",{duration:.3,ease:"power3.out"});
const moveY=gsap.quickTo(button,"y",{duration:.3,ease:"power3.out"});
window.addEventListener("pointermove",event=>{const rect=button.getBoundingClientRect();const centerX=rect.left+rect.width/2;const centerY=rect.top+rect.height/2;const dx=event.clientX-centerX;const dy=event.clientY-centerY;const outsideX=Math.max(rect.left-event.clientX,0,event.clientX-rect.right);const outsideY=Math.max(rect.top-event.clientY,0,event.clientY-rect.bottom);const distance=Math.hypot(outsideX,outsideY);if(distance<=60){const strength=1-distance/60;moveX(Math.max(-8,Math.min(8,dx/(rect.width/2+60)*8*strength)));moveY(Math.max(-8,Math.min(8,dy/(rect.height/2+60)*8*strength)))}else{moveX(0);moveY(0)}});
});

// Custom cursor
const cursor=document.querySelector(".custom-cursor");
if(cursor){
const cursorX=gsap.quickTo(cursor,"x",{duration:.18,ease:"power2.out"});
const cursorY=gsap.quickTo(cursor,"y",{duration:.18,ease:"power2.out"});
window.addEventListener("pointermove",event=>{cursorX(event.clientX);cursorY(event.clientY);gsap.to(cursor,{opacity:1,duration:.2})});
document.addEventListener("pointerover",event=>{if(event.target.closest("a,button"))gsap.to(cursor,{scale:2.5,backgroundColor:"rgba(23,23,20,.08)",duration:.2})});
document.addEventListener("pointerout",event=>{if(event.target.closest("a,button"))gsap.to(cursor,{scale:1,backgroundColor:"rgba(23,23,20,0)",duration:.2})});
document.documentElement.addEventListener("mouseleave",()=>gsap.to(cursor,{opacity:0,duration:.2}));
}
}

// Smooth anchors and active navigation
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",event=>{const target=document.querySelector(link.getAttribute("href"));if(!target)return;event.preventDefault();gsap.to(window,{duration:.9,scrollTo:{y:target,offsetY:72},ease:"power3.inOut"})}));
document.querySelectorAll('.nav a[href^="#"]:not(.nav-cta)').forEach(link=>{const section=document.querySelector(link.getAttribute("href"));if(section)ScrollTrigger.create({trigger:section,start:"top 45%",end:"bottom 45%",onToggle:self=>link.classList.toggle("is-active",self.isActive)})});

// External contact page transition
const overlay=document.querySelector(".page-transition");
let transitionFallback=0;
const resetPageTransition=()=>{if(!overlay)return;window.clearTimeout(transitionFallback);gsap.killTweensOf(overlay);gsap.set(overlay,{autoAlpha:0,pointerEvents:"none"})};
resetPageTransition();
window.addEventListener("pageshow",resetPageTransition);
window.addEventListener("pagehide",resetPageTransition);
window.addEventListener("focus",resetPageTransition);
document.addEventListener("visibilitychange",()=>{if(!document.hidden)resetPageTransition()});
document.querySelectorAll('.contact-row[href^="http"]').forEach(link=>link.addEventListener("click",event=>{if(link.target==="_blank"||!overlay||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();resetPageTransition();gsap.set(overlay,{pointerEvents:"auto"});gsap.to(overlay,{autoAlpha:1,duration:.3,ease:"power1.out",onComplete:()=>{window.location.assign(link.href)}});transitionFallback=window.setTimeout(resetPageTransition,1800)}));
ScrollTrigger.refresh();
})();
