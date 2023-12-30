<template>
  <div class="dark:bg-neutral-800 default:bg-neutral-50 min-h-screen p-3">
    <NeoButton class="mr-2" icon="fa-bucket" text="Primary" iconPosition="start" size="md" theme="primary"></NeoButton>
    <NeoButton class="mr-2" icon="fa-bucket" text="Success" iconPosition="start" size="md" theme="success"></NeoButton>
    <NeoButton class="mr-2" icon="fa-bucket" text="Danger" iconPosition="start" size="md" theme="danger"></NeoButton>
    <NeoButton class="mr-2" icon="fa-bucket" text="Warning" iconPosition="start" size="md" theme="warning"></NeoButton>
    <NeoButton class="mr-2" icon="fa-bucket" text="Info" iconPosition="start" size="md" theme="info"></NeoButton>
    <NeoButton class="mr-2" icon="fa-bucket" text="Dark" iconPosition="start" size="md" theme="dark"></NeoButton>
    <NeoButton class="mr-2" icon="fa-bucket" text="Light" iconPosition="start" size="md" theme="light"></NeoButton>
    <NeoButton icon="fa-gear" iconPosition="start" size="md" text="Test" varient="plain"></NeoButton>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>