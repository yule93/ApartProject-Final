<template>
  <tr>
    <td>{{ zipCode }}</td>
    <td style="text-align: left">
      <router-link :to="{ name: 'CenterView', params: { zipCode: zipCode } }">{{
        centerName
      }}</router-link>
    </td>
    <td>{{ createdAt }}</td>
    <td>{{ updatedAt }}</td>
  </tr>
</template>

<script>
export default {
  name: "CenterListItem",
  props: {
    zipCode: String,
    centerName: String,
    createdAt: String,
    updatedAt: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
