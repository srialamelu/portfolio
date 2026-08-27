/* ==================================================
   Products data — add a new object to PRODUCTS to
   list a new tool. Everything below renders from this
   array, so no HTML editing is needed for future launches.
   ================================================== */

const PRODUCTS = [
  {
    id: "startup-decision-workbook",
    tag: "Decision Workbook",
    format: "PDF · 18 pages",
    title: "Startup Decision Workbook",
    price: "$0",
    priceNote: "Pay what you want",
    badge: "Most downloaded",
    description: "16 structured questions that walk you through the decisions every founder has to make before spending a rupee, dollar or pound: what to build, who it is for, and whether it is worth doing at all.",
    features: [
      "16 decision-guiding questions",
      "Instant PDF download",
      "Use before you write a business plan"
    ],
    cta: "Get it free",
    url: "https://alamelumangai.gumroad.com/l/startupdecisionworkbook"
  },
  {
    id: "zero-cost-business-startup-guide",
    tag: "Solopreneur Toolkit",
    format: "10+ tools · PDF",
    title: "Zero-Cost Business Startup Guide",
    price: "$3",
    priceNote: "Pay what you want, from $3",
    compare: "Less than a dinner out. Less than a movie ticket.",
    badge: "Best value",
    description: "10+ free and low-cost tools to get a real business live: domain, email, logo, LinkedIn presence, content creation, scheduling and more. The exact stack used to help launch a business at zero cost.",
    features: [
      "10+ tools with direct links",
      "Step-by-step setup order",
      "Built from a real $0-budget launch"
    ],
    cta: "Get the guide",
    url: "https://alamelumangai.gumroad.com/l/zerocostbusinessguide"
  }
];

function renderProducts() {
  const grid = document.getElementById("prodGrid");
  if (!grid) return;

  const cards = PRODUCTS.map(p => `
    <article class="prod-card" id="${p.id}">
      ${p.badge ? `<span class="prod-badge">${p.badge}</span>` : ""}
      <div class="prod-card-top">
        <div>
          <span class="prod-tag">${p.tag}</span>
          <span class="prod-format">${p.format}</span>
        </div>
        <div class="prod-price">
          <strong>${p.price}</strong>
          <span>${p.priceNote}</span>
        </div>
      </div>
      ${p.compare ? `<p class="prod-compare">${p.compare}</p>` : ""}
      <h3>${p.title}</h3>
      <p class="prod-card-desc">${p.description}</p>
      <ul class="prod-features">
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <a class="btn btn-primary prod-card-btn" href="${p.url}" target="_blank" rel="noopener">
        ${p.cta}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </article>
  `).join("");

  const comingSoon = `
    <article class="prod-card prod-card-coming">
      <div class="prod-coming-icon" aria-hidden="true">＋</div>
      <h3>More tools launching soon</h3>
      <p>The next toolkit is in the works. Check back, or follow the store for a heads-up the day it goes live.</p>
    </article>
  `;

  grid.innerHTML = cards + comingSoon;
}

document.addEventListener("DOMContentLoaded", renderProducts);
