<script>
  // import {onMount, onDestroy} from 'svelte'
  import {FeedbackStore} from '../store.js'
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from './FeedbackItem.svelte'
  // let feedback = [];

  // const unsubscribe = FeedbackStore.subscribe((data)=> feedback = data);

  // Called when the componet is mounted
  // onMount(() => {
  //   console.log('Feedback List Mounted');
  // })

  // onDestroy(() => {
  //   console.log('unsubscribe');
  //   unsubscribe();
  // })

</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade="{{ duration: 500 }}">
    <FeedbackItem item={fb} />
  </div>
{/each}