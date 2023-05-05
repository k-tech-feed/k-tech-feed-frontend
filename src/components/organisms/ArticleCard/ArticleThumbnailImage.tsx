import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

interface Props extends ImageProps {
  alt: string;
}

const defaultThumbnailSrc = '/thumbnail.png';

const ArticleThumbnailImage = ({ src, alt, ...rest }: Props) => {
  const [imgSrc, setImgSrc] = useState(src === '' ? defaultThumbnailSrc : src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      {...rest}
      onError={() => {
        setImgSrc('/thumbnail.png');
      }}
    />
  );
};

export default ArticleThumbnailImage;
