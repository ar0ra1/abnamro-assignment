<template>
  <div class="flex gap-4 h-60">
    <img
      loading="lazy"
      class="object-cover h-full w-[160px]"
      :src="`${
        image ? image : `https://robohash.org/${realName}?size=160x240`
      }`"
      :alt="realName"
    />
    <div>
      <p data-testid="real-name" class="pt-10 font-bold text-abn-green">
        {{ realName }}
      </p>
      as
      <p data-testid="character-name">{{ characterName }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CastMemberComponent",
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: this.member.character?.image?.original,
      realName: this.member.person?.name,
      characterName: this.member.character?.name,
    };
  },
};
</script>
