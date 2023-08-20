<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from "@smui/top-app-bar";
  import Menu from "@smui/menu";
  import List, { Item, Separator, Text } from "@smui/list";
  import Button, { Label } from "@smui/button";

  let menu: Menu;

  let topAppBar: TopAppBar;
</script>

<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
<div class="top-app-bar-container">
  <TopAppBar bind:this={topAppBar} variant="fixed">
    <Row>
      <Section>
        <div style="min-width: 100px;">
          <Button on:click={() => menu.setOpen(true)}>
            <Label>Menu</Label>
          </Button>
          <Menu bind:this={menu}>
            <List>
              <Item>
                <Text>Cut</Text>
              </Item>
              <Item>
                <Text>Copy</Text>
              </Item>
              <Item>
                <Text>Paste</Text>
              </Item>
              <Separator />
              <Item>
                <Text>Delete</Text>
              </Item>
            </List>
          </Menu>
        </div>

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
