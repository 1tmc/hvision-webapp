export interface SanityImageAsset {
    _type: 'reference';
    _ref: string;
  }
  
  export interface SanityImage {
    _type: 'image';
    asset: SanityImageAsset;
    alt?: string;
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  }
  
  export type SanityImageSource = SanityImage | string | undefined;