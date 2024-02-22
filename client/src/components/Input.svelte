<script lang="ts">
  export let name: string;
  export let isPassword: boolean = false;
  export let bindValue: string;
  export let placeholder: string;

  let localPassword = true;
</script>

<div class="input-wrapper">
  <label for={name}>{name}</label>
  {#if isPassword}
    <div>
      {#if localPassword}
        <input
          {name}
          type="password"
          autocomplete="current-password"
          bind:value={bindValue}
          {placeholder}
        />
      {:else}
        <input
          {name}
          type="text"
          autocomplete="current-password"
          bind:value={bindValue}
          {placeholder}
        />
      {/if}
      <button type="button" on:click={() => (localPassword = !localPassword)} />
    </div>
  {:else}
    <input
      {name}
      type="text"
      autocomplete="email"
      bind:value={bindValue}
      {placeholder}
    />
  {/if}
</div>

<style lang="postcss">
  .input-wrapper {
    @apply flex flex-col gap-4 relative;
  }

  .input-wrapper > div > button {
    @apply absolute block h-4 w-4 bg-black top-[calc(50%-8px)] right-4 rounded-full bg-lime-400/40 border-gray-300 border-2 cursor-pointer;
  }

  .input-wrapper > div {
    @apply relative;
  }

  .input-wrapper label {
    @apply text-lg w-full text-start capitalize;
  }

  .input-wrapper input {
    @apply w-full p-2 border-gray-300 rounded-md outline-none border-2 hover:border-lime-400 focus:border-lime-500 transition-colors duration-300;
  }
</style>
