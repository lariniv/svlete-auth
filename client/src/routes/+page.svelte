<script lang="ts">
	let count: number = 0
</script>



<div class="w-1/2 mx-auto flex flex-col gap-8 text-center mt-40 p-12 bg-white/40 shadow-lg backdrop-blur-sm">
	<h1 class="text-3xl font-bold">Sign up</h1>

	<form action="">
		<div>
			<label for="email">Email</label>
			<input name="email" type="text">
		</div>

		<div>
			<label for="password">Password</label>
			<input name="password" type="password">
		</div>

		<div>
			<label for="confirm">Confrim email</label>
			<input name="confirm" type="password">
		</div>

		<button>Sign up</button>
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
		@apply p-2 border border-gray-300 rounded-md;
	}

	form button {
		@apply p-2 font-bold border hover:opacity-70 duration-300 transition-opacity bg-lime-400;
	}
</style>