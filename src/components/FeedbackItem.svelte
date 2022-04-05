<script>
  import {FeedbackStore} from '../store.js'
  import Card from './Card.svelte';
  export let item;


  const handleDelete = (itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(item => item.id != itemId)
    })
  }

</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .num-display{
    position: absolute;
    top: 15px;
    left: 10px;
    
    width: 25px;
    height: 25px;
    background: #ff6a94a1;
    color: rgb(43, 40, 40);
    border: 1px #eee solid;
    border-radius: 50%;
    text-align: center;
    font-size: 19px;
  }

  .close{
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>

