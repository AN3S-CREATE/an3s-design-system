/* @ds-bundle: {"format":4,"namespace":"AN3S","components":[{"name":"Panel"},{"name":"ServiceGrid"},{"name":"Icon"},{"name":"AwardWall"},{"name":"GradientText"},{"name":"Eyebrow"},{"name":"NameLockup"},{"name":"Statement"},{"name":"Highlight"},{"name":"Halo"},{"name":"Starfield"},{"name":"Button"}]} */
/* AN3S design system components: one classic script that assigns window.AN3S.
   Needs React 18 as window.React, components/bundle.css and the system's tokens.css. */
(function () {
  'use strict';
  var React = window.React;
  if (!React) { return; }
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) { out.push(arguments[i]); } }
    return out.join(' ');
  }

  function without(props, keys) {
    var out = {};
    Object.keys(props).forEach(function (k) { if (keys.indexOf(k) === -1) { out[k] = props[k]; } });
    return out;
  }

  // A token's live value, so canvas drawing follows tokens.css.
  function token(el, name, fallback) {
    var v = el ? getComputedStyle(el).getPropertyValue('--' + name).trim() : '';
    return v || fallback;
  }

  // Columns that fit: at most `wanted`, each at least `minWidth` px wide. With `count`,
  // prefers a column count that divides the items evenly (8 tiles: 4, then 2, then 1).
  function useColumns(ref, wanted, minWidth, count) {
    var state = React.useState(wanted);
    var cols = state[0];
    var setCols = state[1];
    React.useEffect(function () {
      var el = ref.current;
      if (!el || typeof ResizeObserver === 'undefined') { return undefined; }
      function fit() {
        var fits = Math.max(1, Math.min(wanted, Math.floor(el.clientWidth / minWidth) || 1));
        var n = fits;
        if (count) { while (n > 1 && count % n !== 0) { n -= 1; } }
        setCols(n);
      }
      fit();
      var ro = new ResizeObserver(fit);
      ro.observe(el);
      return function () { ro.disconnect(); };
    }, [wanted, minWidth, count]);
    return cols;
  }

  /* ---------- Icon ---------- */
  // 48-unit grid, 2px round strokes. p: primary form (pink), c: detail (cyan), o: circles [tone, cx, cy, r].
  var ICONS = {
    'ai-systems': {
      p: ['M23 9.5c-1.6-2.4-5.6-2.9-7.6-.6-2.8-.4-5.2 2-4.9 4.9-2.6 1.2-3.5 4.4-1.9 6.7-1.9 1.9-1.6 5.3.6 6.9-.6 2.9 1.4 5.7 4.3 6 .9 2.6 3.8 4 6.4 3 1.2 1.1 2.2 1.7 3.1 1.7',
        'M23 9.5v29.1', 'M17.5 15.5c1.7.2 2.9 1.6 2.8 3.3', 'M13 23.5c1.9-.6 3.9.3 4.6 2.1', 'M16.5 31.5c.3-1.8 1.9-3 3.7-2.8'],
      c: ['M23 15.5h5.5l3.5-3.5', 'M23 24h10', 'M23 32.5h5.5l3.5 3.5'],
      o: [['c', 34.2, 10.3, 2.3], ['c', 35.8, 24, 2.3], ['c', 34.2, 37.7, 2.3]]
    },
    'business-growth': {
      p: ['M7 26l10-6 8 2 13-11', 'M31 10.5h7.5V18'],
      c: ['M8 33.5h5v7H8z', 'M17 29.5h5v11h-5z', 'M26 25h5v15.5h-5z', 'M35 20h5v20.5h-5z']
    },
    'web-app-development': {
      p: ['M16 14L7 24l9 10'],
      c: ['M28.5 10l-9 28', 'M32 14l9 10-9 10']
    },
    'experimental-marketing': {
      p: ['M8.5 19.5h6l16-8.5v26l-16-8.5h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z', 'M12 28.5l2.2 9h4.3l-1.6-9'],
      c: ['M36 17l4.5-3', 'M37 24h5.5', 'M36 31l4.5 3']
    },
    'brand-strategy': {
      p: ['M24 5v8', 'M24 35v8', 'M5 24h8', 'M35 24h8'],
      c: [],
      o: [['p', 24, 24, 12.5], ['c', 24, 24, 5]]
    },
    '3d-virtualization': {
      p: ['M7.5 15L24 24l16.5-9', 'M24 24v18.5'],
      c: ['M24 5.5l16.5 9.5v18L24 42.5 7.5 33V15z']
    },
    'sales-leadership': {
      p: ['M15 39.5V36a9 9 0 0 1 18 0v3.5'],
      c: ['M4.5 39.5v-2.5a7 7 0 0 1 8.4-6.9', 'M43.5 39.5v-2.5a7 7 0 0 0-8.4-6.9'],
      o: [['p', 24, 15, 5.5], ['c', 11.5, 20, 4.2], ['c', 36.5, 20, 4.2]]
    },
    'innovation-mentorship': {
      p: ['M19 36v-3.8c-3.6-2.1-6-6-6-10.2a11 11 0 0 1 22 0c0 4.2-2.4 8.1-6 10.2V36z', 'M19.5 40h9', 'M21.5 44h5', 'M21 29v-5l3-3 3 3v5'],
      c: ['M24 2.5v4', 'M10 7l2.8 2.8', 'M38 7l-2.8 2.8', 'M4 21h4', 'M40 21h4']
    }
  };

  var glowCount = 0;

  function Icon(props) {
    var idRef = React.useRef('');
    if (!idRef.current) { glowCount += 1; idRef.current = 'an3s-icon-glow-' + glowCount; }
    var def = ICONS[props.name];
    if (!def) { return null; }
    var size = props.size || 48;
    var glow = props.glow !== false;
    var fid = idRef.current;
    var marks = [];
    def.p.forEach(function (d, i) { marks.push(h('path', { key: 'p' + i, d: d, className: 'an3s-icon__p' })); });
    def.c.forEach(function (d, i) { marks.push(h('path', { key: 'c' + i, d: d, className: 'an3s-icon__c' })); });
    (def.o || []).forEach(function (o, i) {
      marks.push(h('circle', { key: 'o' + i, cx: o[1], cy: o[2], r: o[3], className: o[0] === 'p' ? 'an3s-icon__p' : 'an3s-icon__c' }));
    });
    var label = props.title || null;
    return h('svg', {
      className: cx('an3s-icon', props.className),
      viewBox: '0 0 48 48',
      width: size,
      height: size,
      role: label ? 'img' : undefined,
      'aria-label': label || undefined,
      'aria-hidden': label ? undefined : 'true',
      focusable: 'false'
    },
    glow ? h('defs', null,
      h('filter', { id: fid, x: '-30%', y: '-30%', width: '160%', height: '160%' },
        h('feGaussianBlur', { stdDeviation: 1.4, result: 'blur' }),
        h('feMerge', null, h('feMergeNode', { in: 'blur' }), h('feMergeNode', { in: 'SourceGraphic' })))) : null,
    h('g', {
      fill: 'none',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      filter: glow ? 'url(#' + fid + ')' : undefined
    }, marks));
  }
  Icon.names = Object.keys(ICONS);

  /* ---------- ServiceGrid ---------- */
  var SERVICES = [
    { icon: 'ai-systems', label: 'AI Systems & Automation' },
    { icon: 'business-growth', label: 'Business Growth' },
    { icon: 'web-app-development', label: 'Web & App Development' },
    { icon: 'experimental-marketing', label: 'Experimental Marketing' },
    { icon: 'brand-strategy', label: 'Brand Strategy' },
    { icon: '3d-virtualization', label: '3D Virtualization & Events' },
    { icon: 'sales-leadership', label: 'Sales Leadership' },
    { icon: 'innovation-mentorship', label: 'Innovation & Mentorship' }
  ];

  function ServiceGrid(props) {
    var items = props.items || SERVICES;
    var ref = React.useRef(null);
    var cols = useColumns(ref, props.columns || 4, props.minTileWidth || 150, items.length);
    return h('ul', { ref: ref, className: cx('an3s-services', props.className), style: { '--an3s-cols': cols } },
      items.map(function (item, i) {
        return h('li', {
          key: item.label + '-' + i,
          className: cx('an3s-service', i % cols !== 0 && 'an3s-service--col', i >= cols && 'an3s-service--row')
        },
        item.icon ? h(Icon, { name: item.icon, size: props.iconSize || 48 }) : null,
        h('span', { className: 'an3s-service__label service' }, item.label));
      }));
  }
  ServiceGrid.defaultItems = SERVICES;

  /* ---------- Panel ---------- */
  function Panel(props) {
    var tone = props.tone === 'blue' ? 'blue' : 'pink';
    var Tag = props.as || 'section';
    var TabTag = props.labelAs || 'h2';
    var attrs = without(props, ['label', 'tone', 'as', 'labelAs', 'className', 'children']);
    attrs.className = cx('an3s-panel', 'an3s-panel--' + tone, props.label && 'an3s-panel--tabbed', props.className);
    return h(Tag, attrs,
      props.label ? h(TabTag, { className: 'an3s-panel__tab label' }, props.label) : null,
      props.children);
  }

  /* ---------- AwardWall ---------- */
  function AwardWall(props) {
    var items = props.items || [];
    var ref = React.useRef(null);
    var cols = useColumns(ref, props.columns || 4, props.minTileWidth || 140, 0);
    var solo = items.length > 1 && items.length % cols === 1;
    return h('ul', { ref: ref, className: cx('an3s-awards', props.className), style: { '--an3s-cols': cols } },
      items.map(function (award, i) {
        return h('li', {
          key: award.name + '-' + i,
          className: cx('an3s-award', solo && i === items.length - 1 && 'an3s-award--solo')
        },
        award.logo
          ? h('img', { className: 'an3s-award__logo', src: award.logo, alt: award.name, loading: 'lazy' })
          : h('span', { className: 'an3s-award__name service' }, award.name),
        award.detail ? h('span', { className: 'an3s-award__detail caption' }, award.detail) : null);
      }));
  }

  /* ---------- GradientText ---------- */
  function GradientText(props) {
    var Tag = props.as || 'p';
    var align = props.align === 'start' ? 'start' : 'center';
    var attrs = without(props, ['as', 'align', 'className', 'children']);
    attrs.className = cx('an3s-gradient-line', 'an3s-gradient-line--' + align, props.className);
    return h(Tag, attrs, h('span', { className: 'an3s-gradient-text tagline' }, props.children));
  }

  /* ---------- Eyebrow ---------- */
  function Eyebrow(props) {
    return h('p', { className: cx('an3s-eyebrow', props.className) },
      h('span', { className: 'an3s-eyebrow__rule an3s-eyebrow__rule--pink', 'aria-hidden': 'true' }),
      h('span', { className: 'an3s-eyebrow__text eyebrow' }, props.children),
      h('span', { className: 'an3s-eyebrow__rule an3s-eyebrow__rule--cyan', 'aria-hidden': 'true' }));
  }

  /* ---------- NameLockup ---------- */
  function NameLockup(props) {
    var Tag = props.as || 'p';
    var style = props.size ? { fontSize: props.size + 'px', lineHeight: Math.round(props.size * 1.07) + 'px' } : undefined;
    return h(Tag, { className: cx('an3s-name', props.align === 'center' && 'an3s-name--center', props.className) },
      h('span', { className: 'an3s-name__first name-light', style: style }, props.first),
      ' ',
      h('span', { className: 'an3s-name__last name-bold', style: style }, props.last));
  }

  /* ---------- Statement + Highlight ---------- */
  function Statement(props) {
    var Tag = props.as || 'p';
    return h(Tag, { className: cx('an3s-statement', 'statement', props.className) }, props.children);
  }

  function Highlight(props) {
    var tone = props.tone === 'cyan' || props.tone === 'violet' ? props.tone : 'pink';
    return h('strong', { className: cx('an3s-highlight', 'an3s-highlight--' + tone, props.className) }, props.children);
  }

  /* ---------- Halo ---------- */
  function Halo(props) {
    var size = props.size || 280;
    var clip = props.clip !== false;
    return h('div', { className: cx('an3s-halo', !clip && 'an3s-halo--open', props.className), style: { '--an3s-halo': size + 'px' } },
      h('span', { className: 'an3s-halo__bloom', 'aria-hidden': 'true' }, h('span', { className: 'an3s-halo__ring' })),
      h('span', { className: 'an3s-halo__ring', 'aria-hidden': 'true' }),
      props.children ? h('div', { className: 'an3s-halo__subject' }, props.children) : null);
  }

  /* ---------- Starfield ---------- */
  function seeded(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var TAU = Math.PI * 2;

  function drawSky(box, canvas, opts) {
    var w = box.clientWidth;
    var ht = box.clientHeight;
    if (!w || !ht) { return; }
    var dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(ht * dpr);
    var ctx = canvas.getContext('2d');
    if (!ctx) { return; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, ht);
    var ink = token(box, 'ink', '#ffffff');
    var pink = token(box, 'pink', '#fb49b6');
    var cyan = token(box, 'cyan', '#48e1fd');
    var blue = token(box, 'blue', '#2476f0');
    var rnd = seeded(opts.seed);
    var i;

    // Pinpoint stars: mostly white, a few pink and cyan, one in sixteen large enough to bloom.
    var count = Math.round((w * ht) / 2400 * opts.density);
    for (i = 0; i < count; i++) {
      var x = rnd() * w;
      var y = rnd() * ht;
      var big = rnd() > 0.94;
      var r = big ? 0.9 + rnd() * 0.9 : 0.3 + rnd() * 0.6;
      var tint = rnd();
      ctx.fillStyle = tint < 0.07 ? pink : (tint < 0.14 ? cyan : ink);
      ctx.globalAlpha = big ? 0.9 : 0.25 + rnd() * 0.6;
      ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
      if (big) { ctx.globalAlpha = 0.16; ctx.beginPath(); ctx.arc(x, y, r * 3.4, 0, TAU); ctx.fill(); }
    }

    // Light streaks falling from the upper right toward the lower left.
    if (opts.streaks) {
      ctx.lineCap = 'round';
      ctx.lineWidth = 1.2;
      for (i = 0; i < 7; i++) {
        var sx = w * (0.62 + rnd() * 0.4);
        var sy = ht * rnd() * 0.45;
        var len = 60 + rnd() * 160;
        var ex = sx - len;
        var ey = sy + len * 0.35;
        var trail = ctx.createLinearGradient(sx, sy, ex, ey);
        trail.addColorStop(0, i % 2 ? pink : cyan);
        trail.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.globalAlpha = 0.55;
        ctx.strokeStyle = trail;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke();
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = ink;
        ctx.beginPath(); ctx.arc(sx, sy, 1.3, 0, TAU); ctx.fill();
      }
    }

    // Circuit traces entering from the upper left: run, bend 45 degrees, end in a node.
    if (opts.circuits) {
      ctx.lineWidth = 1;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = blue;
      for (i = 0; i < 6; i++) {
        var y0 = ht * (0.05 + i * 0.05);
        var x1 = w * (0.04 + rnd() * 0.1);
        var run = 14 + rnd() * 34;
        var tail = 8 + rnd() * 24;
        ctx.globalAlpha = 0.3 + rnd() * 0.3;
        ctx.beginPath();
        ctx.moveTo(0, y0);
        ctx.lineTo(x1, y0);
        ctx.lineTo(x1 + run, y0 + run);
        ctx.lineTo(x1 + run + tail, y0 + run);
        ctx.stroke();
        ctx.beginPath(); ctx.arc(x1 + run + tail + 2.4, y0 + run, 2.4, 0, TAU); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  function Starfield(props) {
    var boxRef = React.useRef(null);
    var skyRef = React.useRef(null);
    var seed = props.seed == null ? 2003 : props.seed;
    var density = props.density == null ? 1 : props.density;
    var circuits = props.circuits !== false;
    var streaks = props.streaks !== false;
    React.useEffect(function () {
      var box = boxRef.current;
      var sky = skyRef.current;
      if (!box || !sky) { return undefined; }
      var opts = { seed: seed, density: density, circuits: circuits, streaks: streaks };
      function paint() { drawSky(box, sky, opts); }
      paint();
      if (typeof ResizeObserver === 'undefined') { return undefined; }
      var ro = new ResizeObserver(paint);
      ro.observe(box);
      return function () { ro.disconnect(); };
    }, [seed, density, circuits, streaks]);
    var Tag = props.as || 'div';
    var style = Object.assign({}, props.minHeight ? { minHeight: props.minHeight + 'px' } : null, props.style);
    return h(Tag, { ref: boxRef, className: cx('an3s-starfield', props.smoke === false && 'an3s-starfield--calm', props.className), style: style },
      h('canvas', { ref: skyRef, className: 'an3s-starfield__sky', 'aria-hidden': 'true' }),
      h('div', { className: 'an3s-starfield__content' }, props.children));
  }

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant === 'outline' ? 'outline' : 'glow';
    var Tag = props.href ? 'a' : 'button';
    var attrs = without(props, ['variant', 'className', 'children']);
    if (Tag === 'button' && !attrs.type) { attrs.type = 'button'; }
    attrs.className = cx('an3s-btn', 'an3s-btn--' + variant, 'action', props.className);
    return h(Tag, attrs, props.children);
  }

  window.AN3S = Object.assign(window.AN3S || {}, {
    Panel: Panel,
    ServiceGrid: ServiceGrid,
    Icon: Icon,
    AwardWall: AwardWall,
    GradientText: GradientText,
    Eyebrow: Eyebrow,
    NameLockup: NameLockup,
    Statement: Statement,
    Highlight: Highlight,
    Halo: Halo,
    Starfield: Starfield,
    Button: Button
  });
})();
