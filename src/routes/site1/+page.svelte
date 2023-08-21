<script lang="ts">
  import { onMount } from "svelte";
  import { getXataClient } from "../xata";

  interface Author {
    id: string;
  }

  interface Post {
    id: string;
    title: string;
    author: Author;
    slug: string;
    text: string;
    views: number;
  }

  let posts: Post[] = [];

  onMount(async () => {
    try {
      const xataClient = await getXataClient();
      const fetchedPosts = (await xataClient.db.Posts.getMany()) as Post[];
      console.log("Fetched posts:", fetchedPosts);
      posts = fetchedPosts;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  });
</script>

<main>
  <h1>Site 1 - Page</h1>
  {#each posts as post (post.id)}
    <li>
      <h2>{post.title}</h2>
      <p>Author ID: {post.author.id}</p>
      <p>Slug: {post.slug}</p>
      <p>{post.text}</p>
      <p>Views: {post.views}</p>
    </li>
  {/each}
</main>

<style>
  main {
    padding: 1rem;
  }
</style>
