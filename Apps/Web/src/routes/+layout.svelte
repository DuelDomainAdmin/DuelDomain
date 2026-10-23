<script>
	import favicon from '$lib/assets/logo.png';
	let { children } = $props();
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import NotifyContainer from '$lib/components/ui/NotifyContainer.svelte';
	import "../app.scss";
	import '../tailwind.css';
</script>

<NotifyContainer />
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
