<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";

  let topAppBar: TopAppBar;
</script>

<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
<div class="top-app-bar-container">
  <TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        <IconButton class="material-icons">menu</IconButton>
        <Title>Fixed</Title>
      </Section>
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download"
          >file_download</IconButton
        >
        <IconButton class="material-icons" aria-label="Print this page"
          >print</IconButton
        >
        <IconButton class="material-icons" aria-label="Bookmark this page"
          >bookmark</IconButton
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
