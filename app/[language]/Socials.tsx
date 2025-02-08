import Image from 'next/image';
import Link from 'next/link';

import { Instagram, Linkedin, SquareArrowOutUpRight } from 'lucide-react';

import discord from '@/assets/discord.svg';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { Lang } from '@/lib/locale';

export default function Socials({ lang }: { lang: Lang }) {
  const { t } = useLanguage(lang);
  return (
    <>
      <div className="mt-5 flex justify-around gap-4 overflow-x-auto px-3 pb-3">
        <Button variant="neutral">
          <Image alt="Discord" src={discord} />
          <span className="select-all">rocsana_ana</span>
        </Button>
        <Link href="https://linkedin.com/in/rocsana-fiser" target="_blank" rel="noreferer">
          <Button variant="neutral">
            <Linkedin />
            rocsana-fiser
            <SquareArrowOutUpRight className="w-3" />
          </Button>
        </Link>
        <Link href="https://instagram.com/fiser_rocsana" target="_blank" rel="noreferer">
          <Button variant="neutral">
            <Instagram />
            fiser_rocsana
            <SquareArrowOutUpRight className="w-3" />
          </Button>
        </Link>
      </div>
    </>
  );
}
