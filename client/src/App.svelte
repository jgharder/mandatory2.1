<script>
	import Router from "./Routes/router.svelte";
	import {ToastContainer, FlatToast} from "svelte-toasts";

</script>

<main>
	<Router/>
	<ToastContainer placement="bottom-right" let:data={data}>
        <FlatToast {data} /> <!-- Provider template for your toasts -->
      </ToastContainer>
</main>

<style>
	
</style>