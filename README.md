# 개인 블로그 기능 명세

1. 랜딩 페이지 : 블로그 슬로건, 가장 최근 포팅 5개 링크 제시
2. /about : 본인 소개
3. /frontend : 프론트엔드 개발을 하면서 쓰는 포스팅
4. /tech : FE 개발 이외의 다른 개발 분야, Computer Science 관련 포스팅
5. /sports : 개인적으로 흥미 있는 야구, 복싱 등의 이야기

## 해결 포인트

1. Fontawesome에서 불러온 이미지들이 초반에 너무 크게 로드되고 그 다음에 사이즈가 맞추어지는 경향이 있음. 이를 어떻게 해결할지? =>
   Fontawesome 컴포넌트를 사용하는 최상위 파일(navbar.jsx)에 `import '@fortawesome/fontawesome-svg-core/styles.css';`를 붙여줌
2. 검색엔진 최적화는 매번 Head 컴포넌트를 export 해주는 방식과 react - helmet 모듈을 쓰는 것 중에서 고민해볼 필요가 있다.
3. 모바일에서 보았을 때, 디폴트로 navbar는 보이지 않고 햄버거 버튼만 보이게 만든다. 그리고 이를 눌렀을 떄 nav bar가 나타나는 방식으로 진행. 눌렀을 때 상태값을 줘서 클래스를 생성. 기존에 모바일에서 봤을 때 처음에는 전체에 햄버거 버튼만 보여야 됨 => 반응형 디자인으로 해결함
4. mainContentHeader가 fixed 되니까 모바일 화면에서 사이드 네브 바를 열었을 떄, 헤더가 가리는 현상이 발생한다. z-index의 차이를 둬야할 것 같음(해결 완료)

## 페이지들 구현 명세

1. 모든 페이지는 Layout내부에 MainContent 컴포넌트가 들어가는 식으로 간다.
2. 특정 페이지의 index.jsx에서 Layout 컴포넌트 내부에 children으로 MainContent를 넣을 때 pageTitle prop을 전달하고, 이는 해당 페이지가 어떤 카테고리인지를 알려준다
3. MainContent는 전달 받는 pageTitle에 따라서 각기 다른 컴포넌트를 렌더링한다. 각 페이지마다 필요한 UI는 pages 디렉터리에서 만들어 놓고 MainContent 컴포넌트에서 끌어쓴다.
4. 사용자가 어느 path를 통해 들어간 경로에서 포스팅을 눌러 보든, /post를 통해 보여진다. 즉, 매 post의 slug를 contentful에서 정해줄 수 있다.
5. post/ 다음에 오는 경로는 dynamic하게 처리해주어야 한다 => 어떤 포스팅일지 모르므로 이를 쿼리해주는 것이 필요하다.
6. 그냥 도메인/post 경로에서는 모든 포스팅을 받아오는 것이 필요하다
7. 최대한 css 파일은 이를 필요로 하는 UI 컴포넌트와 근처에 colocate 시킨다
8. 기본적은 /, /about, /frontend, /post, /sports, /tech, /travel에 해당하는 페이지들은 각 카테고리에 해당하는 포스팅들을 보여주는 기능을 하고, 이들을 누르면 post탭으로 넘어갈 뿐이다.
9. /about 페이지에 들어갈 컨텐츠는 파일 내의 mdx로서 관리한다
