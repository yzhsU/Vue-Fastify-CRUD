<template>
  <div>
    <div id="map" style="width:100%;height:400px;"></div>
    <!-- <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=82b44db391c09cbe1e25dc270efc289a&libraries=services,clusterer" ></script> -->
  </div>
</template>

<script>
// let kakao: any;

// export default {

//   mounted () {
//     this.displayMap()
//   },
//   methods: {
//     displayMap () {
//       const mapContainer = document.getElementById('map') // 지도를 표시할 div
//       const mapOption = {
//         center: new kakao.maps.LatLng(35.241168, 128.681907), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//       }

//       const map = new kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다

//       // 마커를 표시할 위치입니다
//       const markerPosition = new kakao.maps.LatLng(35.241168, 128.681907)

//       // 마커를 생성합니다
//       const marker = new kakao.maps.Marker({
//         position: markerPosition
//       })

//       // 마커가 지도 위에 표시되도록 설정합니다
//       marker.setMap(map)

//       // 인포윈도우를 생성합니다
//       const infowindow = new kakao.maps.InfoWindow({
//         content: '<div style="width:150px;text-align:center;padding:6px 0;">경남 김해시 율하6로 56</div>'
//       })

//       // 마커 위에 인포윈도우를 표시합니다.
//       infowindow.open(map, marker)
//     }

//   }
// }
</script>
