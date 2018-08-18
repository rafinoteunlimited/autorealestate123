import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  'zh-cn': { name: '中文（简体）' },
  en: { name: 'English' },
  fr: { name: 'Français' },
  hi: { name: 'हिंदी' },
  ja: { name: '日本語' },
  ko: { name: '한국어' },
  ru: { name: 'Русский' },
  es: { name: 'Español' },
  sv: { name: 'Svenska' },
  vi: { name: 'Tiếng Việt' }
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
