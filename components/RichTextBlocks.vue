<template>
    <div class="rich-text-blocks">
      <div v-for="block in blocks" :key="block.id">
        <!-- Headings 1-6 -->
        <div v-if="block.type === RichTextBlockType.heading">
          <div v-if="block.level === 1">
            <h1 v-for="child in block.children" :key="child.id">{{ child.text }}</h1>
          </div>
          <div v-else-if="block.level === 2">
            <h2 v-for="child in block.children" :key="child.id">{{ child.text }}</h2>
          </div>
          <div v-else-if="block.level === 3">
            <h3 v-for="child in block.children" :key="child.id">{{ child.text }}</h3>
          </div>
          <div v-else-if="block.level === 4">
            <h4 v-for="child in block.children" :key="child.id">{{ child.text }}</h4>
          </div>
          <div v-else-if="block.level === 5">
            <h5 v-for="child in block.children" :key="child.id">{{ child.text }}</h5>
          </div>
          <div v-else-if="block.level === 6">
            <h6 v-for="child in block.children" :key="child.id">{{ child.text }}</h6>
          </div>
          <!-- Add other heading levels as needed -->
        </div>
        <!-- Paragraph -->
        <div v-else-if="block.type === RichTextBlockType.paragraph">
          <p v-for="child in block.children" :key="child.id">{{ child.text }}</p>
        </div>
        <!-- Lists -->
        <div v-else-if="block.type === RichTextBlockType.list">
          <ul v-if="block.format === RichTextBlockFormat.unordered">
            <li v-for="child in block.children" :key="child.id">{{ child.children[0].text }}</li>
          </ul>
          <ol v-else>
            <li v-for="child in block.children" :key="child.id">{{ child.children[0].text }}</li>
          </ol>
        </div>
        <!-- Image -->
        <div v-else-if="block.type === RichTextBlockType.image">
          <NuxtImg provider="strapi" :src="block.image.hash+block.image.ext" :modifiers="{ breakpoint: 'small' }" />
        </div>
        <!-- Quote -->
        <div v-else-if="block.type === RichTextBlockType.quote">
          <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
             <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white" v-for="child in block.children" :key="child.id">{{child.text}}</p>
          </blockquote>
        </div>
        <!-- Code-->
        <div v-else-if="block.type === RichTextBlockType.code">
             <code v-for="child in block.children" :key="child.id">{{child.text}}</code>
        </div>
        <!-- Add other block types as needed -->
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
import { type RichTextBlocks, type RichTextBlockChild, RichTextBlockChildType } from '~/composables/strapiRichText';



const blocks = ref<RichTextBlocks[]>([]);
const content = defineProps(['data']);
blocks.value = content.data;
const { renderStyledText } = useRenderStyledText();

function renderParagraph(child: RichTextBlockChild): string {
  let html = '';
  if (child.type === RichTextBlockChildType.text) {
    html = renderStyledText(child);
  }
  return html;
}

function renderBlock(block: RichTextBlocks) {
    let html = ''
    block.children.forEach((child) => {
      html += '<li>'
      child.children.forEach((childChild) => {
        if (childChild.type === RichTextBlockChildType.text) {
          if (childChild.bold)
            html += `<strong>${childChild.text}</strong>`
          else if (childChild.italic)
            html += `<i>${childChild.text}</i>`
          else if (childChild.underline)
            html += `<u>${childChild.text}</u>`
          else if (childChild.strikethrough)
            html += `<s>${childChild.text}</s>`
          else
            html += childChild.text
        }
      })
      html += '</li>'
    })
  
    return html
  }
  
  function renderText(children: RichTextBlockChild[]) {
    let html = ''
    children.forEach((childChild) => {
      if (childChild.type === RichTextBlockChildType.text) {
        if (childChild.bold)
          html += `<strong>${childChild.text}</strong>`
        else if (childChild.italic)
          html += `<i>${childChild.text}</i>`
        else if (childChild.underline)
          html += `<u>${childChild.text}</u>`
        else if (childChild.strikethrough)
          html += `<s>${childChild.text}</s>`
        else
          html += childChild.text
      }
    })
  
    return html
  }
  </script>