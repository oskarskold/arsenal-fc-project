import imageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '@/sanity/env';

// @ts-ignore
const builder = imageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

// @ts-ignore
export function buildImageUrl(source) {
  return builder.image(source);
}
