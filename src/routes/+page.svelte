<script lang="ts">
  let src = "/src/assets/whale.png";
  let name = "Simon";
</script>

<div class="welcome-box">
  <h1>Hi {name}! Welcome to my first Svelte App</h1>
</div>
<img {src} alt="whale" />

<style>
  h1 {
    color: darkgrey;
    text-align: center;
    text-decoration: underline;
  }
  .welcome-box {
    margin: 5px auto;
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
</style>
