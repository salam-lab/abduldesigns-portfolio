function DivFooterLeft() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.footer-left">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[13.1px] whitespace-nowrap">
        <p>
          <span className="leading-[20.99px]">Abdul Salam</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20.99px] not-italic text-[#8a96ae]">{` · UI/UX & Product Designer`}</span>
        </p>
      </div>
    </div>
  );
}

function DivFooterTagline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.footer-tagline">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#4a5568] text-[12.5px] whitespace-nowrap">
        <p className="leading-[19.97px]">Good design is invisible. Bad design is unforgettable.</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-[312px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DivFooterLeft />
        <DivFooterTagline />
      </div>
    </div>
  );
}

function DivFooterLinks() {
  return (
    <div className="h-[21px] relative shrink-0" data-name="div.footer-links">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative size-full">
        <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Component 1">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] whitespace-nowrap" href="mailto:hello@abdulsalam.design" target="_blank">
            <p className="cursor-pointer leading-[20.99px]">Email</p>
          </a>
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[52.16999816894531px] relative self-stretch shrink-0" data-name="Component 1">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] whitespace-nowrap" href="https://linkedin.com/" target="_blank">
            <p className="cursor-pointer leading-[20.99px]">LinkedIn</p>
          </a>
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[52.61000061035156px] relative self-stretch shrink-0" data-name="Component 1">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] whitespace-nowrap" href="https://dribbble.com/" target="_blank">
            <p className="cursor-pointer leading-[20.99px]">Dribbble</p>
          </a>
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[49.689998626708984px] relative self-stretch shrink-0" data-name="Component 1">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html" target="_blank">
            <p className="cursor-pointer leading-[20.99px]">Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-center flex flex-wrap items-center justify-between left-0 pb-[40px] pt-[41px] px-[64px] right-0 top-[6216.77px]" data-name="FOOTER">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <Div />
      <DivFooterLinks />
    </div>
  );
}

function Span() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-0.24px)] pb-[0.92px] top-[-1px]" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[11.2px] tracking-[1.12px] uppercase whitespace-nowrap">
        <p className="leading-[17.92px]">Scroll</p>
      </div>
    </div>
  );
}

function DivScrollHint() {
  return (
    <div className="absolute bottom-[40px] h-[65.92px] left-1/2 right-[47.37%]" data-name="div.scroll-hint">
      <Span />
      <div className="-translate-x-1/2 absolute bg-gradient-to-b from-[#4f8ef7] h-[40px] left-[calc(50%-0.01px)] to-[rgba(79,142,247,0)] top-[25.92px] w-px" data-name="div.scroll-line" />
    </div>
  );
}

function DivHeroBadge() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] content-stretch flex gap-[8px] items-center px-[15px] py-[7px] relative rounded-[100px] shrink-0" data-name="div.hero-badge">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-[#4f8ef7] relative rounded-[3px] shrink-0 size-[6px]" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12.5px] whitespace-nowrap">
        <p className="leading-[19.97px]">Available for new projects</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3.825px] relative shrink-0 w-full" data-name="h1">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[72px] text-white tracking-[-2.16px] whitespace-nowrap">
        <p className="leading-[76.32px] mb-0">Designing</p>
        <p className="leading-[76.32px] mb-0">products</p>
        <p className="leading-[76.32px] mb-0">people</p>
        <p className="leading-[76.32px] mb-0 text-[#4f8ef7]">actually</p>
        <p className="leading-[76.32px] text-[#4f8ef7]">love</p>
      </div>
    </div>
  );
}

function PHeroSub() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[460px] relative shrink-0 w-[460px]" data-name="p.hero-sub">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[16.8px] whitespace-nowrap">
        <p className="leading-[28.56px] mb-0">{`I'm Abdul Salam — a UI/UX & Product Designer who`}</p>
        <p className="leading-[28.56px] mb-0">bridges sharp research with pixel-perfect execution. 4+</p>
        <p className="leading-[28.56px] mb-0">years crafting digital experiences for SaaS, fintech, and</p>
        <p className="leading-[28.56px]">logistics.</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-left text-white whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[23px]">→</p>
      </div>
    </div>
  );
}

function DivBtnGroup() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_14px] h-[102.4px] items-start pb-[32.7px] pt-[16.7px] relative shrink-0 w-full" data-name="div.btn-group">
      <a className="bg-[#4f8ef7] cursor-pointer relative rounded-[10px] self-stretch shrink-0" href="http://localhost:12402/__h2d_index.html#work" target="_blank" data-name="Component 2">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[28px] py-[14px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-left text-white whitespace-nowrap" role="link" tabIndex="0">
              <p className="cursor-pointer leading-[23px]">View Case Studies</p>
            </div>
            <Span1 />
          </div>
        </div>
      </a>
      <div className="relative rounded-[10px] self-stretch shrink-0" data-name="Component 1">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[29px] py-[15px] relative size-full">
            <a className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[14.4px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html" target="_blank">
              <p className="cursor-pointer leading-[23px]">Download Resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivStatNum() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat-num">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.96px] whitespace-nowrap">
        <p>
          <span className="leading-[51.2px]">4</span>
          <span className="leading-[51.2px] text-[#4f8ef7]">+</span>
        </p>
      </div>
    </div>
  );
}

function DivStatLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat-label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] whitespace-nowrap">
        <p className="leading-[19.97px]">Years of experience</p>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="relative self-stretch shrink-0 w-[118px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.99px] items-start relative size-full">
        <DivStatNum />
        <DivStatLabel />
      </div>
    </div>
  );
}

function DivStatNum1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat-num">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.96px] whitespace-nowrap">
        <p>
          <span className="leading-[51.2px]">30</span>
          <span className="leading-[51.2px] text-[#4f8ef7]">+</span>
        </p>
      </div>
    </div>
  );
}

function DivStatLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat-label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] whitespace-nowrap">
        <p className="leading-[19.97px]">Products shipped</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="relative self-stretch shrink-0 w-[104px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.99px] items-start relative size-full">
        <DivStatNum1 />
        <DivStatLabel1 />
      </div>
    </div>
  );
}

function DivStatNum2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat-num">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[32px] text-white tracking-[-0.96px] whitespace-nowrap">
        <p>
          <span className="leading-[51.2px]">12</span>
          <span className="leading-[51.2px] text-[#4f8ef7]">+</span>
        </p>
      </div>
    </div>
  );
}

function DivStatLabel2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.stat-label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] whitespace-nowrap">
        <p className="leading-[19.97px]">Happy clients</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="relative self-stretch shrink-0 w-[81px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.99px] items-start relative size-full">
        <DivStatNum2 />
        <DivStatLabel2 />
      </div>
    </div>
  );
}

function DivHeroStats() {
  return (
    <div className="content-stretch flex gap-[40px] h-[114.99px] items-start pt-[41px] relative shrink-0 w-full" data-name="div.hero-stats">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.06)] border-solid border-t inset-0 pointer-events-none" />
      <Div1 />
      <Div2 />
      <Div3 />
    </div>
  );
}

function DivHeroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[23.3px] items-start min-w-[560px] relative shrink-0" data-name="div.hero-content">
      <DivHeroBadge />
      <H />
      <PHeroSub />
      <DivBtnGroup />
      <DivHeroStats />
    </div>
  );
}

function DivAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10.08px] pt-[8.92px] relative rounded-[24px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(79, 142, 247) 0%, rgb(123, 94, 167) 100%)" }} data-name="div.avatar">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[17.6px] text-center text-white whitespace-nowrap">
        <p className="leading-[28.16px]">AS</p>
      </div>
    </div>
  );
}

function DivCardName() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="div.card-name">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[15.2px] whitespace-nowrap">
        <p className="leading-[24.32px]">Abdul Salam</p>
      </div>
    </div>
  );
}

function DivCardRole() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24.31px]" data-name="div.card-role">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] whitespace-nowrap">
        <p className="leading-[19.97px]">{`UI/UX & Product Designer`}</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="h-[44.28px] relative shrink-0 w-[152.45px]" data-name="div">
      <DivCardName />
      <DivCardRole />
    </div>
  );
}

function DivHeroCardTop() {
  return (
    <div className="relative shrink-0" data-name="div.hero-card-top">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pr-[129.55px] relative size-full">
        <DivAvatar />
        <Div5 />
      </div>
    </div>
  );
}

function SpanTag() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[39.19px] content-stretch flex flex-col items-start left-0 px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Product Strategy</p>
      </div>
    </div>
  );
}

function SpanTag1() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[39.19px] content-stretch flex flex-col items-start left-[130.8px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">UX Research</p>
      </div>
    </div>
  );
}

function SpanTag2() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-0 content-stretch flex flex-col items-start left-0 px-[13px] py-[6px] rounded-[6px] top-[39.19px]" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Design Systems</p>
      </div>
    </div>
  );
}

function SpanTag3() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-0 content-stretch flex flex-col items-start left-[126.31px] px-[13px] py-[6px] rounded-[6px] top-[39.19px]" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Prototyping</p>
      </div>
    </div>
  );
}

function DivSkillTags() {
  return (
    <div className="h-[70.38px] relative shrink-0 w-[342px]" data-name="div.skill-tags">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SpanTag />
        <SpanTag1 />
        <SpanTag2 />
        <SpanTag3 />
      </div>
    </div>
  );
}

function DivMpTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.mp-title">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[13.1px] whitespace-nowrap">
        <p className="leading-[20.99px]">FlowPay — Fintech Redesign</p>
      </div>
    </div>
  );
}

function DivMpLeft() {
  return (
    <div className="relative shrink-0" data-name="div.mp-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <div className="bg-[#4f8ef7] relative rounded-[4px] shrink-0 size-[8px]" data-name="div.mp-dot" />
        <DivMpTitle />
      </div>
    </div>
  );
}

function SpanMpBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[4px] shrink-0" data-name="span.mp-badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[3px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[11.2px] whitespace-nowrap">
          <p className="leading-[17.92px]">Live</p>
        </div>
      </div>
    </div>
  );
}

function DivMpTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.mp-title">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[13.1px] whitespace-nowrap">
        <p className="leading-[20.99px]">LogiTrack — Dashboard</p>
      </div>
    </div>
  );
}

function DivMpLeft1() {
  return (
    <div className="relative shrink-0" data-name="div.mp-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <div className="bg-[#34d399] relative rounded-[4px] shrink-0 size-[8px]" data-name="div.mp-dot" />
        <DivMpTitle1 />
      </div>
    </div>
  );
}

function SpanMpBadge1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[4px] shrink-0" data-name="span.mp-badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[3px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[11.2px] whitespace-nowrap">
          <p className="leading-[17.92px]">Shipped</p>
        </div>
      </div>
    </div>
  );
}

function DivMpTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.mp-title">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[13.1px] whitespace-nowrap">
        <p className="leading-[20.99px]">NovaSaaS — Design System</p>
      </div>
    </div>
  );
}

function DivMpLeft2() {
  return (
    <div className="relative shrink-0" data-name="div.mp-left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <div className="bg-[#a78bfa] relative rounded-[4px] shrink-0 size-[8px]" data-name="div.mp-dot" />
        <DivMpTitle2 />
      </div>
    </div>
  );
}

function SpanMpBadge2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[4px] shrink-0" data-name="span.mp-badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[3px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[11.2px] whitespace-nowrap">
          <p className="leading-[17.92px]">In Review</p>
        </div>
      </div>
    </div>
  );
}

function DivMiniProjects() {
  return (
    <div className="min-w-[342px] relative shrink-0 w-[342px]" data-name="div.mini-projects">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start min-w-[inherit] relative size-full">
        <div className="bg-[rgba(255,255,255,0.03)] relative rounded-[10px] shrink-0 w-full" data-name="Component 3">
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between px-[15px] py-[11px] relative size-full">
              <DivMpLeft />
              <SpanMpBadge />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.03)] relative rounded-[10px] shrink-0 w-full" data-name="Component 3">
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between px-[15px] py-[11px] relative size-full">
              <DivMpLeft1 />
              <SpanMpBadge1 />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.03)] relative rounded-[10px] shrink-0 w-full" data-name="Component 3">
          <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between px-[15px] py-[11px] relative size-full">
              <DivMpLeft2 />
              <SpanMpBadge2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivHeroCard() {
  return (
    <div className="bg-[#0f1525] max-w-[400px] relative rounded-[20px] shrink-0 w-full" data-name="div.hero-card">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[inherit] p-[29px] relative size-full">
          <DivHeroCardTop />
          <DivSkillTags />
          <DivMiniProjects />
          <div className="absolute inset-px" style={{ backgroundImage: "linear-gradient(134.982deg, rgba(79, 142, 247, 0.08) 0%, rgba(79, 142, 247, 0) 60%)" }} data-name="::before" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_32px_64px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Span2() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
          <p className="leading-[19.2px]">UX Case Studies</p>
        </div>
      </div>
    </div>
  );
}

function DivFloatingBadge() {
  return (
    <div className="absolute bg-[#0f1525] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center pb-[10.69px] pt-[10.5px] px-[15px] right-[-25.64px] rounded-[10px] top-[-18px]" data-name="div.floating-badge">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">✦</p>
      </div>
      <Span2 />
    </div>
  );
}

function Span3() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
          <p className="leading-[19.2px]">Figma Expert</p>
        </div>
      </div>
    </div>
  );
}

function DivFloatingBadge1() {
  return (
    <div className="absolute bg-[#0f1525] bottom-[-18.01px] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.4)] flex gap-[8px] items-center left-[-24px] pb-[10.69px] pt-[10.5px] px-[15px] rounded-[10px]" data-name="div.floating-badge">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">⚡</p>
      </div>
      <Span3 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div">
      <DivHeroCard />
      <DivFloatingBadge />
      <DivFloatingBadge1 />
    </div>
  );
}

function DivHeroVisual() {
  return (
    <div className="content-stretch flex items-center justify-center px-[80px] relative shrink-0" data-name="div.hero-visual">
      <Div4 />
    </div>
  );
}

function DivHeroGrid() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0" data-name="div.hero-grid">
      <DivHeroContent />
      <DivHeroVisual />
    </div>
  );
}

function DivContainer() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1200px] relative shrink-0" data-name="div.container">
      <DivHeroGrid />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[1200px] overflow-clip pb-[187.55px] pt-[167.53px] px-[64px] right-0 top-0" data-name="HERO">
      <div className="-translate-y-1/2 absolute blur-[20px] h-[700px] left-[21.77%] right-[41.77%] rounded-[350px] top-1/2" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(49.497 0 0 49.497 350 350)'><stop stop-color='rgba(79,142,247,0.18)' offset='0'/><stop stop-color='rgba(79,142,247,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="div#heroOrb" />
      <DivScrollHint />
      <DivContainer />
    </div>
  );
}

function DivEyebrow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="div.eyebrow">
      <div className="bg-[#4f8ef7] h-px relative shrink-0 w-[20px]" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[19.2px]">About Me</p>
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] pt-[3.58px] relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-full">
        <p className="leading-[52.8px] mb-0">Design is</p>
        <p className="leading-[52.8px] mb-0">thinking</p>
        <p className="leading-[52.8px]">made visible.</p>
      </div>
    </div>
  );
}

function PAboutText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.about-text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[16.8px] w-full">
        <p className="mb-0">
          <span className="leading-[29.4px]">{`I don't just make things look good — I make them `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[29.4px] not-italic text-[#eef2ff]">work</span>
          <span className="leading-[29.4px]">. My process</span>
        </p>
        <p className="leading-[29.4px] mb-0">{`starts with questions: Who is this for? What's the friction? What would`}</p>
        <p className="leading-[29.4px]">delight look like here?</p>
      </div>
    </div>
  );
}

function PAboutText1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12.195px] relative shrink-0 w-full" data-name="p.about-text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[16.8px] w-full">
        <p className="mb-0">
          <span className="leading-[29.4px]">{`With 4+ years across `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[29.4px] not-italic text-[#eef2ff]">SaaS platforms, fintech apps, and logistics</span>
        </p>
        <p className="mb-0">
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[29.4px] not-italic text-[#eef2ff]">dashboards</span>
          <span className="leading-[29.4px]">{`, I've learned that the best design is invisible. It moves`}</span>
        </p>
        <p className="leading-[29.4px] mb-0">users forward without resistance, communicates trust without</p>
        <p className="leading-[29.4px]">explanation, and scales without breaking.</p>
      </div>
    </div>
  );
}

function PAboutText2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[11.99px] relative shrink-0 w-full" data-name="p.about-text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[16.8px] w-full">
        <p className="leading-[29.4px] mb-0">I partner closely with product managers, engineers, and founders —</p>
        <p className="mb-0">
          <span className="leading-[29.4px]">{`translating ambiguous problems into `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[29.4px] not-italic text-[#eef2ff]">clear, compelling interfaces</span>
          <span className="leading-[29.4px]">{` that`}</span>
        </p>
        <p className="leading-[29.4px]">ship on time.</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18.9px] items-start min-w-px pb-[32px] pt-[7.41px] relative" data-name="div">
      <DivEyebrow />
      <H1 />
      <PAboutText />
      <PAboutText1 />
      <PAboutText2 />
    </div>
  );
}

function DivInfoBlockTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.info-block-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12px] tracking-[0.96px] uppercase w-full">
          <p className="leading-[19.2px]">{`Experience & Focus`}</p>
        </div>
      </div>
    </div>
  );
}

function SpanTag4() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-0 px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">SaaS Platforms</p>
      </div>
    </div>
  );
}

function SpanTag5() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[123.03px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Fintech</p>
      </div>
    </div>
  );
}

function SpanTag6() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[201.52px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Logistics</p>
      </div>
    </div>
  );
}

function SpanTag7() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[288.97px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Mobile Apps</p>
      </div>
    </div>
  );
}

function SpanTag8() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-0 content-stretch flex flex-col items-start left-0 px-[13px] py-[6px] rounded-[6px] top-[41.19px]" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Design Systems</p>
      </div>
    </div>
  );
}

function SpanTag9() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-0 content-stretch flex flex-col items-start left-[128.31px] px-[13px] py-[6px] rounded-[6px] top-[41.19px]" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">B2B Tools</p>
      </div>
    </div>
  );
}

function DivToolsGrid() {
  return (
    <div className="h-[72.38px] relative shrink-0 w-full" data-name="div.tools-grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SpanTag4 />
        <SpanTag5 />
        <SpanTag6 />
        <SpanTag7 />
        <SpanTag8 />
        <SpanTag9 />
      </div>
    </div>
  );
}

function DivInfoBlock() {
  return (
    <div className="bg-[#0f1525] relative rounded-[16px] shrink-0 w-full" data-name="div.info-block">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <DivInfoBlockTitle />
        <DivToolsGrid />
      </div>
    </div>
  );
}

function DivInfoBlockTitle1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.info-block-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12px] tracking-[0.96px] uppercase w-full">
          <p className="leading-[19.2px]">Design Toolkit</p>
        </div>
      </div>
    </div>
  );
}

function SpanTag10() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-0 px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Figma</p>
      </div>
    </div>
  );
}

function SpanTag11() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[71.02px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">FigJam</p>
      </div>
    </div>
  );
}

function SpanTag12() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[148.92px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Adobe XD</p>
      </div>
    </div>
  );
}

function SpanTag13() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[242.75px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Protopie</p>
      </div>
    </div>
  );
}

function SpanTag14() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[326.81px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Framer</p>
      </div>
    </div>
  );
}

function SpanTag15() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-[41.19px] content-stretch flex flex-col items-start left-[403.33px] px-[13px] py-[6px] rounded-[6px] top-0" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Notion</p>
      </div>
    </div>
  );
}

function SpanTag16() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-0 content-stretch flex flex-col items-start left-0 px-[13px] py-[6px] rounded-[6px] top-[41.19px]" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Jira</p>
      </div>
    </div>
  );
}

function SpanTag17() {
  return (
    <div className="absolute bg-[rgba(79,142,247,0.1)] bottom-0 content-stretch flex flex-col items-start left-[57.33px] px-[13px] py-[6px] rounded-[6px] top-[41.19px]" data-name="span.tag">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Maze</p>
      </div>
    </div>
  );
}

function DivToolsGrid1() {
  return (
    <div className="h-[72.38px] relative shrink-0 w-full" data-name="div.tools-grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SpanTag10 />
        <SpanTag11 />
        <SpanTag12 />
        <SpanTag13 />
        <SpanTag14 />
        <SpanTag15 />
        <SpanTag16 />
        <SpanTag17 />
      </div>
    </div>
  );
}

function DivInfoBlock1() {
  return (
    <div className="bg-[#0f1525] relative rounded-[16px] shrink-0 w-full" data-name="div.info-block">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <DivInfoBlockTitle1 />
        <DivToolsGrid1 />
      </div>
    </div>
  );
}

function DivInfoBlockTitle2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.info-block-title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12px] tracking-[0.96px] uppercase w-full">
          <p className="leading-[19.2px]">Process Overview</p>
        </div>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="h-[21.75px] relative shrink-0 w-[200.89px]" data-name="span">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#8a96ae] text-[13.6px] top-[10px] w-[199.164px]">
        <p className="leading-[21.76px]">Discover → Research → Define</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div">
      <div className="bg-[#4f8ef7] relative rounded-[3px] shrink-0 size-[6px]" data-name="div" />
      <Span4 />
    </div>
  );
}

function Span5() {
  return (
    <div className="h-[21.75px] relative shrink-0 w-[212.3px]" data-name="span">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#8a96ae] text-[13.6px] top-[10px] w-[212.167px]">
        <p className="leading-[21.76px]">Ideate → Wireframe → Prototype</p>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div">
      <div className="bg-[#34d399] relative rounded-[3px] shrink-0 size-[6px]" data-name="div" />
      <Span5 />
    </div>
  );
}

function Span6() {
  return (
    <div className="h-[21.75px] relative shrink-0 w-[138.88px]" data-name="span">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#8a96ae] text-[13.6px] top-[10px] w-[138.112px]">
        <p className="leading-[21.76px]">Test → Refine → Ship</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="div">
      <div className="bg-[#a78bfa] relative rounded-[3px] shrink-0 size-[6px]" data-name="div" />
      <Span6 />
    </div>
  );
}

function Div7() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Div8 />
        <Div9 />
        <Div10 />
      </div>
    </div>
  );
}

function DivInfoBlock2() {
  return (
    <div className="bg-[#0f1525] relative rounded-[16px] shrink-0 w-full" data-name="div.info-block">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[15.99px] items-start p-[25px] relative size-full">
        <DivInfoBlockTitle2 />
        <Div7 />
      </div>
    </div>
  );
}

function DivAboutRight() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-w-px relative" data-name="div.about-right">
      <DivInfoBlock />
      <DivInfoBlock1 />
      <DivInfoBlock2 />
    </div>
  );
}

function DivAboutGrid() {
  return (
    <div className="content-stretch flex gap-[80px] items-start justify-center relative shrink-0 w-full" data-name="div.about-grid">
      <Div6 />
      <DivAboutRight />
    </div>
  );
}

function About() {
  return (
    <div className="absolute bg-[#0d1220] content-stretch flex flex-col items-start left-0 px-[360px] py-[120px] right-0 top-[1200px]" data-name="ABOUT">
      <DivAboutGrid />
    </div>
  );
}

function DivEyebrow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16.88px] relative shrink-0" data-name="div.eyebrow">
      <div className="bg-[#4f8ef7] h-px relative shrink-0 w-[20px]" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[19.2px]">Selected Work</p>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col gap-[6.7px] items-start pb-[0.39px] pt-[7.41px] relative shrink-0" data-name="div">
      <DivEyebrow1 />
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[52.8px]">Case Studies</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px] mb-0">{`Deep-dives into product problems I've solved —`}</p>
        <p className="leading-[25.6px]">from research to shipped UI.</p>
      </div>
    </div>
  );
}

function DivSectionHeader() {
  return (
    <div className="content-end flex flex-wrap items-end justify-between relative shrink-0 w-full" data-name="div.section-header">
      <Div11 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Component 1">
        <a className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[14px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html" target="_blank">
          <p className="cursor-pointer leading-[22.4px]">View all work →</p>
        </a>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[31.92px] pr-[31.94px] relative shrink-0" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-[rgba(79,142,247,0.7)] text-center tracking-[1.152px] uppercase whitespace-nowrap">
        <p className="leading-[18.43px]">Featured Project</p>
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">
        <p className="leading-[19.2px]">FlowPay Dashboard</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="relative shrink-0" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pr-[26.75px] relative size-full">
        <div className="bg-[#4f8ef7] relative rounded-[4px] shrink-0 size-[8px]" data-name="div" />
        <Span7 />
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.64px] relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.4px] text-[rgba(255,255,255,0.4)] text-center whitespace-nowrap">
        <p className="leading-[16.64px]">Total Balance</p>
      </div>
    </div>
  );
}

function Div17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[22.4px] text-center text-white whitespace-nowrap">
        <p className="leading-[35.84px]">$48,392.00</p>
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] relative rounded-[8px] shrink-0 w-[156px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[12px] pt-[15px] px-[12px] relative size-full">
        <Div16 />
        <Div17 />
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center px-[18.53px] py-[8px] relative rounded-[6px] shrink-0" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.4px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">
        <p className="leading-[16.64px]">↑ Send</p>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center px-[11.75px] py-[8px] relative rounded-[6px] shrink-0" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.4px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">
        <p className="leading-[16.64px]">↓ Receive</p>
      </div>
    </div>
  );
}

function Div18() {
  return (
    <div className="relative shrink-0" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Div19 />
        <Div20 />
      </div>
    </div>
  );
}

function MockUiMockup() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[10px] items-start max-w-[320px] p-[21px] relative rounded-[12px] shrink-0" data-name="Mock UI Mockup">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Div14 />
      <Div15 />
      <Div18 />
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[40px] relative shrink-0" data-name="div">
      <Div13 />
      <MockUiMockup />
    </div>
  );
}

function DivCsThumbInner() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(134.826deg, rgb(13, 27, 62) 0%, rgb(22, 45, 92) 100%)" }} data-name="div.cs-thumb-inner">
      <Div12 />
    </div>
  );
}

function DivCsOverlay() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(8,12,20,0.6)] content-stretch flex inset-0 items-center justify-center opacity-0 pb-[124.37px] pt-[148.36px]" data-name="div.cs-overlay">
      <div className="bg-[#4f8ef7] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[10px] shrink-0" data-name="Component 7">
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">View Case Study →</p>
        </div>
      </div>
    </div>
  );
}

function DivCsThumbnail() {
  return (
    <div className="flex-[1_0_0] min-h-[300px] min-w-px relative z-[2]" data-name="div.cs-thumbnail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <DivCsThumbInner />
        <DivCsOverlay />
      </div>
    </div>
  );
}

function SpanCsCat() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] relative rounded-[5px] self-stretch shrink-0" data-name="span.cs-cat">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[11.5px] tracking-[0.691px] uppercase whitespace-nowrap">
          <p className="leading-[18.43px]">Fintech</p>
        </div>
      </div>
    </div>
  );
}

function SpanCsCat1() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] relative rounded-[5px] self-stretch shrink-0" data-name="span.cs-cat">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[11.5px] tracking-[0.691px] uppercase whitespace-nowrap">
          <p className="leading-[18.43px]">Mobile</p>
        </div>
      </div>
    </div>
  );
}

function DivCsMeta() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start relative shrink-0 w-full" data-name="div.cs-meta">
      <SpanCsCat />
      <SpanCsCat1 />
    </div>
  );
}

function DivCsTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.cs-title">
      <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-full">
        <p className="leading-[33.6px] mb-0">FlowPay — Reimagining mobile</p>
        <p className="leading-[33.6px]">payments for the underbanked</p>
      </div>
    </div>
  );
}

function PCsProblem() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] pt-[4.395px] relative shrink-0 w-full" data-name="p.cs-problem">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] w-full">
        <p className="leading-[22.4px] mb-0">Users were abandoning the payment flow at 62% — too many steps, unclear trust</p>
        <p className="leading-[22.4px]">{`signals, and a UI that felt like a legacy bank's afterthought.`}</p>
      </div>
    </div>
  );
}

function Div21() {
  return (
    <div className="content-stretch flex flex-col gap-[2.8px] items-start pb-[16px] relative shrink-0 w-full" data-name="div">
      <DivCsMeta />
      <DivCsTitle />
      <PCsProblem />
    </div>
  );
}

function SpanCsRole() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.cs-role">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">UX Research · Product Design · Design System</p>
      </div>
    </div>
  );
}

function SpanH2DRemoveBefore() {
  return (
    <div className="content-stretch flex flex-col h-[19.19px] items-start relative shrink-0 w-[10.56px]" data-name="span.__h2d-remove-before">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">↑</p>
      </div>
    </div>
  );
}

function SpanCsImpact() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="span.cs-impact">
      <SpanH2DRemoveBefore />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">40% drop in abandonment</p>
      </div>
    </div>
  );
}

function DivCsFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.cs-footer">
      <SpanCsRole />
      <SpanCsImpact />
    </div>
  );
}

function DivCsBody() {
  return (
    <div className="flex-[1_0_0] min-w-px relative z-[1]" data-name="div.cs-body">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[28px] relative size-full">
          <Div21 />
          <DivCsFooter />
        </div>
      </div>
    </div>
  );
}

function Span8() {
  return (
    <div className="h-[17.92px] relative shrink-0 w-[97.25px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[11.2px] text-[rgba(52,211,153,0.8)] top-[8px] w-[101.123px]">
          <p className="leading-[17.92px]">📦 Shipment #4821</p>
        </div>
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="bg-[rgba(52,211,153,0.1)] relative rounded-[4px] shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.4px] text-[rgba(52,211,153,0.6)] whitespace-nowrap">
          <p className="leading-[16.64px]">In Transit</p>
        </div>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div className="bg-[rgba(52,211,153,0.12)] relative rounded-[8px] shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border border-[rgba(52,211,153,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-[11px] relative size-full">
          <Span8 />
          <Span9 />
        </div>
      </div>
    </div>
  );
}

function Div24() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[8px] shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col items-start px-[14px] py-[10px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.4px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">
          <p className="leading-[16.64px]">Estimated: Dec 18 · Dubai → London</p>
        </div>
      </div>
    </div>
  );
}

function Div25() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] relative size-full">
          <div className="bg-[#34d399] relative rounded-[4px] shrink-0 size-[8px]" data-name="div" />
          <div className="bg-gradient-to-r flex-[1_0_0] from-[#34d399] h-[2px] min-w-px relative rounded-[2px] to-[rgba(52,211,153,0.3)]" data-name="div" />
          <div className="bg-[rgba(255,255,255,0.15)] relative rounded-[4px] shrink-0 size-[8px]" data-name="div" />
        </div>
      </div>
    </div>
  );
}

function Div22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[32px] relative size-full">
        <Div23 />
        <Div24 />
        <Div25 />
      </div>
    </div>
  );
}

function DivCsThumbInner1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[81.17px] pt-[81.18px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(135deg, rgb(13, 46, 46) 0%, rgb(11, 64, 64) 100%)" }} data-name="div.cs-thumb-inner">
      <Div22 />
    </div>
  );
}

function DivCsOverlay1() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(8,12,20,0.6)] content-stretch flex inset-[0_0.28px_0_0] items-center justify-center opacity-0 pb-[132.81px] pt-[156.82px]" data-name="div.cs-overlay">
      <div className="bg-[#4f8ef7] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[10px] shrink-0" data-name="Component 7">
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">View Case Study →</p>
        </div>
      </div>
    </div>
  );
}

function DivCsThumbnail1() {
  return (
    <div className="aspect-[586/329.6300048828125] relative shrink-0 z-[2]" data-name="div.cs-thumbnail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <DivCsThumbInner1 />
        <DivCsOverlay1 />
      </div>
    </div>
  );
}

function SpanCsCat2() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] relative rounded-[5px] self-stretch shrink-0" data-name="span.cs-cat">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[11.5px] tracking-[0.691px] uppercase whitespace-nowrap">
          <p className="leading-[18.43px]">Logistics</p>
        </div>
      </div>
    </div>
  );
}

function SpanCsCat3() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] relative rounded-[5px] self-stretch shrink-0" data-name="span.cs-cat">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[11.5px] tracking-[0.691px] uppercase whitespace-nowrap">
          <p className="leading-[18.43px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function DivCsMeta1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start relative shrink-0 w-full" data-name="div.cs-meta">
      <SpanCsCat2 />
      <SpanCsCat3 />
    </div>
  );
}

function DivCsTitle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.cs-title">
      <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[24px]">LogiTrack — Real-time logistics command center</p>
      </div>
    </div>
  );
}

function PCsProblem1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] pt-[3.195px] relative shrink-0 w-full" data-name="p.cs-problem">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] w-full">
        <p className="leading-[22.4px] mb-0">Dispatchers spent 3+ hours daily switching between 5 disconnected tools to</p>
        <p className="leading-[22.4px]">track shipments. Costly, slow, error-prone.</p>
      </div>
    </div>
  );
}

function Div26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative shrink-0 w-full" data-name="div">
      <DivCsMeta1 />
      <DivCsTitle1 />
      <PCsProblem1 />
    </div>
  );
}

function SpanCsRole1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.cs-role">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Product Design · UX Research</p>
      </div>
    </div>
  );
}

function SpanH2DRemoveBefore1() {
  return (
    <div className="content-stretch flex flex-col h-[19.19px] items-start relative shrink-0 w-[10.56px]" data-name="span.__h2d-remove-before">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">↑</p>
      </div>
    </div>
  );
}

function SpanCsImpact1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="span.cs-impact">
      <SpanH2DRemoveBefore1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">65% faster task completion</p>
      </div>
    </div>
  );
}

function DivCsFooter1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.cs-footer">
      <SpanCsRole1 />
      <SpanCsImpact1 />
    </div>
  );
}

function DivCsBody1() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="div.cs-body">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[28px] relative size-full">
          <Div26 />
          <DivCsFooter1 />
        </div>
      </div>
    </div>
  );
}

function Div28() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.64px] relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10.4px] text-[rgba(167,139,250,0.7)] tracking-[0.832px] uppercase w-full">
        <p className="leading-[16.64px]">Design System</p>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="div">
      <div className="bg-[#a78bfa] relative rounded-[8px] shrink-0 size-[32px]" data-name="div" />
      <div className="bg-[#7c3aed] relative rounded-[8px] shrink-0 size-[32px]" data-name="div" />
      <div className="bg-[#4f46e5] relative rounded-[8px] shrink-0 size-[32px]" data-name="div" />
      <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 size-[32px]" data-name="div" />
    </div>
  );
}

function Div30() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="div">
      <div className="bg-[rgba(167,139,250,0.3)] h-[6px] relative rounded-[3px] shrink-0 w-[417.59px]" data-name="div" />
      <div className="bg-[rgba(167,139,250,0.2)] h-[6px] relative rounded-[3px] shrink-0 w-[313.19px]" data-name="div" />
      <div className="bg-[rgba(167,139,250,0.15)] h-[6px] relative rounded-[3px] shrink-0 w-[365.39px]" data-name="div" />
    </div>
  );
}

function Div27() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[32px] pt-[31px] px-[32px] relative size-full">
        <Div28 />
        <Div29 />
        <Div30 />
      </div>
    </div>
  );
}

function DivCsThumbInner2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[83.5px] pt-[83.49px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(135deg, rgb(26, 13, 46) 0%, rgb(45, 24, 84) 100%)" }} data-name="div.cs-thumb-inner">
      <Div27 />
    </div>
  );
}

function DivCsOverlay2() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(8,12,20,0.6)] content-stretch flex inset-0 items-center justify-center opacity-0 pb-[132.81px] pt-[156.82px]" data-name="div.cs-overlay">
      <div className="bg-[#4f8ef7] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[10px] shrink-0" data-name="Component 7">
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">View Case Study →</p>
        </div>
      </div>
    </div>
  );
}

function DivCsThumbnail2() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="div.cs-thumbnail">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <DivCsThumbInner2 />
        <DivCsOverlay2 />
      </div>
    </div>
  );
}

function SpanCsCat4() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] relative rounded-[5px] self-stretch shrink-0" data-name="span.cs-cat">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[11.5px] tracking-[0.691px] uppercase whitespace-nowrap">
          <p className="leading-[18.43px]">SaaS</p>
        </div>
      </div>
    </div>
  );
}

function SpanCsCat5() {
  return (
    <div className="bg-[rgba(79,142,247,0.15)] relative rounded-[5px] self-stretch shrink-0" data-name="span.cs-cat">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[11.5px] tracking-[0.691px] uppercase whitespace-nowrap">
          <p className="leading-[18.43px]">Design System</p>
        </div>
      </div>
    </div>
  );
}

function DivCsMeta2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-start relative shrink-0 w-full" data-name="div.cs-meta">
      <SpanCsCat4 />
      <SpanCsCat5 />
    </div>
  );
}

function DivCsTitle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.cs-title">
      <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[24px]">NovaSaaS — Scalable design system from scratch</p>
      </div>
    </div>
  );
}

function PCsProblem2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] pt-[3.195px] relative shrink-0 w-full" data-name="p.cs-problem">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] w-full">
        <p className="leading-[22.4px] mb-0">Six product teams using conflicting components, zero shared language. Every</p>
        <p className="leading-[22.4px]">sprint introduced new inconsistencies.</p>
      </div>
    </div>
  );
}

function Div31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] relative shrink-0 w-full" data-name="div">
      <DivCsMeta2 />
      <DivCsTitle2 />
      <PCsProblem2 />
    </div>
  );
}

function SpanCsRole2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.cs-role">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Design Systems · UI Design</p>
      </div>
    </div>
  );
}

function SpanH2DRemoveBefore2() {
  return (
    <div className="content-stretch flex flex-col h-[19.19px] items-start relative shrink-0 w-[10.56px]" data-name="span.__h2d-remove-before">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">↑</p>
      </div>
    </div>
  );
}

function SpanCsImpact2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="span.cs-impact">
      <SpanH2DRemoveBefore2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">3× faster design velocity</p>
      </div>
    </div>
  );
}

function DivCsFooter2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.cs-footer">
      <SpanCsRole2 />
      <SpanCsImpact2 />
    </div>
  );
}

function DivCsBody2() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="div.cs-body">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[28px] relative size-full">
          <Div31 />
          <DivCsFooter2 />
        </div>
      </div>
    </div>
  );
}

function DivCsGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__314.73px_546.02px] h-[884.75px] relative shrink-0 w-full" data-name="div.cs-grid">
      <div className="bg-[#0f1525] col-[1/span_2] h-[314.73px] justify-self-stretch relative rounded-[20px] row-1 shrink-0" data-name="Component 4">
        <div className="content-stretch flex isolate items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
          <DivCsThumbnail />
          <DivCsBody />
        </div>
        <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="bg-[#0f1525] col-1 justify-self-stretch relative rounded-[20px] row-2 self-start shrink-0" data-name="Component 5">
        <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
          <DivCsThumbnail1 />
          <DivCsBody1 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="bg-[#0f1525] col-2 justify-self-stretch relative rounded-[20px] row-2 self-start shrink-0" data-name="Component 5">
        <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
          <DivCsThumbnail2 />
          <DivCsBody2 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[360px] max-w-[1200px] right-[360px] top-[2179.39px]" data-name="CASE STUDIES">
      <DivSectionHeader />
      <DivCsGrid />
    </div>
  );
}

function DivEyebrow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="div.eyebrow">
      <div className="bg-[#4f8ef7] h-px relative shrink-0 w-[20px]" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[19.2px]">What I Do</p>
      </div>
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[11.88px] relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-full">
        <p className="leading-[52.8px]">Areas of expertise</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] relative shrink-0 w-[500px]" data-name="p">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px] mb-0">{`Design is more than a craft — it's a conversation between intent`}</p>
        <p className="leading-[25.6px]">{`and outcome. Here's where I focus.`}</p>
      </div>
    </div>
  );
}

function DivSkillIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.94px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[25.6px] w-full">
          <p className="leading-[40.96px]">🔍</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillName() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.99px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[25.6px]">UX Research</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillDesc() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] w-full">
          <p className="leading-[20.99px] mb-0">User interviews, usability testing, competitive</p>
          <p className="leading-[20.99px] mb-0">analysis, and synthesizing insights that actually</p>
          <p className="leading-[20.99px]">change design decisions.</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillCard() {
  return (
    <div className="bg-[#0f1525] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="div.skill-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[29px] pt-[28px] px-[29px] relative size-full">
        <DivSkillIcon />
        <DivSkillName />
        <DivSkillDesc />
      </div>
    </div>
  );
}

function DivSkillIcon1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.94px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[25.6px] w-full">
          <p className="leading-[40.96px]">✦</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillName1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.99px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[25.6px]">Interaction Design</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillDesc1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] w-full">
          <p className="leading-[20.99px] mb-0">Micro-interactions, flows, and motion that make the</p>
          <p className="leading-[20.99px] mb-0">interface feel alive — without distracting from the</p>
          <p className="leading-[20.99px]">task.</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillCard1() {
  return (
    <div className="bg-[#0f1525] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="div.skill-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[29px] pt-[28px] px-[29px] relative size-full">
        <DivSkillIcon1 />
        <DivSkillName1 />
        <DivSkillDesc1 />
      </div>
    </div>
  );
}

function DivSkillIcon2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.94px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[25.6px] w-full">
          <p className="leading-[40.96px]">♟</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillName2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.99px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[25.6px]">Product Strategy</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillDesc2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] w-full">
          <p className="leading-[20.99px] mb-0">Working with founders and PMs to shape product</p>
          <p className="leading-[20.99px] mb-0">direction, define MVP scope, and align design to</p>
          <p className="leading-[20.99px]">business outcomes.</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillCard2() {
  return (
    <div className="bg-[#0f1525] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="div.skill-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[29px] pt-[28px] px-[29px] relative size-full">
        <DivSkillIcon2 />
        <DivSkillName2 />
        <DivSkillDesc2 />
      </div>
    </div>
  );
}

function DivSkillIcon3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.94px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[25.6px] w-full">
          <p className="leading-[40.96px]">▣</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillName3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[25.6px]">UI Design</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillDesc3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] w-full">
          <p className="leading-[20.99px] mb-0">Pixel-precise visual design: typography, color</p>
          <p className="leading-[20.99px] mb-0">systems, component libraries, and handoff-ready</p>
          <p className="leading-[20.99px]">specs engineers love.</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillCard3() {
  return (
    <div className="bg-[#0f1525] col-1 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="div.skill-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[29px] pt-[28px] px-[29px] relative size-full">
        <DivSkillIcon3 />
        <DivSkillName3 />
        <DivSkillDesc3 />
      </div>
    </div>
  );
}

function DivSkillIcon4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.94px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[25.6px] w-full">
          <p className="leading-[40.96px]">⬡</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillName4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[25.6px]">Design Systems</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillDesc4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] w-full">
          <p className="leading-[20.99px] mb-0">Building scalable component libraries, token</p>
          <p className="leading-[20.99px] mb-0">systems, and documentation that grow with the</p>
          <p className="leading-[20.99px]">product.</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillCard4() {
  return (
    <div className="bg-[#0f1525] col-2 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="div.skill-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[29px] pt-[28px] px-[29px] relative size-full">
        <DivSkillIcon4 />
        <DivSkillName4 />
        <DivSkillDesc4 />
      </div>
    </div>
  );
}

function DivSkillIcon5() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.94px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[25.6px] w-full">
          <p className="leading-[40.96px]">◈</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillName5() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-name">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Syne:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[25.6px]">Prototyping</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillDesc5() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.skill-desc">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[13.1px] w-full">
          <p className="leading-[20.99px] mb-0">From paper sketches to high-fidelity interactive</p>
          <p className="leading-[20.99px] mb-0">prototypes that make stakeholders and users nod</p>
          <p className="leading-[20.99px]">instead of guess.</p>
        </div>
      </div>
    </div>
  );
}

function DivSkillCard5() {
  return (
    <div className="bg-[#0f1525] col-3 justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="div.skill-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[29px] pt-[28px] px-[29px] relative size-full">
        <DivSkillIcon5 />
        <DivSkillName5 />
        <DivSkillDesc5 />
      </div>
    </div>
  );
}

function DivSkillsGrid() {
  return (
    <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__207.53px_207.53px] h-[472.26px] pt-[37.2px] relative shrink-0 w-full" data-name="div.skills-grid">
      <DivSkillCard />
      <DivSkillCard1 />
      <DivSkillCard2 />
      <DivSkillCard3 />
      <DivSkillCard4 />
      <DivSkillCard5 />
    </div>
  );
}

function DivContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10.8px] items-start max-w-[1200px] pt-[7.41px] relative shrink-0 w-full" data-name="div.container">
      <DivEyebrow2 />
      <H2 />
      <P />
      <DivSkillsGrid />
    </div>
  );
}

function Skills() {
  return (
    <div className="absolute bg-[#0d1220] content-stretch flex flex-col items-start left-0 px-[360px] py-[120px] right-0 top-[3407.22px]" data-name="SKILLS">
      <DivContainer1 />
    </div>
  );
}

function DivEyebrow3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="div.eyebrow">
      <div className="bg-[#4f8ef7] h-px relative shrink-0 w-[20px]" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[19.2px]">My Stack</p>
      </div>
    </div>
  );
}

function H3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-full">
        <p className="leading-[52.8px]">Tools of the trade</p>
      </div>
    </div>
  );
}

function SpanToolIcon() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">🎨</p>
      </div>
    </div>
  );
}

function DivToolPill() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-0 rounded-[12px] top-[17.3px] w-[107.23px]" data-name="div.tool-pill">
      <SpanToolIcon />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.39px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[41.125px]">
        <p className="leading-[22.4px]">Figma</p>
      </div>
    </div>
  );
}

function SpanToolIcon1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">🗺</p>
      </div>
    </div>
  );
}

function DivToolPill1() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[123.23px] rounded-[12px] top-[17.3px] w-[115.28px]" data-name="div.tool-pill">
      <SpanToolIcon1 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.4px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[49.151px]">
        <p className="leading-[22.4px]">FigJam</p>
      </div>
    </div>
  );
}

function SpanToolIcon2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">🅰</p>
      </div>
    </div>
  );
}

function DivToolPill2() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[254.52px] rounded-[12px] top-[17.3px] w-[137.41px]" data-name="div.tool-pill">
      <SpanToolIcon2 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[47.95px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[67.109px]">
        <p className="leading-[22.4px]">Adobe XD</p>
      </div>
    </div>
  );
}

function SpanToolIcon3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">⚡</p>
      </div>
    </div>
  );
}

function DivToolPill3() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[407.92px] rounded-[12px] top-[17.3px] w-[117.67px]" data-name="div.tool-pill">
      <SpanToolIcon3 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[39.6px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[57.161px]">
        <p className="leading-[22.4px]">Protopie</p>
      </div>
    </div>
  );
}

function SpanToolIcon4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">🖼</p>
      </div>
    </div>
  );
}

function DivToolPill4() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[541.59px] rounded-[12px] top-[17.3px] w-[113.66px]" data-name="div.tool-pill">
      <SpanToolIcon4 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.39px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[48.136px]">
        <p className="leading-[22.4px]">Framer</p>
      </div>
    </div>
  );
}

function SpanToolIcon5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">📝</p>
      </div>
    </div>
  );
}

function DivToolPill5() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[671.25px] rounded-[12px] top-[17.3px] w-[110.61px]" data-name="div.tool-pill">
      <SpanToolIcon5 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.39px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[45.126px]">
        <p className="leading-[22.4px]">Notion</p>
      </div>
    </div>
  );
}

function SpanToolIcon6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">🎫</p>
      </div>
    </div>
  );
}

function DivToolPill6() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[797.86px] rounded-[12px] top-[17.3px] w-[91.28px]" data-name="div.tool-pill">
      <SpanToolIcon6 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.39px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[25.152px]">
        <p className="leading-[22.4px]">Jira</p>
      </div>
    </div>
  );
}

function SpanToolIcon7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">🧪</p>
      </div>
    </div>
  );
}

function DivToolPill7() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[905.14px] rounded-[12px] top-[17.3px] w-[102.95px]" data-name="div.tool-pill">
      <SpanToolIcon7 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.39px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[37.107px]">
        <p className="leading-[22.4px]">Maze</p>
      </div>
    </div>
  );
}

function SpanToolIcon8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">📐</p>
      </div>
    </div>
  );
}

function DivToolPill8() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-[76.72px] left-[1024.09px] rounded-[12px] top-[17.3px] w-[129.8px]" data-name="div.tool-pill">
      <SpanToolIcon8 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.39px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[64.189px]">
        <p className="leading-[22.4px]">Illustrator</p>
      </div>
    </div>
  );
}

function SpanToolIcon9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+0.14px)]" data-name="span.tool-icon">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[19.2px] whitespace-nowrap">
        <p className="leading-[30.72px]">🌈</p>
      </div>
    </div>
  );
}

function DivToolPill9() {
  return (
    <div className="absolute bg-[#0f1525] border border-[rgba(79,142,247,0.12)] border-solid bottom-0 left-0 rounded-[12px] top-[94.02px] w-[138.42px]" data-name="div.tool-pill">
      <SpanToolIcon9 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[44.39px] not-italic text-[#eef2ff] text-[14px] top-[calc(50%-0.7px)] w-[73.105px]">
        <p className="leading-[22.4px]">Photoshop</p>
      </div>
    </div>
  );
}

function DivToolsSectionGrid() {
  return (
    <div className="h-[154.74px] relative shrink-0 w-full" data-name="div.tools-section-grid">
      <DivToolPill />
      <DivToolPill1 />
      <DivToolPill2 />
      <DivToolPill3 />
      <DivToolPill4 />
      <DivToolPill5 />
      <DivToolPill6 />
      <DivToolPill7 />
      <DivToolPill8 />
      <DivToolPill9 />
    </div>
  );
}

function Tools() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22.7px] items-start left-[360px] max-w-[1200px] pt-[7.41px] right-[360px] top-[4417.36px]" data-name="TOOLS">
      <DivEyebrow3 />
      <H3 />
      <DivToolsSectionGrid />
    </div>
  );
}

function DivEyebrow4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="div.eyebrow">
      <div className="bg-[#4f8ef7] h-px relative shrink-0 w-[20px]" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[19.2px]">Kind Words</p>
      </div>
    </div>
  );
}

function H4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-full">
        <p className="leading-[52.8px]">What collaborators say</p>
      </div>
    </div>
  );
}

function DivTestiStars() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testi-stars">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[14px] tracking-[2px] w-full">
          <p className="leading-[22.4px]">★★★★★</p>
        </div>
      </div>
    </div>
  );
}

function PTestiText() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.testi-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.715px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#8a96ae] text-[14.4px] w-full">
          <p className="leading-[24.48px] mb-0">{`"Abdul has an uncanny ability to spot the exact`}</p>
          <p className="leading-[24.48px] mb-0">friction in a flow that everyone else walks past.</p>
          <p className="leading-[24.48px] mb-0">He redesigned our onboarding and we saw a</p>
          <p className="leading-[24.48px]">{`38% jump in activation within weeks."`}</p>
        </div>
      </div>
    </div>
  );
}

function DivTestiAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.88px] pt-[7.12px] relative rounded-[19px] shrink-0 size-[38px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(79, 142, 247) 0%, rgb(123, 94, 167) 100%)" }} data-name="div.testi-avatar">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-center text-white whitespace-nowrap">
        <p className="leading-[21.76px]">SR</p>
      </div>
    </div>
  );
}

function DivTestiName() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="div.testi-name">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Sarah Raza</p>
      </div>
    </div>
  );
}

function DivTestiRole() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[22.39px]" data-name="div.testi-role">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Head of Product, FlowPay</p>
      </div>
    </div>
  );
}

function Div32() {
  return (
    <div className="h-[41.58px] relative shrink-0 w-[147.5px]" data-name="div">
      <DivTestiName />
      <DivTestiRole />
    </div>
  );
}

function DivTestiAuthor() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testi-author">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[4.8px] relative size-full">
        <DivTestiAvatar />
        <Div32 />
      </div>
    </div>
  );
}

function DivTestiCard() {
  return (
    <div className="bg-[#0f1525] content-stretch flex flex-col gap-[15.2px] items-start pb-[29px] pt-[28px] px-[29px] relative rounded-[16px] shrink-0 w-[386.66px]" data-name="div.testi-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivTestiStars />
      <PTestiText />
      <DivTestiAuthor />
    </div>
  );
}

function DivTestiStars1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testi-stars">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[14px] tracking-[2px] w-full">
          <p className="leading-[22.4px]">★★★★★</p>
        </div>
      </div>
    </div>
  );
}

function PTestiText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.testi-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.715px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#8a96ae] text-[14.4px] w-full">
          <p className="leading-[24.48px] mb-0">{`"Working with Abdul was like having a product`}</p>
          <p className="leading-[24.48px] mb-0">manager and designer in one person. He asked</p>
          <p className="leading-[24.48px] mb-0">the right questions before touching Figma. That</p>
          <p className="leading-[24.48px]">{`mindset is rare."`}</p>
        </div>
      </div>
    </div>
  );
}

function DivTestiAvatar1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.88px] pt-[7.12px] relative rounded-[19px] shrink-0 size-[38px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(52, 211, 153) 0%, rgb(13, 148, 136) 100%)" }} data-name="div.testi-avatar">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-center text-white whitespace-nowrap">
        <p className="leading-[21.76px]">MK</p>
      </div>
    </div>
  );
}

function DivTestiName1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="div.testi-name">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Marcus Klein</p>
      </div>
    </div>
  );
}

function DivTestiRole1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[22.39px]" data-name="div.testi-role">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Founder, NovaSaaS</p>
      </div>
    </div>
  );
}

function Div33() {
  return (
    <div className="h-[41.58px] relative shrink-0 w-[111.23px]" data-name="div">
      <DivTestiName1 />
      <DivTestiRole1 />
    </div>
  );
}

function DivTestiAuthor1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testi-author">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[4.8px] relative size-full">
        <DivTestiAvatar1 />
        <Div33 />
      </div>
    </div>
  );
}

function DivTestiCard1() {
  return (
    <div className="bg-[#0f1525] content-stretch flex flex-col gap-[15.2px] items-start pb-[29px] pt-[28px] px-[29px] relative rounded-[16px] shrink-0 w-[386.67px]" data-name="div.testi-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivTestiStars1 />
      <PTestiText1 />
      <DivTestiAuthor1 />
    </div>
  );
}

function DivTestiStars2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testi-stars">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[14px] tracking-[2px] w-full">
          <p className="leading-[22.4px]">★★★★★</p>
        </div>
      </div>
    </div>
  );
}

function PTestiText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.testi-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.715px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#8a96ae] text-[14.4px] w-full">
          <p className="leading-[24.48px] mb-0">{`"The design system Abdul built scaled across 6`}</p>
          <p className="leading-[24.48px] mb-0">teams without breaking once. Our engineers</p>
          <p className="leading-[24.48px] mb-0">{`finally stopped asking 'which button should I`}</p>
          <p className="leading-[24.48px]">{`use?' That alone saved us months."`}</p>
        </div>
      </div>
    </div>
  );
}

function DivTestiAvatar2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.88px] pt-[7.12px] relative rounded-[19px] shrink-0 size-[38px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(245, 158, 11) 0%, rgb(239, 68, 68) 100%)" }} data-name="div.testi-avatar">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-center text-white whitespace-nowrap">
        <p className="leading-[21.76px]">DJ</p>
      </div>
    </div>
  );
}

function DivTestiName2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="div.testi-name">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Diana J.</p>
      </div>
    </div>
  );
}

function DivTestiRole2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[22.39px]" data-name="div.testi-role">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12px] whitespace-nowrap">
        <p className="leading-[19.2px]">Engineering Lead, LogiTrack</p>
      </div>
    </div>
  );
}

function Div34() {
  return (
    <div className="h-[41.58px] relative shrink-0 w-[161.84px]" data-name="div">
      <DivTestiName2 />
      <DivTestiRole2 />
    </div>
  );
}

function DivTestiAuthor2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.testi-author">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[4.8px] relative size-full">
        <DivTestiAvatar2 />
        <Div34 />
      </div>
    </div>
  );
}

function DivTestiCard2() {
  return (
    <div className="bg-[#0f1525] content-stretch flex flex-col gap-[15.2px] items-start pb-[29px] pt-[28px] px-[29px] relative rounded-[16px] shrink-0 w-[386.66px]" data-name="div.testi-card">
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DivTestiStars2 />
      <PTestiText2 />
      <DivTestiAuthor2 />
    </div>
  );
}

function DivTestiGrid() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center pt-[25.3px] relative shrink-0 w-full" data-name="div.testi-grid">
      <DivTestiCard />
      <DivTestiCard1 />
      <DivTestiCard2 />
    </div>
  );
}

function DivContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[22.7px] items-start max-w-[1200px] pt-[7.4px] relative shrink-0 w-full" data-name="div.container">
      <DivEyebrow4 />
      <H4 />
      <DivTestiGrid />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="absolute bg-[#0d1220] content-stretch flex flex-col items-start left-0 px-[360px] py-[120px] right-0 top-[4818.69px]" data-name="TESTIMONIALS">
      <DivContainer2 />
    </div>
  );
}

function DivEyebrow5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="div.eyebrow">
      <div className="bg-[#4f8ef7] h-px relative shrink-0 w-[20px]" data-name="::before" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#4f8ef7] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[19.2px]">Get In Touch</p>
      </div>
    </div>
  );
}

function H5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.595px] pt-[7.385px] relative shrink-0 w-full" data-name="h2">
      <div className="[word-break:break-word] flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-full">
        <p className="leading-[52.8px] mb-0">{`Let's build`}</p>
        <p className="leading-[52.8px] mb-0">something</p>
        <p className="leading-[52.8px]">meaningful.</p>
      </div>
    </div>
  );
}

function PContactTagline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.contact-tagline">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[16px] w-full">
        <p className="leading-[27.2px] mb-0">Open to full-time roles, contract projects, and interesting conversations. If</p>
        <p className="leading-[27.2px]">{`you're working on a product that deserves better design — let's talk.`}</p>
      </div>
    </div>
  );
}

function SpanContactLinkIcon() {
  return (
    <div className="h-[28.14px] relative shrink-0 w-[12.14px]" data-name="span.contact-link-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#eef2ff] text-[17.6px] text-left top-[13.5px] w-[14.568px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[28.16px]">✉</p>
        </div>
      </div>
    </div>
  );
}

function SpanContactLinkIcon1() {
  return (
    <div className="h-[28.14px] relative shrink-0 w-[15.03px]" data-name="span.contact-link-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#eef2ff] text-[17.6px] text-left top-[13.5px] w-[15.19px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[28.16px]">in</p>
        </div>
      </div>
    </div>
  );
}

function SpanContactLinkIcon2() {
  return (
    <div className="h-[28.14px] relative shrink-0 w-[17.61px]" data-name="span.contact-link-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#eef2ff] text-[17.6px] text-left top-[13.5px] whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[28.16px]">⬤</p>
        </div>
      </div>
    </div>
  );
}

function DivContactLinks() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[14px] items-start pt-[24.89px] relative shrink-0 w-full" data-name="div.contact-links">
      <a className="bg-[#0f1525] relative rounded-[12px] shrink-0 w-full" href="mailto:hello@abdulsalam.design" target="_blank" data-name="Component 6">
        <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[13px] relative size-full">
            <SpanContactLinkIcon />
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[14.4px] text-left whitespace-nowrap" role="link" tabIndex="0">
              <p className="cursor-pointer leading-[23px]">hello@abdulsalam.design</p>
            </div>
          </div>
        </div>
      </a>
      <a className="bg-[#0f1525] relative rounded-[12px] shrink-0 w-full" href="https://linkedin.com/" target="_blank" data-name="Component 6">
        <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[13px] relative size-full">
            <SpanContactLinkIcon1 />
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[14.4px] text-left whitespace-nowrap" role="link" tabIndex="0">
              <p className="cursor-pointer leading-[23px]">linkedin.com/in/abdulsalam</p>
            </div>
          </div>
        </div>
      </a>
      <a className="bg-[#0f1525] relative rounded-[12px] shrink-0 w-full" href="https://dribbble.com/" target="_blank" data-name="Component 6">
        <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[13px] relative size-full">
            <SpanContactLinkIcon2 />
            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#eef2ff] text-[14.4px] text-left whitespace-nowrap" role="link" tabIndex="0">
              <p className="cursor-pointer leading-[23px]">dribbble.com/abdulsalam</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function DivContactLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15.1px] items-start min-w-px pt-[7.41px] relative" data-name="div.contact-left">
      <DivEyebrow5 />
      <H5 />
      <PContactTagline />
      <DivContactLinks />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] tracking-[0.749px] uppercase w-full">
        <p className="leading-[19.97px]">Name</p>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[14.4px] w-full">
          <p className="leading-[normal]">Your name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0f1525] relative rounded-[10px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[15px] relative size-full">
          <DivPlaceholder />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Div35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="div">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] tracking-[0.749px] uppercase w-full">
        <p className="leading-[19.97px]">Email</p>
      </div>
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[14.4px] w-full">
          <p className="leading-[normal]">you@company.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#0f1525] relative rounded-[10px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[15px] relative size-full">
          <DivPlaceholder1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Div36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="div">
      <Label1 />
      <Input1 />
    </div>
  );
}

function DivFormRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="div.form-row">
      <Div35 />
      <Div36 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] tracking-[0.749px] uppercase w-full">
        <p className="leading-[19.97px]">Subject</p>
      </div>
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[14.4px] w-full">
          <p className="leading-[normal]">{`What's this about?`}</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#0f1525] relative rounded-[10px] shrink-0 w-full" data-name="input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[15px] relative size-full">
          <DivPlaceholder2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Div37() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="div">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[12.5px] tracking-[0.749px] uppercase w-full">
        <p className="leading-[19.97px]">Message</p>
      </div>
    </div>
  );
}

function DivPlaceholder3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[14.4px] w-full">
          <p className="leading-[normal]">Tell me about the project, role, or just say hello...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#0f1525] min-h-[140px] relative rounded-[10px] shrink-0 w-full" data-name="textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[108px] pt-[15px] px-[17px] relative size-full">
          <DivPlaceholder3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(79,142,247,0.12)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Div38() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[7.59px] relative shrink-0 w-full" data-name="div">
      <Label3 />
      <Textarea />
    </div>
  );
}

function ButtonBtnPrimaryMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="button.btn-primary:margin">
      <div className="bg-[#4f8ef7] relative rounded-[10px] shrink-0 w-full" data-name="Component 7">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pl-[28px] pr-[413.62px] py-[14px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Send Message →</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFormGroup() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="div.form-group">
      <DivFormRow />
      <Div37 />
      <Div38 />
      <ButtonBtnPrimaryMargin />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute content-stretch flex gap-[80px] items-start justify-center left-[360px] right-[360px] top-[5586.48px]" data-name="CONTACT">
      <DivContactLeft />
      <DivFormGroup />
    </div>
  );
}

function ANavLogo() {
  return (
    <a className="cursor-pointer h-[29.44px] relative shrink-0 w-[91.02px]" href="http://localhost:12402/__h2d_index.html" target="_blank" data-name="a.nav-logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-0 text-[18.4px] text-left text-white top-[14px] tracking-[-0.368px] w-[92.135px]" role="link" tabIndex="0">
          <p className="cursor-pointer">
            <span className="leading-[29.44px]">Abdul</span>
            <span className="leading-[29.44px] text-[#4f8ef7]" role="link" tabIndex="0">
              .
            </span>
          </p>
        </div>
      </div>
    </a>
  );
}

function Li() {
  return (
    <div className="relative self-stretch shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative size-full">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] tracking-[0.14px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html#about" target="_blank">
            <p className="cursor-pointer leading-[22.4px]">About</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative size-full">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] tracking-[0.14px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html#work" target="_blank">
            <p className="cursor-pointer leading-[22.4px]">Work</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative size-full">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] tracking-[0.14px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html#skills" target="_blank">
            <p className="cursor-pointer leading-[22.4px]">Skills</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-start pb-[1.59px] pt-px relative size-full">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] tracking-[0.14px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html#tools" target="_blank">
            <p className="cursor-pointer leading-[22.4px]">Tools</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Li4() {
  return (
    <div className="min-w-[53.77000045776367px] relative self-stretch shrink-0" data-name="li">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] pb-[1.59px] pt-px relative size-full">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Component 8">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#8a96ae] text-[14px] tracking-[0.14px] whitespace-nowrap" href="http://localhost:12402/__h2d_index.html#contact" target="_blank">
            <p className="cursor-pointer leading-[22.4px]">Contact</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function UlNavLinks() {
  return (
    <div className="h-[25.59px] relative shrink-0" data-name="ul.nav-links">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-start relative size-full">
        <Li />
        <Li1 />
        <Li2 />
        <Li3 />
        <Li4 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(8,12,20,0.7)] content-stretch flex items-center justify-between left-0 pb-[23px] pt-[22px] px-[64px] right-0 top-0" data-name="Nav">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.04)] border-b border-solid inset-0 pointer-events-none" />
      <ANavLogo />
      <UlNavLinks />
      <div className="bg-[#4f8ef7] relative rounded-[8px] shrink-0" data-name="Component 1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[22px] py-[10px] relative size-full">
          <a className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-white whitespace-nowrap" href="mailto:abdulsalam@email.com" target="_blank">
            <p className="cursor-pointer leading-[21.76px]">{`Let's Talk`}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(8, 12, 20) 0%, rgb(8, 12, 20) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Component">
      <Footer />
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <Tools />
      <Testimonials />
      <Contact />
      <Nav />
      <div className="absolute border border-[rgba(79,142,247,0.5)] border-solid left-[-20px] rounded-[20px] size-[40px] top-[-20px]" data-name="div#cursor-ring" />
      <div className="absolute bg-[#4f8ef7] left-[-6px] rounded-[6px] size-[12px] top-[-6px]" data-name="div#cursor" />
    </div>
  );
}