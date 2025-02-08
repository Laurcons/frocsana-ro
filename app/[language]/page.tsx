import { Lang } from '@/lib/locale';

import Attribution from './Attribution';
import NameCard from './NameCard';
import Projects from './Projects';
import Socials from './Socials';

export function generateStaticParams() {
  return [Lang.ro, Lang.en].map(language => ({
    language,
  }));
}

export default async function Home({ params }: { params: Promise<{ language: Lang }> }) {
  const lang = (await params).language;
  return (
    <>
      <NameCard lang={lang} />
      <Socials lang={lang} />
      <Projects lang={lang} />
      <Attribution lang={lang} />
      <div className="h-5"></div>
    </>
  );
}
