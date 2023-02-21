<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Courses</title>
</svelte:head>

<main>
	<h1>Courses:</h1>

	{#each data.courses as course}
		<div class="course">
			<h2>Course {course.id.slice(-2)}: {course.name}</h2>
			<h2>Units:</h2>

			{#each course.units as unit}
				<div class="unit">
					<h2>{unit.id.slice(-2)}: {unit.name}</h2>
					<p>Created on {new Date(unit.created_at).toLocaleString()}</p>
				</div>
			{/each}

			<p>Created on {new Date(course.createdAt).toLocaleString()}</p>
			<!-- notice: no type warnings -->
		</div>
	{/each}
</main>

<style>
	:global(body) {
		background-color: blanchedalmond;
		font-family: Arial, Helvetica, sans-serif;
		color: #202020;
		padding: 50px;
	}
	.course,
	.unit {
		padding: 20px;
		margin: 20px;
		max-width: 400px;
	}
	.course {
		background-color: white;
	}
	.unit {
		background-color: blanchedalmond;
	}
</style>
