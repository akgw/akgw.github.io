<template>
  <v-avatar :class="className">
    <img :src="`https://avatars.githubusercontent.com/u/${id}`" />
  </v-avatar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class GithubIcon extends Vue {
  @Prop({ required: true }) id: number
  @Prop({ required: true }) isSp: boolean
  className = 'size'

  created() {
    if (this.isSp) {
      this.className += '__sp'
    }
  }
}
</script>
<style lang="scss" scoped>
.size {
  height: 200px !important;
  width: 200px !important;
  background-color: white;

  &__sp {
    height: 50px !important;
    width: 50px !important;
    background-color: white;
  }
}
</style>
