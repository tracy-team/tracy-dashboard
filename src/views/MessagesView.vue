<template>
  <div class="messages">
    <div class="row">
      <div class="col-lg-5"><Contact></Contact></div>
      <div class="col-lg-7"><Chat></Chat></div>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/messages/Contact.vue";
import Chat from "@/components/messages/Chat.vue";

export default {
  name: "Messages",
  components: {
    Contact,
    Chat,
  },
};
</script>
