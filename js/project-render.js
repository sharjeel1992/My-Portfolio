function renderProjectCards(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = (window.PROJECTS || []).map(p => {
    const media = p.media || {};
    let mediaHtml = "";

    if (media.type === "image") {
      mediaHtml = `
        <div class="projectMedia">
          <img src="${media.src}" alt="${media.alt || p.title}" />
        </div>
      `;
    } else {
      const style = `style="--mediaA:${media.accent || "#22d3ee"}; --mediaB:${media.accent2 || "#38bdf8"};"`;
      mediaHtml = `
        <div class="projectMedia placeholder" ${style}>
          <div class="mediaLabel">${media.label || "Project"}</div>
          <div class="mediaSub">${media.subLabel || ""}</div>
        </div>
      `;
    }

    const highlights = (p.highlights || []).map(h => `<li>${h}</li>`).join("");
    const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");

    return `
      <article class="projectCard cardLight">
        ${mediaHtml}
        <div class="projectBody">
          <div class="projectTitleRow">
            <h3 class="h3">${p.title}</h3>
            ${p.subtitle ? `<span class="projectType">${p.subtitle}</span>` : ""}
          </div>
          <p class="projectTagline">${p.oneLiner || ""}</p>
          ${highlights ? `<ul class="projectList">${highlights}</ul>` : ""}
          <div class="tagRow">${tags}</div>
        </div>
      </article>
    `;
  }).join("");
}
