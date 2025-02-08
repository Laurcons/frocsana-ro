import { Lang, Localized } from '../locale';

export const useLanguage = (language: Lang) => {
  return {
    t: (localeObject: Localized, ...params: string[]) => {
      const translationString = localeObject[language];
      return translationString.replace(/\$(\d+)/g, (_, index) => params[Number(index) - 1] || '');
    },
  };
};
