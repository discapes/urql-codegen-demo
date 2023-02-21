<script>
	// @ts-nocheck
	import { PUBLIC_GRAPH_ENDPOINT } from '$env/static/public';
	import { onMount } from 'svelte';

	onMount(() => {
		const container = document.getElementById('graphiql');
		const root = ReactDOM.createRoot(container);
		root.render(
			React.createElement(GraphiQL, {
				fetcher: GraphiQL.createFetcher({
					url: PUBLIC_GRAPH_ENDPOINT
				}),
				defaultEditorToolsVisibility: true
			})
		);
	});
</script>

<svelte:head>
	<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
	<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
	<script crossorigin src="https://unpkg.com/graphiql/graphiql.min.js"></script>
	<link href="https://unpkg.com/graphiql/graphiql.min.css" rel="stylesheet" />
</svelte:head>

<div style="height: 100vh; width: 100vw;" id="graphiql" />

<style>
	:global(body) {
		margin: 0;
	}
</style>
