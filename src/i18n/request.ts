import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import translations from '@/messages/translations.json';

function nestMessages(locale: 'ru' | 'en') {
  const result: Record<string, any> = {};

  for (const [flatKey, value] of Object.entries(translations)) {
    const parts = flatKey.split('.');
    let current = result;

    while (parts.length > 1) {
      const part = parts.shift()!;
      current[part] ??= {};
      current = current[part];
    }

    current[parts[0]] = value[locale];
  }

  return result;
}

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = routing.locales.includes(locale as any)
    ? locale
    : routing.defaultLocale;

  const messages = Object.fromEntries(
    Object.entries(translations).map(([key, value]) => [
      key,
      value[currentLocale]
    ])
  );

  return {
    locale: currentLocale,
    messages: nestMessages(currentLocale)
  };
});