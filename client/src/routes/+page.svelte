<script>
  import Button from "/src/components/Button.svelte";
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
  <h1 class="text-3xl font-bold">Welcome!</h1>
  <main class="landing-main">
    <p>
      In this project, I am diving deep into the world of authentication, with a
      particular focus on JSON Web Tokens (JWT). My primary goal is to gain a
      comprehensive understanding of how JWTs operate within the context of
      securing applications, and how they facilitate the process of
      authentication from both the client and server sides.
    </p>

    <p>
      Through hands-on experimentation, I aim to learn the intricacies of
      token-based authentication, including token creation, expiration, renewal,
      and revocation processes. This exploration will also cover the security
      considerations necessary to protect against common vulnerabilities and
      threats in token-based systems.
    </p>

    <p>
      By building this project, I hope not only to solidify my understanding of
      JWTs and authentication mechanisms but also to develop a secure template
      that can be applied to future applications requiring robust authentication
      measures.
    </p>
  </main>

  <div class="font-semibold text-2xl">
    It's simple to-do list, just with the authentification.
  </div>

  <div class="w-full flex gap-2">
    <div class="w-1/2">
      <Button title={"Sign up"} href="/signup" variant="primary" />
    </div>
    <div class="w-1/2">
      <Button title={"Sign in"} href="/signin" variant="outline" />
    </div>
  </div>
</div>

<style>
</style>
