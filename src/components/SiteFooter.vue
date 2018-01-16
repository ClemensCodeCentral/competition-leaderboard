<template>
   <footer>
      <div class="code-central-info">
        <p>Built with love for Code Central</p>
        <a href="https://github.com/ClemensCodeCentral">More Code Central Projects</a>
      </div>
    </footer>
</template>

<script>
export default {
  name: "site-footer"
};
</script>

<style scoped>
footer {
  height: 128px;
  padding: 16px;
  background-color: #212121;
}

footer > * {
  color: #e0e0e0;
  text-decoration: none;
}

a {
  color: #e0e0e0;
  text-decoration: none;
}
</style>
