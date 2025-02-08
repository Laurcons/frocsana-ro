export enum Lang {
  ro = 'ro',
  en = 'en',
}

export type Localized = Record<Lang, string>;

export const L = {
  person_name: {
    ro: 'Rocsana Fișer',
    en: 'Rocsana Fișer',
  },
  occupation: {
    ro: 'Arhivist, documentarist la Universitatea Babeș-Bolyai',
    en: 'Archivist, documentarian at Babeș-Bolyai University',
  },
  city: {
    ro: 'Cluj-Napoca',
    en: 'Cluj-Napoca, Romania',
  },
  projects: [
    ...Array(30).fill({
      badges: [{ ro: 'Proiectul de licențǎ', en: "Bachelor's Thesis" }],
      name: {
        ro: 'Studenții Universitǎții Babeș-Bolyai din perioada interbelicǎ',
        en: "Babeș-Bolyai University's Students in the interwar period",
      },
      content: { ro: 'Lorem **ipsum** dolor [sit](https://laurcons.ro) amet', en: '' },
    }),
  ] as {
    name: Localized;
    badges?: Localized[];
    content: Localized;
  }[],
};
