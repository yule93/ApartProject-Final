# HappyHouse6-서형준송민주

최종 관통 프로젝트 (Vue + Spring-MyBatis)

## 주요 사이트 화면
![Main Page](https://user-images.githubusercontent.com/31907528/147204929-93705c75-372d-4444-9d15-f9c874b25e66.png)
![Apart List And Search Page](https://user-images.githubusercontent.com/31907528/147205026-3119c4d8-b574-49d3-8b9b-ba051f4ff4ef.png)
![User Info Modify Page](https://user-images.githubusercontent.com/31907528/147205207-d2dcf26d-8e90-4c9a-83d4-984a59bfeb28.png)
![Free Board Page](https://user-images.githubusercontent.com/31907528/147205213-20badb10-6091-488f-9e9d-afbbbd5fbe6a.png)

---

## VueJS (FrontEnd)
### 메인 기능
- [x] 아파트 목록 불러오기: DB에 시군코드, 공공데이터 API로 아파트 정보 불러오기
- [x] 카카오 맵: 카카오 맵 위에 마커로 아파트 정보 뿌려주고, 클릭 시 아파트 정보 보기
- [x] 회원 목록 관리: 회원 가입, 로그인, 정보 변경, 비밀번호로 아이디 찾기 등
- [x] 게시판 관리: 글쓰기, 글수정, 글삭제 등등
- [ ] 게시판 댓글 기능: userid에 따라 수정하거나 달 수 있고 기타 등등
- [ ] Q&A or 공지사항 게시판

### 기타 기능
- [x] 알럿과 뷰엑스 연동: ***vuex에 메세지와 로그인 성공 여부를 전달 후***, **App.vue에 Alert.vue를 뿌려줘서** 어느 곳에서도 알림 창이 뜰 수 있도록 구현.
현재 몇 초 후에 삭제되는 기능은 아직 구현 못함. dismissible 기능은 구현함.
- [ ] 페이지네이션: 아파트 정보를 페이지네이션 기법으로 나눠서 여러개 보여주기
- [ ] CSI: 구글 이미지 

## Spring-MyBatis + MySQL (BackEnd)
 - [x] 아파트 테이블
 - [x] 회원 테이블
 - [x] 게시판 테이블

## 변경점

- 2021/11/17: 모든 메세지 수용 가능한 alert 창 완성.
- 2021/11/18: 회원 관리 기능 추가(로그인, 탈퇴, 수정 등)
- 2021/11/23: 회원가입 밸리데이션 기능 구현

## 레퍼런스

- Search Bar: https://stackoverflow.com/questions/44656269/how-to-change-bootstrap-input-text-box-style-to-line/44656484

- kakao Map API: https://apis.map.kakao.com/web/sample/categoryFromBounds/
  https://velog.io/@geommyeong/Vue.js-KakaoMap-API

- Image Source: https://source.unsplash.com/

- Bootstrap card: https://m.blog.naver.com/writer0713/222082104945
