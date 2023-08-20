<script>
  let src = "/src/assets/whale.png";
  let name = "Simon";
  let buttonText = "Go to Site 1";
</script>

<div class="welcome-box">
  <h1>Hi {name}!Welcome to my first Svelte App</h1>
</div>
<img {src} alt="whale" />
<button class="button">
  <a href="/site1" target="_blank" rel="noopener noreferrer"> {buttonText} </a>
</button>

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
  .button {
    display: block;
    margin: 0 auto;
    background-color: lightblue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
