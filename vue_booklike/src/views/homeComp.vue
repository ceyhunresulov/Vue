<template>
  <body class="bg-gray-100 overflow-x-hidden" id="app">
    <appHeader></appHeader>
    <div class="flex flex-row">
      <sideBar></sideBar>
      <bookmarkListItem></bookmarkListItem>
    </div>
  </body>
</template>

<script>
import sideBar from "@/components/sidebar/sideBar";
import bookmarkListItem from "@/components/shared/bookmarkList/bookmarkListItem";

export default {
  components: {
    sideBar,
    bookmarkListItem,
  },
};
</script>
