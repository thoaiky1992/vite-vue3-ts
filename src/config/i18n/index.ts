import { createI18n } from 'vue-i18n';
import en from '@/config/i18n/locales/en';
import vi from '@/config/i18n/locales/vi';
import ja from '@/config/i18n/locales/ja';
// Type-define 'en-US' as the master schema for the resource
export type MessageEnSchema = typeof en;
export type MessageViSchema = typeof vi;
export type MessageJaSchema = typeof ja;

export type Language = 'en' | 'vi' | 'ja';

export const supportLanguages: Language[] = ['en', 'vi', 'ja'];

const locale: Language = (localStorage.getItem('locale') as Language) ?? supportLanguages[1];

export const i18n = createI18n<
  [MessageEnSchema, MessageViSchema, MessageJaSchema],
  'en' | 'vi' | 'ja'
>({
  legacy: false,
  locale: locale,
  fallbackLocale: supportLanguages[0],
  messages: { en, vi, ja }
});

export type i18nType = typeof i18n;
