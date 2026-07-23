import {getRequestConfig} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import translations from '@/messages/translations.json';

type Locale = (typeof routing.locales)[number];

function nestMessages(locale: Locale) {
  const result: Record<string, unknown> = {};

  for (const [flatKey, value] of Object.entries(translations)) {
    const keys = flatKey.split('.');
    let current = result;

    while (keys.length > 1) {
      const key = keys.shift()!;
      current[key] ??= {};
      current = current[key] as Record<string, unknown>;
    }

    current[keys[0]] = value[locale];
  }

  return result;
}

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  console.log('REQUEST LOCALE:', locale);

  const currentLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  return {
    locale: currentLocale,
    messages: nestMessages(currentLocale)
  };
});