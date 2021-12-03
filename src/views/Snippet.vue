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
import { useHead } from '@vueuse/head';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { fetchSnippet } from '../services/snippet';

const route = useRoute();
const slug = ref(route.params.slug);
const html = ref('');
const title = ref('');

onBeforeMount(async () => {
  const { data, error } = await fetchSnippet(slug.value);

  const [ snippet ] = data;

  title.value = snippet.title;
  html.value = DOMPurify.sanitize(marked(snippet.markdown));
});

onMounted(() => {
  useHead({
    title: title.value,
  });
});

</script>
