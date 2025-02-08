import Link from 'next/link';

import { Heart, SquareArrowOutUpRight } from 'lucide-react';

import AppLink from '@/components/AppLink';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Lang } from '@/lib/locale';

export default function Attribution({ lang }: { lang: Lang }) {
  const { t } = useLanguage(lang);

  return (
    <>
      <div className="mx-5 flex flex-wrap gap-1 align-baseline">
        Made with <Heart /> by Laurentiu at{' '}
        <AppLink href="https://laurcons.ro" target="_blank" external>
          laurcons.ro
        </AppLink>
      </div>
    </>
  );
}
