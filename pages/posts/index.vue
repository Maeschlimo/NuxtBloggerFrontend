<script setup>
  const { find } = useStrapi()
  const posts = await find('posts')
  console.log(posts.data[0].attributes.title)
</script>

<template>
    <div>
    <div v-for="post in posts.data" :key="post.id">

        <h1 class="font-bold"> {{ post.attributes.title }} </h1>
        <p>{{ post.attributes.content }}</p>

    </div>
    </div>
  </template>