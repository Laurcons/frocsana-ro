'use client';

import Link from 'next/link';

import rocsi from '@/assets/rocsi.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { L, Lang } from '@/lib/locale';

export default function NameCard({ lang }: { lang: Lang }) {
  const { t } = useLanguage(lang);
  return (
    <>
      <div className="mt-3 px-3 lg:sticky lg:top-3 lg:mt-10">
        <Card className="relative">
          <CardContent className="flex flex-col-reverse justify-around py-5 md:flex-row">
            <div className="flex flex-col justify-around gap-2">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{t(L.person_name)}</h1>
              <div className="md:max-w-[70%]">
                <p className="mb-1">{t(L.occupation)}</p>
                <p className="mb-1">{t(L.city)}</p>
              </div>
            </div>
            <img
              className="mx-auto mb-5 h-[150px] w-[150px] rounded-full object-cover outline outline-2 outline-border md:mx-0"
              alt={t(L.person_name)}
              src={rocsi.src}
            />
          </CardContent>
          <div className="absolute right-0 top-0 mr-3 mt-3 flex flex-col gap-2">
            <Link href="/ro">
              <Button size="sm" variant={lang === Lang.ro ? 'noShadow' : 'default'}>
                RO
              </Button>
            </Link>
            <Link href="/en">
              <Button size="sm" variant={lang === Lang.en ? 'noShadow' : 'default'}>
                EN
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}
