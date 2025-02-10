<script lang="ts">
    const blog_files = import.meta.glob('./blog/**/+page.svelte', { eager: true });
    const blogs = Object.keys(blog_files).map((path) => path.slice(7, 17));
</script>

<h1>Blogs</h1>

<ul>
    {#each blogs as blog}
        <li>
            <a href={`/blog/${blog}`}><time datetime={blog}>{blog}</time></a>
        </li>
    {/each}
</ul>
