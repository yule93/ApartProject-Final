<template>
  <b-container v-if="house" class="bv-example-row">
    <b-row>
      <b-col
        ><h3>{{ house.아파트 }}</h3></b-col
      >
    </b-row>
    <b-row class="mb-2 mt-1">
      <b-col>
        <div class="map_wrap">
          <div
            id="map"
            style="width: 100%; height: 400px; float: left; margin-top: 10px"
          ></div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary"
          >일련번호 : {{ house.일련번호 }}</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary"
          >아파트 이름 : {{ house.아파트 }}
        </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">법정동 : {{ house.법정동 }} </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">층수 : {{ house.층 }}층</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="danger"
          >거래금액 :
          {{
            (parseInt(house.거래금액.replace(",", "")) * 10000) | price
          }}원</b-alert
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<!--<script type="text/javascript" src="../../api/map.js"></script>-->
<script>
import { mapState } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState(houseStore, ["house", "sidos", "guguns", "selectedSido"]),
    // house() {
    //   return this.$store.state.house;
    // },
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=47642a55e575541b111222ca754737af&libraries=services";
      document.head.appendChild(script);
    }
  },
  watch: {
    house: function (house) {
      //console.log(house);
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
      // 지도를 생성합니다
      var map = new kakao.maps.Map(mapContainer, mapOption);
      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();
      // 주소로 좌표를 검색합니다
      var address = this.selectedSido.concat(house["법정동"], house["지번"]);
      geocoder.addressSearch(address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          var content = `
				<div class="overlaybox">
					<div class="boxtitle">${house.아파트}</div>
					<div class="first"><img src="./assets/apt.png" style="width:247px; height:136px;" alt=""></div>
					<ul>
						<li class="up">
							<span class="title">건축년도</span>
							<span class="count">${house.건축년도}</span>
						</li>
						<li>
							<span class="title">주소</span>
							<span class="count">${address}</span>
						</li>
						<li>
							<span class="title">최신거래금액</span>
							<span class="count">${parseInt(house.거래금액.replace(",", "")) * 10000}</span>
						</li>
						<li>
							<span class="last" id="recenthistor" data-toggle="modal" data-target="#myModal">아파트정보 update</span>
						</li>
					</ul>
				</div>
			`;
          var position = new kakao.maps.LatLng(
            marker.getPosition().getLat() + 0.00033,
            marker.getPosition().getLng() - 0.00003
          );

          var customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content,
            xAnchor: 0.3,
            yAnchor: 0.91,
          });
          customOverlay.setMap(map);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          coords = new kakao.maps.LatLng(
            marker.getPosition().getLat() + 0.0015,
            marker.getPosition().getLng()
          );
          map.setCenter(coords);
        }
      });
    },
  },
  methods: {
    initMap() {
      const container = document.querySelector("#map");
      const options = {
        center: new kakao.maps.LatLng(35.19656853772262, 129.0807270648317),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(
        35.19656853772262,
        129.0807270648317
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    },
  },
};
</script>

<style>
.overlaybox {
  position: relative;
  width: 360px;
  height: 350px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png")
    no-repeat;
  padding: 15px 10px;
}
div.overlaybox div,
ul {
  margin: 0;
  padding: 0;
}
.overlaybox li {
  list-style: none;
}
.overlaybox .boxtitle {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png")
    no-repeat right 120px center;
  margin-bottom: 8px;
}
.overlaybox .first {
  position: relative;
  width: 247px;
  height: 136px;
  margin-bottom: 8px;
}
.first .text {
  color: #fff;
  font-weight: bold;
}
.first .triangle {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 0;
  left: 0;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/triangle.png")
    no-repeat;
  padding: 6px;
  font-size: 18px;
}
.first .movietitle {
  position: absolute;
  width: 100%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 7px 15px;
  font-size: 14px;
}
.overlaybox ul {
  width: 247px;
}
.overlaybox li {
  position: relative;
  margin-bottom: 2px;
  background: #2b2d36;
  padding: 5px 10px;
  color: #aaabaf;
  line-height: 1;
  text-align: left;
}
.overlaybox li span {
  display: inline-block;
}
.overlaybox li .number {
  font-size: 16px;
  font-weight: bold;
}
.overlaybox li .title {
  font-size: 13px;
}
.overlaybox li .last {
  font-size: 12px;
  margin-right: 15px;
}
.overlaybox ul .arrow {
  position: absolute;
  margin-top: 8px;
  right: 25px;
  width: 5px;
  height: 3px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/updown.png")
    no-repeat;
}
.overlaybox >>> li >>> .up {
  background-position: 0 -40px;
}
.overlaybox >>> li >>> .down {
  background-position: 0 -60px;
}
.overlaybox li .count {
  position: absolute;
  margin-top: 5px;
  right: 15px;
  font-size: 10px;
}
.overlaybox li:hover {
  color: #fff;
  background: #d24545;
}
.overlaybox li:hover .up {
  background-position: 0 0px;
}
.overlaybox li:hover .down {
  background-position: 0 -20px;
}
</style>
