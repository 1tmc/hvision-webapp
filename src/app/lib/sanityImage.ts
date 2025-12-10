import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = imageUrlBuilder(sanityClient);

// Use the type that imageUrlBuilder expects
type ImageSource = Parameters<typeof builder.image>[0];

export const urlFor = (source: ImageSource) => builder.image(source);