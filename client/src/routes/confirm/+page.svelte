<script lang="ts">
  import { onMount } from "svelte";
  let code: string;
  import { user } from "../../config/user.store";

  console.log($user.email);

  async function fetchTest(body: object) {
    const res = await fetch("http://localhost:3000/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  }

  onMount(() => {
    fetchTest({ email: $user.email });
  });
</script>

<div class="main-section relative">
  <button
    class="absolute text-2xl cursor-pointer block"
    on:click={() => {
      history.go(-1);
    }}
  >
    {"<-"}
  </button>

  <h1 class="text-3xl font-bold">Confirm your email</h1>

  <form
    on:submit|preventDefault={() => {
      const data = JSON.stringify({ code });
      fetch("http://localhost:3000/api/signin");
    }}
  >
    <div>
      <label for="code">Code</label>
      <input name="code" type="text" bind:value={code} placeholder="000000" />
    </div>

    <button>Sign in</button>
  </form>
</div>

<style lang="postcss">
  form {
    @apply flex flex-col gap-12;
  }

  form > div {
    @apply flex flex-col gap-4;
  }

  form > div > label {
    @apply text-lg w-full text-start;
  }

  form > div > input {
    @apply p-2 border-gray-300 rounded-md outline-none border-2 hover:border-lime-400 focus:border-lime-500 transition-colors duration-300;
  }

  form > button {
    @apply p-2 font-bold border hover:opacity-70 duration-300 transition-opacity bg-lime-400;
  }
</style>
