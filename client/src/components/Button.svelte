<script lang="ts">
  export let href: string;
  export let title: string;
  export let variant: "primary" | "outline" | "secondary" = "primary";

  let style: string =
    "w-full mx-auto font-bold p-2 rounded hover:opacity-70 duration-300 transition-opacity block";
  switch (variant) {
    case "primary":
      style += " bg-lime-400";
      break;

    case "outline":
      style += " border-2 border-lime-400 text-lime-400";
      break;

    case "secondary":
      break;

    default:
      break;
  }
</script>

<a {href} class={style}>{title}</a>
