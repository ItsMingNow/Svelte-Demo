<script>
  import {FeedbackStore} from '../store.js'

  $: count = $FeedbackStore.length
  $: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length

</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average.toFixed(2)}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>