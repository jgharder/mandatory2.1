<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Login from "../pages/login.svelte";
  import Index from "../pages/index.svelte";
  import { isLoggedIn } from "../stores/store";
  import { toasts } from "svelte-toasts";
  import PrivateRoute from "../components/PrivateRoute.svelte";
  import Contact from "../pages/contact.svelte";

  export function logout() {
    isLoggedIn.set(false);
  }
</script>

<Router primary={false}>
  <nav class="nav-bar">
    <ul class="nav-links">
      <li class="nav-item">
        <Link to="/" class="nav-anchors">Køb cykler</Link>
      </li>
      <li class="nav-item"> 
        <Link to="/contact" class="nav-anchors">Contact us</Link>
      </li>

      {#if !$isLoggedIn}
        <li class="nav-item login">
          <Link to="/login" class="nav-anchors">Log in</Link>
        </li>
      {:else}
        <li class="nav-item logout">
          <Link
            to="/"
            class="nav-anchors"
            on:click={() => {
              logout();
              toasts.warning("youre now logged out");
            }}>Log out</Link
          >
        </li>
      {/if}
    </ul>
  </nav>
  <div>
    <Route path="/login" component={Login} />
    <Route path="/contact" component={Contact} />

    <PrivateRoute path="/" let:location>
      <Index />
    </PrivateRoute>
  </div>
</Router>

<style>
  :global(a) {
    color: white !important;
    text-decoration: none !important;
    height: 100%;
  }

  .nav-bar {
    display: flex;
    width: 100vw;
    height: 100px;
    background-color: #1b1f25;
  }
  .nav-links {
    display: flex;
    justify-content: center;
    width: 100vw;
    align-items: center;
  }
  .nav-item {
    display: flex;
    list-style: none;
    padding: 20px;
    color: #ffffff;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
  }
  .nav-item:hover {
    background: #59606b;
  }
  .login {   
    margin-left: auto;

  }
  .logout{
    margin-left: auto;
  }
</style>
