import { createI18n } from 'vue-i18n';
import en from '@/i18n/locales/en.json';
import vi from '@/i18n/locales/vi.json';
// Type-define 'en-US' as the master schema for the resource
export type MessageEnSchema = typeof en;
export type MessageViSchema = typeof vi;

export type Language = 'en' | 'vi';

export const supportLanguages: Language[] = ['en', 'vi'];

const locale: Language = (localStorage.getItem('locale') as Language) ?? supportLanguages[1];

export const i18n = createI18n<[MessageEnSchema, MessageViSchema], 'en' | 'vi'>({
  legacy: false,
  locale: locale,
  fallbackLocale: supportLanguages[0],
  messages: {
    en: en,
    vi: vi
  }
});

export type i18nType = typeof i18n;
