<template>
  <div>
    <p>Locale: {{ locale }}</p>
    <p>Locales: {{ locales }}</p>
    <p>LocaleProps: {{ localeProperties }}</p>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, localeProperties } = useI18n();
const i18nHead = useLocaleHead({ addSeoAttributes: true });

onMounted(() => {
  useHead({
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang,
    },
  });

  useSeoMeta({
    lang: i18nHead.value.htmlAttrs!.lang,
    dir: i18nHead.value.htmlAttrs!.dir,
  });
});
</script>
