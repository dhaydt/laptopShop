<template>
  <div class="NavAdmin">
    <NavDash></NavDash>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import NavDash from "./NavDash";
export default {
  components: {
    Sidebar,
    NavDash,
  },
};
</script>

<style lang="scss" scoped></style>
