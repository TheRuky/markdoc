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
import {onBeforeMount, ref} from 'vue';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { fetchSnippet } from '../services/snippet';

const route = useRoute();
const slug = ref(route.params.slug);
const html = ref('');

onBeforeMount(async () => {
  const { data, error } = await fetchSnippet(slug.value);

  const [ snippet ] = data;

  console.log(snippet);

  html.value = DOMPurify.sanitize(marked(snippet.markdown));
});
</script>
