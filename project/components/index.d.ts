import type * as React from 'react';

/** The eight AN3S service icons, one per core-work discipline. */
export type IconName =
  | 'ai-systems'
  | 'business-growth'
  | 'web-app-development'
  | 'experimental-marketing'
  | 'brand-strategy'
  | '3d-virtualization'
  | 'sales-leadership'
  | 'innovation-mentorship';

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  /** Tab label notched into the top edge, set uppercase (e.g. "Awards", "Core Work"). Omit for no tab. */
  label?: string;
  /** 'pink': edge runs pink → violet → blue left to right, pink bloom (the Awards panel). 'blue': blue edge with a pink lower-left corner, blue bloom (the Core Work panel). Default 'pink'. */
  tone?: 'pink' | 'blue';
  /** Element for the panel. Default 'section'. */
  as?: 'section' | 'div' | 'article' | 'aside';
  /** Element for the tab label. Default 'h2'. */
  labelAs?: 'h2' | 'h3' | 'h4' | 'span';
  children?: React.ReactNode;
}
/** Neon-edged panel with a tab label notched into its top edge. */
export declare function Panel(props: PanelProps): React.ReactElement;

export interface ServiceItem {
  /** One of the eight brand icons; omit for a text-only tile. */
  icon?: IconName;
  /** Title Case with "&" ("Web & App Development"); shown uppercase. */
  label: string;
}
export interface ServiceGridProps {
  /** Tiles in reading order. Default: the eight AN3S core-work disciplines (ServiceGrid.defaultItems). */
  items?: ServiceItem[];
  /** Columns wanted. Default 4; drops to a count that divides the tiles evenly when tiles would fall under minTileWidth. */
  columns?: number;
  /** Narrowest a tile may get, in px. Default 150. */
  minTileWidth?: number;
  /** Icon size in px. Default 48 (the icon-tile token). */
  iconSize?: number;
  className?: string;
}
/** Icon-over-label tiles divided by hairlines: the Core Work grid. */
export declare function ServiceGrid(props: ServiceGridProps): React.ReactElement;

export interface IconProps {
  name: IconName;
  /** Rendered size in px. Default 48; use 20 inline. */
  size?: number;
  /** Soft neon glow. Default true; turn off below 24px. */
  glow?: boolean;
  /** Accessible name. Omit when a visible label sits beside the icon (the icon is then hidden from assistive tech). */
  title?: string;
  className?: string;
}
/** Two-tone neon line icon: primary form in pink, detail in cyan. */
export declare function Icon(props: IconProps): React.ReactElement | null;

export interface Award {
  /** Award title as the awarding body writes it. Shown uppercase when there is no logo; used as alt text when there is. */
  name: string;
  /** Year or category line under the mark (e.g. "YE Awards 2019"). */
  detail?: string;
  /** URL of the awarding body's official logo; rendered in single-colour white. */
  logo?: string;
}
export interface AwardWallProps {
  items: Award[];
  /** Columns wanted. Default 4. */
  columns?: number;
  /** Narrowest a cell may get, in px. Default 140. */
  minTileWidth?: number;
  className?: string;
}
/** Grid of award marks in single-colour white; a last lone item centres on its own row. */
export declare function AwardWall(props: AwardWallProps): React.ReactElement;

export interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  /** Default 'p'. */
  as?: 'p' | 'h1' | 'h2' | 'div';
  /** Default 'center', which also balances the wide tracking. */
  align?: 'center' | 'start';
  children?: React.ReactNode;
}
/** One uppercase tagline line filled with gradient-glow (pink → violet → cyan). */
export declare function GradientText(props: GradientTextProps): React.ReactElement;

export interface EyebrowProps {
  /** A few words, e.g. "Est. 2003"; shown uppercase. */
  children?: React.ReactNode;
  className?: string;
}
/** Small uppercase marker between a pink and a cyan neon rule. */
export declare function Eyebrow(props: EyebrowProps): React.ReactElement;

export interface NameLockupProps {
  /** First name, set Light. */
  first: string;
  /** Surname, set ExtraBold. */
  last: string;
  /** Font size in px for both lines. Default 56 (the name-light / name-bold styles). */
  size?: number;
  /** Default 'start'. */
  align?: 'start' | 'center';
  /** Default 'p'; use 'h1' when the name is the page title. */
  as?: 'p' | 'h1' | 'h2' | 'div';
  className?: string;
}
/** Two-line name: Light first name over ExtraBold surname. */
export declare function NameLockup(props: NameLockupProps): React.ReactElement;

export interface StatementProps {
  /** Default 'p'. */
  as?: 'p' | 'h2' | 'h3' | 'div';
  /** Text with two or three Highlight words. */
  children?: React.ReactNode;
  className?: string;
}
/** Uppercase, tracked descriptor line in ink. */
export declare function Statement(props: StatementProps): React.ReactElement;

export interface HighlightProps {
  /** Default 'pink'. Pink for strategy and people, cyan for tech, violet only for the word in between. */
  tone?: 'pink' | 'cyan' | 'violet';
  children?: React.ReactNode;
  className?: string;
}
/** ExtraBold word in a glow tint, inside a Statement or tagline. */
export declare function Highlight(props: HighlightProps): React.ReactElement;

export interface HaloProps {
  /** Diameter in px. Default 280. */
  size?: number;
  /** Clip the subject to a circle inside the ring. Default true; false lets a cut-out portrait stand in front of the ring. */
  clip?: boolean;
  /** The subject: a portrait <img>, usually. */
  children?: React.ReactNode;
  className?: string;
}
/** Neon ring (pink → violet → blue) with bloom, framing one subject. */
export declare function Halo(props: HaloProps): React.ReactElement;

export interface StarfieldProps {
  /** Star layout seed; the same seed draws the same sky. Default 2003. */
  seed?: number;
  /** Star density multiplier. Default 1. */
  density?: number;
  /** Circuit traces in the upper left. Default true. */
  circuits?: boolean;
  /** Light streaks in the upper right. Default true. */
  streaks?: boolean;
  /** Pink and blue smoke glows. Default true; false leaves plain gradient-space. */
  smoke?: boolean;
  /** Minimum height in px. */
  minHeight?: number;
  /** Default 'div'. */
  as?: 'div' | 'section' | 'header' | 'main';
  style?: React.CSSProperties;
  /** Content laid over the sky. */
  children?: React.ReactNode;
  className?: string;
}
/** The deep-space background: void-to-nebula gradient, smoke, stars, streaks and circuit traces. */
export declare function Starfield(props: StarfieldProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'glow': gradient-glow fill with deep-space label, for the one main action. 'outline': neon gradient edge, white label. Default 'glow'. */
  variant?: 'glow' | 'outline';
  /** Renders a link styled as a button. */
  href?: string;
}
/** Uppercase action button (an intentional addition: the key visual has no controls). */
export declare function Button(props: ButtonProps): React.ReactElement;

declare global {
  interface Window {
    AN3S: {
      Panel: typeof Panel;
      ServiceGrid: typeof ServiceGrid;
      Icon: typeof Icon;
      AwardWall: typeof AwardWall;
      GradientText: typeof GradientText;
      Eyebrow: typeof Eyebrow;
      NameLockup: typeof NameLockup;
      Statement: typeof Statement;
      Highlight: typeof Highlight;
      Halo: typeof Halo;
      Starfield: typeof Starfield;
      Button: typeof Button;
    };
  }
}
