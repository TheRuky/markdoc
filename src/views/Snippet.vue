<template>
  <div class="container">
    <div class="prose">
      <h1>Slug: {{ slug }}</h1>
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import {onBeforeMount, onMounted, ref} from 'vue';
// import { useHead } from '@vueuse/head';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { fetchSnippet } from '../services/snippet';

const route = useRoute();
const slug = ref(route.params.slug);
const html = ref('');

onBeforeMount(async () => {
  const { data, error } = await fetchSnippet(slug.value);

  const [ snippet ] = data;

  // useHead({
  //   title: snippet.title,
  // });

 document.head
     .querySelector('meta[property="og:image"]')
     .setAttribute('content', 'https://www.pngkey.com/png/detail/892-8928473_document-logo-rsum.png');

  document.title = snippet.title;

  html.value = DOMPurify.sanitize(marked(snippet.markdown));
});
</script>
