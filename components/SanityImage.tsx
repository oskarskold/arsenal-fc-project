'use client';

import { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { buildImageUrl } from '@/sanity/lib/image';
import { ImageType } from '@/types';

interface Props extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> {
  image: ImageType;
  quality?: number;
  width?: number;
  height?: number;
  assetWidth?: number;
  assetHeight?: number;
  alt?: string;
}

const SanityImage: React.FC<Props> = ({
  image,
  quality,
  width,
  height,
  assetWidth,
  assetHeight,
  alt,
  ...rest
}) => {
  const [src, setSrc] = useState<string>('');
  useEffect(() => {
    if (image) {
      let builder = buildImageUrl(image).fit('max').auto('format');
      builder = applyOptions(builder, assetWidth, assetHeight);
      setSrc(builder.url());
    }
  }, [image, width, height, quality]);

  if (!src) {
    return null;
  }

  const props = {
    ...rest,
    src: src,
    alt: alt ?? image?.alt ?? '',
  };

  return <Image width={width ?? 1000} height={height ?? 500} {...props} />;
};

export default SanityImage;

function applyOptions(builder: any, width?: number, height?: number) {
  let _builder = builder;
  if (builder) {
    const applyWidth = typeof width === 'number' && width;
    if (applyWidth) {
      _builder = _builder.width(applyWidth);
    }
    const applyHeight = typeof height === 'number' && height;
    if (applyHeight) {
      _builder = _builder.height(applyHeight);
    }
  }
  return _builder;
}
