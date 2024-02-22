<script lang="ts">
  import { PASSWORD_REGEXP, EMAIL_REGEXP } from "../../config/reg.exp";
  import Input from "../../components/Input.svelte";
  import { user } from "../../config/user.store";

  let email: string;
  let password: string;
  let confirm: string;

  let error: { email?: boolean; password?: boolean; confirm?: boolean } = {};

  const handleSubmit = async () => {
    try {
      if (EMAIL_REGEXP.test(email) === false) {
        error.email = true;
      } else {
        error.email = false;
      }

      if (PASSWORD_REGEXP.test(password) === false) {
        error.password = true;
      } else {
        error.password = false;
      }

      if (password !== confirm || !confirm) {
        error.confirm = true;
      } else {
        error.confirm = false;
      }

      if (error.email || error.password || error.confirm) {
        console.log(error);
        return;
      }

      const body = JSON.stringify({ email, password, confirm });

      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/users/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        }
      );

      if (res.ok) {
        const data = await res.json();
        user.set({ _id: data, email, password });
        console.log($user);
        window.location.assign("/confirm");
      }
    } catch (error) {
      console.log(error);
    }
  };
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

  <h1 class="text-3xl font-bold">Sign up</h1>

  <form on:submit|preventDefault={handleSubmit}>
    <Input
      name={"email"}
      bind:bindValue={email}
      placeholder={"johnsmith@gmail.com"}
    />

    <Input
      name={"password"}
      bind:bindValue={password}
      isPassword
      placeholder={"********"}
    />

    <Input
      name={"confirm"}
      bind:bindValue={confirm}
      isPassword
      placeholder={"********"}
    />

    <button
      class="p-2 font-bold border hover:opacity-70 duration-300 transition-opacity bg-lime-400"
      >Sign up</button
    >
  </form>
</div>

<style lang="postcss">
  form {
    @apply flex flex-col gap-12;
  }
</style>
