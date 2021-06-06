# 깃헙 공개 저장소( 이슈 목록과 상세내용)

## 실행 방법

node -v v14.15.1 로 설치

`npm i`

`npm start`

## **프로젝트 소개**

특정 깃헙 공개 저장소의 이슈 목록과 상세 내용을 확인할 수 있는 사이트

## **프로젝트 목표**

- 사용하여 요구사항에 맞게 만드는 것이 목표입니다.
- github rest api 사용

## **기술 스택**

- React.js(CRA)
- stlyed-components

## **구현**

- axios를 통해 json 파일 데이터 가져오기
- 각 이슈 행에는 '이슈번호, 이슈제목, 작성자, 작성일, 코멘트수'를 표시합니다.
- 다섯번째 셀에는 이 주소([https://placehold.it/500x100?text=ad](https://placehold.it/500x100?text=ad))의 광고 이미지 배너를 출력해주세요.
- 광고 배너를 클릭하면 [https://thingsflow.com/ko/home](https://thingsflow.com/ko/home) 로 이동합니다.

상세 목록 화면

파라미터 값을 이용하여  

Api -   /repos/{owner}/{repo}/issues/{issue_number} 

를 호출하여 상세 내용을 가져올 예정입니다.
