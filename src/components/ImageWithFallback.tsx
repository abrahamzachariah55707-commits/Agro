import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackTitle,
  className = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#F4F8F6] border border-[#E2E8F0] p-8 text-center ${className}`}
      >
        <Sprout className="w-10 h-10 text-[#0D9488] mb-3" aria-hidden="true" />
        <p className="text-sm font-medium text-[#102A43]">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
