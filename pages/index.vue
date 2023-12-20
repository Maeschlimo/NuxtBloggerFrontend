<script setup>
  const { find } = useStrapi()
  const posts = await find('posts')
  const content = posts.data[0].attributes.content
  console.log(content)
</script>

<template>
    <div>
    <div v-for="post in posts.data" :key="post.id">
        <RichTextBlocks v-if="post.attributes.content" :data='post.attributes.content' class="mb-10" />             
    </div>
    </div>
  </template>