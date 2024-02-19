<script lang="ts">
  let email: string;
  let password: string;
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
  <h1 class="text-3xl font-bold">Sign in</h1>

  <form>
    <div>
      <label for="email">Email</label>
      <input
        name="email"
        type="text"
        bind:value={email}
        placeholder="johnsmith@gmail.com"
      />
    </div>

    <div>
      <label for="password">Password</label>
      <input
        name="password"
        type="password"
        bind:value={password}
        placeholder="********"
      />
    </div>

    <button>Sign in</button>
  </form>
</div>

<style>
  form {
    @apply flex flex-col gap-12;
  }

  form div {
    @apply flex flex-col gap-4;
  }

  form div label {
    @apply text-lg w-full text-start;
  }

  form div input {
    @apply p-2 border-gray-300 rounded-md outline-none border-2 hover:border-lime-400 focus:border-lime-500 transition-colors duration-300;
  }

  form button {
    @apply p-2 font-bold border hover:opacity-70 duration-300 transition-opacity bg-lime-400;
  }
</style>
