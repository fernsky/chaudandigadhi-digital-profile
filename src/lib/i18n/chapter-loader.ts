import type { Language } from './index';

/**
 * Loads chapter section translation with fallback mechanism
 * If translation for requested language is not found, falls back to available language
 *
 * @param chapter - Chapter number (e.g., 1, 2, 3)
 * @param section - Section slug (e.g., 'background', 'objectives')
 * @param lang - Requested language ('ne' or 'en')
 * @returns Translation object or null if not found
 */
export async function loadChapterSection<T = any>(
  chapter: number | string,
  section: string,
  lang: Language
): Promise<T | null> {
  try {
    // Try to load the requested language
    const translation = await import(`./chapters/${chapter}/${section}/${lang}.json`);
    return translation.default as T;
  } catch (error) {
    // If requested language not found, try fallback language
    const fallbackLang: Language = lang === 'ne' ? 'en' : 'ne';

    try {
      console.warn(
        `Translation not found for chapter ${chapter}, section ${section} in language ${lang}. ` +
        `Falling back to ${fallbackLang}.`
      );
      const fallbackTranslation = await import(`./chapters/${chapter}/${section}/${fallbackLang}.json`);
      return fallbackTranslation.default as T;
    } catch (fallbackError) {
      console.error(
        `Translation not found for chapter ${chapter}, section ${section} in both ${lang} and ${fallbackLang}.`
      );
      return null;
    }
  }
}

/**
 * Loads multiple chapter sections at once
 * Useful for loading all sections of a chapter
 *
 * @param chapter - Chapter number
 * @param sections - Array of section slugs
 * @param lang - Requested language
 * @returns Object with section slug as key and translation as value
 */
export async function loadChapterSections<T = any>(
  chapter: number | string,
  sections: string[],
  lang: Language
): Promise<Record<string, T | null>> {
  const results = await Promise.all(
    sections.map(async (section) => ({
      section,
      data: await loadChapterSection<T>(chapter, section, lang),
    }))
  );

  return results.reduce((acc, { section, data }) => {
    acc[section] = data;
    return acc;
  }, {} as Record<string, T | null>);
}

/**
 * Type-safe wrapper for loading chapter section
 * Throws error if translation not found (useful for required sections)
 *
 * @param chapter - Chapter number
 * @param section - Section slug
 * @param lang - Requested language
 * @returns Translation object (throws if not found)
 */
export async function requireChapterSection<T = any>(
  chapter: number | string,
  section: string,
  lang: Language
): Promise<T> {
  const translation = await loadChapterSection<T>(chapter, section, lang);

  if (!translation) {
    throw new Error(
      `Required translation not found for chapter ${chapter}, section ${section} in any language.`
    );
  }

  return translation;
}
