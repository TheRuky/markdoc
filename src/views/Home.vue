<template>
  <div>
    <main>
      <section class="hero">
        <div class="container">
          <h1 class="hero__title">Add. <span>Share.</span> Done.</h1>
          <p class="hero__subtitle">Markdown paste-and-share tool.</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <form @submit.prevent="submit" class="form">
            <div class="form-group">
              <textarea class="markdown-input" v-model="markdown" placeholder="Type, paste or drop markdown here."></textarea>
              <button type="button" class="button-link" style="margin-top: 10px;">Upload <strong>.txt</strong> or <strong>.md</strong> file</button>
            </div>
            <div class="form-group">
              <button class="button">Share</button>
            </div>
          </form>
        </div>
      </section>
      <div class="container">
        <form @submit.prevent="submit">
          <div class="form-group">
            <input type="text" placeholder="Title" v-model="title" class="title-input">
          </div>
          <div class="form-group">

          </div>
          <div class="form-group">

            <button type="button" class="button button--link">Upload your text</button>
          </div>
        </form>
        <div v-if="slug">
          Success! <router-link :to="slug">Preview <strong>{{ title }}</strong></router-link>
        </div>
        <br>
        <br>
        <div>
          Snippets:
          <ul>
            <li v-for="snippet in snippets" :key="snippet.slug">
              <router-link :to="snippet.slug">{{ snippet.slug }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {onBeforeMount, ref} from 'vue';
import { createSnippet, fetchSnippets } from '../services/snippet';
import { createSlug } from '../services/slug';

const markdown = ref('');
const title = ref('');
const slug = ref('');
const snippets = ref([]);

async function updateSnippetList() {
  const { data, error } = await fetchSnippets();

  snippets.value = data;
}

onBeforeMount(async () => await updateSnippetList());

async function submit() {
  if(!title.value.trim() || !markdown.value.trim()) {
    return;
  }

  const { data, error } = await createSnippet({
    title: title.value,
    slug: createSlug(),
    markdown: markdown.value,
  });

  if(error) {
    return;
  }

  const [ snippet ] = data;

  slug.value = snippet.slug;

  await updateSnippetList();
}
</script>
