import ne from './ne.json';
import en from './en.json';

export type Language = 'ne' | 'en';

export const languages = {
  ne,
  en
} as const;

export const defaultLang: Language = 'ne';

export function getTranslations(lang: Language) {
  return languages[lang] || languages[defaultLang];
}

export function getChapterTitle(lang: Language, chapterNumber: number) {
  const t = getTranslations(lang);
  return t.chapters[chapterNumber as unknown as keyof typeof t.chapters]?.title || '';
}

export function getChapterSlug(chapterNumber: number) {
  return `chapters/${chapterNumber}`;
}

export const allChapters = [1, 2, 3, 4, 5, 6, 7, 8] as const;
