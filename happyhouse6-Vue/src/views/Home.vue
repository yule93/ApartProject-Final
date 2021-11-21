<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h2 style="margin-bottom: 30px; filter: invert(100%)">
      <b-icon icon="house"></b-icon> Happy House
    </h2>
    <b-row>
      <b-col>
        <p>어쩌구</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-card-group deck>
          <b-card
            title="아파트 관심 지역 둘러보기"
            img-src="https://source.unsplash.com/rEn-AdBr3Ig/600x300"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            border-variant="secondary"
          >
            <b-card-text>
              몇 가지 간단한 선택으로 관심 있는 지역의 아파트 매매 정보를
              살펴보시는 건 어떠신가요? <br />
              생각보다 좋은 정보를 찾아낼지도 몰라요.
            </b-card-text>

            <router-link :to="{ name: 'House' }" class="link"
              ><b-icon icon="house-fill" font-scale="1" tag="button"></b-icon>
              아파트 정보 보러가기</router-link
            >
          </b-card>
          <b-card
            title="코로나 선별 진료소"
            img-src="https://source.unsplash.com/mAGZNECMcUg/600x300"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            border-variant="secondary"
          >
            <b-card-text>
              COVID-19는 일상 생활이 바뀔 만큼 큰 영향을 끼쳤습니다. 혹시 감염
              의심이 된다면 진료소에 방문해보는 것은 어떨까요?
            </b-card-text>

            <router-link :to="{}" class="link"
              ><b-icon icon="house-fill" font-scale="1" tag="button"></b-icon>
              아파트 정보 보러가기</router-link
            >
          </b-card>
        </b-card-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(72, 190, 233, 0.3) 30%
  );
}
</style>
