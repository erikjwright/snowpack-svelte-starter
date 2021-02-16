<script lang="ts">
  let open = false
</script>

<div class="flex h-screen">
  <header class:open>
    <h1>Logo</h1>
    <span on:click={() => open = !open}>&#x2716;</span>
    <nav class="flex flex-col items-end overflow-hidden">
      <div><span>icon</span><span class={`mr-8 ${open ? '' : 'hidden'}`}>item 1</span></div>
      <div>item 2</div>
      <div>item 3</div>
      <div>item 4</div>
      <div>item 5</div>
      <div>item 6</div>
    </nav>
  </header>
  <main class:open>
    <span on:click={() => open = !open}>&#x2630;</span>
    <p>Main content</p>
  </main>
</div>

<style lang="postcss">
  header {
    @apply fixed top-0 bottom-0 overflow-hidden bg-purple-100 z-10 duration-500;
    width: 18rem;
    transform: translateX(-18rem)
  }

  @media (min-width: 718px) {
    header, main {
      position: relative; 
      width: 6rem;
      transform: translateX(0)
    }
  }

  header.open {
    transform: translateX(0)
  }

  @media (min-width: 718px) {
    header.open {
      width: 22rem;
    }
  }

  main {
  }
</style>
