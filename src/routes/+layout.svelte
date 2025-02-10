<script lang="ts">
    import '$lib/main.scss';

    let { children } = $props();
</script>

<nav>
    <a href="/">home</a>
</nav>

<main>
    {@render children()}
</main>
