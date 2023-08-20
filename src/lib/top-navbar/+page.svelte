<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import Button from "@smui/button/src/Button.svelte";

  let topAppBar: TopAppBar;
</script>

<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
<div class="top-app-bar-container">
  <TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        <Button class="material-icons">menu</Button>
        <Title>My App</Title>
      </Section>
      <Section align="end" toolbar>
        <Button class="material-icons" aria-label="Download" href="/"
          >Home</Button
        >
        <Button
          class="material-icons"
          aria-label="Print this page"
          href="/site1">Site 1</Button
        >
        <Button
          class="material-icons"
          aria-label="Bookmark this page"
          href="/site2">Site 2</Button
        >
      </Section>
    </Row>
  </TopAppBar>
</div>
<AutoAdjust {topAppBar} />

<style>
  /* Hide everything above this component. */
  :global(#smui-app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>
