import { az } from "@/i18n/dictionaries/az";
import { en } from "@/i18n/dictionaries/en";
import { ru } from "@/i18n/dictionaries/ru";
import type { Locale } from "@/config/site";

const dictionaries = { az, ru, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
