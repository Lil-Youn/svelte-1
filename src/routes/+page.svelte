<script>
  import TopNavbar from "$lib/top-navbar/+page.svelte";
  let src = "/src/assets/whale.png";
  let name = "Simon";
  let buttonText = "Go to Site 1";
  import Button, { Label } from "@smui/button";
</script>

<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
<TopNavbar />
<div class="welcome-box">
  <h1>Hi {name}! Welcome to my first Svelte App</h1>
</div>
<img {src} alt="whale" />

<div class="button-container">
  <Button
    variant="outlined"
    class="button-shaped-round"
    href="/site1"
    target="_blank"
  >
    <Label>{buttonText}</Label>
  </Button>
</div>

<style>
  h1 {
    color: darkgrey;
    text-align: center;
    text-decoration: underline;
  }
  .welcome-box {
    margin: 0 auto;
    width: 50%;
    border: 1px solid black;
    border-radius: 25px;
    margin-bottom: 5%;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 25%;
    height: 25%;
    margin-bottom: 5px;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
</style>
