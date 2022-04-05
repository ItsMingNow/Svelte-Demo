<script>
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStat from './components/FeedbackStat.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte'


</script>

<main class="container">
	
	<h1>OnlyFeeds</h1>

	<FeedbackForm/>
	<FeedbackStat/>
	<FeedbackList/>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>