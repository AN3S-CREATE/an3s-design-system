// AN3S wordmark geometry, redrawn from the 366 x 124 raster lift of the key visual.
// Units: the raster's pixels, so the outlines sit exactly over project/assets/Logos/an3s-wordmark.png.
// Cap height runs from T to B (90 units); round letters overshoot the baseline by 0.2.
// Edges were fitted to the raster's anti-aliased contours; fitted values are kept, not idealised,
// so the mark matches the artwork it replaces.

const T = 18.6;
const B = 108.6;
const f = (n) => +n.toFixed(2);

// A: an open apex (no crossbar), legs 16 units wide measured across, flat top 15.9 wide.
// The left leg leans 0.455, the right 0.429; the right foot tucks into the N's stem.
function letterA() {
  const topL = 46.7, topR = 62.6, leg = 16, sl = 0.455, sr = 0.429;
  const footOL = topL - sl * (B - T), footOR = topR + sr * (B - T);
  const footIL = footOL + leg, footIR = footOR - leg;
  const d = (footIR - footIL) / (sl + sr); // height of the inner apex above the baseline
  const apexX = footIL + sl * d, apexY = B - d;
  return `M${topL} ${T}H${topR}L${f(footOR)} ${B}H${f(footIR)}L${f(apexX)} ${f(apexY)}L${f(footIL)} ${B}H${f(footOL)}Z`;
}

// N: stems 14.6 wide; the diagonal (17.4 across) runs corner to corner.
function letterN() {
  const l0 = 99.6, l1 = 114.2, r0 = 161.1, r1 = 175.7, dw = 17.4;
  const m = (r1 - dw - l0) / (B - T);
  const yR = T + (r0 - (l0 + dw)) / m; // diagonal's upper edge meets the right stem
  const yL = T + (l1 - l0) / m;        // diagonal's lower edge meets the left stem
  return `M${l0} ${T}H${l0 + dw}L${r0} ${f(yR)}V${T}H${r1}V${B}H${f(r1 - dw)}L${l1} ${f(yL)}V${B}H${l0}Z`;
}

// 3: flat top with a diagonal (slope 1.09) down to a bar, then a round bowl; the foot is cut at 0.563.
function letter3() {
  const x0 = 183, x1 = 251.9, barB = 33.05, s = 1.09, dw = 18.4, mid = 206;
  const cx = 230.9, cy = 82.8, ro = 25.8, ri = 12.3;
  const bowlTop = cy - ro, inTop = cy - ri, inBot = cy + ri, bot = cy + ro;
  const diagR = x1 - s * (bowlTop - barB);        // diagonal's right edge meets the bowl top
  const diagL0 = x1 - dw;                          // diagonal's left edge at the bar bottom
  const yMid = barB + (diagL0 - mid) / s;          // diagonal's left edge meets the bar end
  const cut = 0.563, footB = 180.1, footT = f(footB + cut * (bot - inBot));
  return `M${x0} ${T}H${x1}V${barB}L${f(diagR)} ${f(bowlTop)}H${cx}A${ro} ${ro} 0 0 1 ${cx} ${f(bot)}H${footB}L${footT} ${f(inBot)}H${cx}A${ri} ${ri} 0 0 0 ${cx} ${f(inTop)}H${mid}V${f(yMid)}L${f(diagL0)} ${barB}H${x0}Z`;
}

// S: two bowls (outer radius 26.1, inner 11.9) sharing a 14.2 spine; slanted terminals.
function letterS() {
  const ro = 26.1, ri = 11.9;
  const ux = 288.7, uy = T + ro;        // upper bowl centre
  const lx = 318.5, ly = uy + ro + ri;  // lower bowl centre: spine bottom = upper outer bottom = lower inner top
  const barB = uy - ri, spineT = uy + ri, spineB = uy + ro, botT = ly + ri, bot = ly + ro;
  const tip = 349, tipCut = 0.95, foot = 264.7, footCut = 0.766;
  return `M${ux} ${T}H${tip}L${f(tip - tipCut * (barB - T))} ${f(barB)}H${ux}A${ri} ${ri} 0 0 0 ${ux} ${f(spineT)}H${lx}A${ro} ${ro} 0 0 1 ${lx} ${f(bot)}H${foot}L${f(foot + footCut * (bot - botT))} ${f(botT)}H${lx}A${ri} ${ri} 0 0 0 ${lx} ${f(spineB)}H${ux}A${ro} ${ro} 0 0 1 ${ux} ${T}Z`;
}

export const GLYPHS = { A: letterA(), N: letterN(), three: letter3(), S: letterS() };
// Ink box of the four letters in raster units.
export const BOX = { x0: 5.75, y0: T, x1: 349, y1: 108.8 };
