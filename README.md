# 개인 블로그 기능 명세

1. 랜딩 페이지 : 블로그 슬로건, 가장 최근 포팅 5개 링크 제시
2. /about : 본인 소개
3. /frontend : 프론트엔드 개발을 하면서 쓰는 포스팅
4. /tech : FE 개발 이외의 다른 개발 분야, Computer Science 관련 포스팅
5. /sports : 개인적으로 흥미 있는 야구, 복싱 등의 이야기

## 플러그인들의 기능

1. gatsby-transformer-remark: 마크다운으로 작성한 문법들을 다시 parsing 하여 gatsbyJS에 녹여내기 위한 플러그인
2. gatsby-plugin-mdx : mdx로 작성한 것은 특이하게 remark가 아니라 이 라이브러리를 이용해야 함
3. gatsby-plugin-sharp, gatsby-transformer-sharp : gatsby에서 이미지 최적화를 위해 필요한 라이브러리
4. gatsby-plugin-image: 위의 두 모듈을 gatsby-config.js에서 설정해주면, 해당 이미지를 컴포넌트로 쓰기 위해 활용되는 플러그인
5. gatsby-source-contentful : Headless CMS인 contentful에서 컨텐츠를 관리하고 이를 gatsby에 graphQL로 끌어오기 위한 모듈. gatsby-config.js 파일에 spaceID와 accessToken을 활용하면 된다

## 해결 포인트

1. Fontawesome에서 불러온 이미지들이 초반에 너무 크게 로드되고 그 다음에 사이즈가 맞추어지는 경향이 있음. 이를 어떻게 해결할지? =>
   Fontawesome 컴포넌트를 사용하는 최상위 파일(navbar.jsx)에 `import '@fortawesome/fontawesome-svg-core/styles.css';`를 붙여줌

2. 검색엔진 최적화는 매번 Head 컴포넌트를 export 해주는 방식과 react - helmet 모듈을 쓰는 것 중에서 고민해볼 필요가 있다.

3. 모바일에서 보았을 때, 디폴트로 navbar는 보이지 않고 햄버거 버튼만 보이게 만든다. 그리고 이를 눌렀을 떄 nav bar가 나타나는 방식으로 진행. 눌렀을 때 상태값을 줘서 클래스를 생성. 기존에 모바일에서 봤을 때 처음에는 전체에 햄버거 버튼만 보여야 됨 => 반응형 디자인으로 해결함(해결 완료)

4. mainContentHeader가 fixed 되니까 모바일 화면에서 사이드 네브 바를 열었을 떄, 헤더가 가리는 현상이 발생한다. z-index의 차이를 둬야할 것 같음(해결 완료)

5. contentful CMS에서 richText로 작성한 내용이 raw 데이터, 즉 그냥 이상한 문자열로만 전달되는 문제 => JSON.parse()를 해줘야 함. 그런데 이것을 그냥 plain text로 렌더하면 보안적으로 문제가 생길 수 있음

   > @contentful/rich-text-react-renderer 모듈을 통해 리액트 컴포넌트로 활용하면 옵션 설정에 맞게 p, strong 태그 등으로 바꿔줄 수 있음. 옵션은 @contentful/rich-text-types 모듈에서 타입 정의를 끌어와서 하면 됨(해결 완료)

6. a태그로 구현한 cardUI가 카드이다 보니까 화면의 너비가 줄어들면 컨텐츠가 세로로 길어지면서 아래로 내려가 footer 등이 안 보이는 문제가 발생한다 => mainContent 컨테이너의 display : flex로, flex-direction을 column으로 만들고 flex-shrink를 0으로 두면서 자연스럽게 문서의 일반 흐름에 footer도 포함시키고 스크롤도 되게 만들어 주었음(해결 완료)

7. pc 환경에서 화면을 좁히고 햄버거 버튼을 눌러서 사이드 바가 나타나게 만든 후, 다시 인위적으로 화면을 옆으로 늘릴 때 깨지는 현상이 발생한다 => layout.jsx 컴포넌트에서 전체 화면의 너비가 769픽셀 이상이 되면 hamburgerButtonClicked 관련 recoil state가 false가 되면서 navbar가 무조건 나타나게 만들었음, 이런 점에서 navbar관련 스타일링에서 그냥 navbar 클래스와 hamburgerButtonClickedNavBar 클래스를 따로 만들어서 구현해준 것이 참 좋았음. 또한 hamburgerButtonClickNavBar 클래스는 z-index가 15로 높아서 리코일 상태 값이 true가 되어 생성되면 기존의 main content의 너비가 100프로라고 하더라도 그냥 가려버린다.(해결 완료)

8. css 배포를 한 뒤에 개발 환경에서는 적용되지만, 배포 환경에서는 나타나지 않는 문제 => netlify가 CDN을 이용한 배포 툴이기 떄문에 캐싱된 것이 갱신되지 않음 : netlify에서 clear cache and trigger new deploy를 해주면됨(해결 완료)
9. /sports 관련 url 에서 포스팅 카드 UI를 보여줄 때 일부 이미지들이 너무 커보이는 문제가 발생함
10. pre-render를 해준 각 페이지의 컴포넌트에서 pageContext 속성을 통해서 넘겨주기는 했으나, 일단은 컴포넌트 차원에서 url param를 따와서 이를 기반으로 slug 관련 graphQL 쿼리를 해줘서 UI를 만들어주는 것이 좋지 않을까 싶음 => 그냥 처음에 gatsby-node.js 파일에서 빌드 시에 graphQl로 날려서 얻은 post 관련 데이터를 pageContext로 받아, 필요한 곳까지 prop drilling 방식으로 넘겨줌
11. 카테고리 별로 sports, frontend, tech, travel에 따라서 컨텐츠가 조금씩 다르므로 각각의 UI를 만들어주는 것이 필요하다. 즉 post 컴포넌트 디렉터리를 새로 파고, 거기에 원하는 UI를 만드는 컴포넌트를 생성하여 필요할 때마다 데이터를 prop으로 넘기는 방식으로 UI를 세로로 구성하는 것이 좋아보인다 => DetailPostComponents 디렉터리에 각각 필요한 것들을 위치시킴

12. 각 상세 포스트 페이지를 모바일 디바이스에서 접속하면 고정적으로 스크롤되지 않고 옆으로 이리저리 흔들이는 현상이 발생함 => DetailPostContainer의 마진과 패딩을 갖는 컴포넌트를 각 카테고리별 상세 포스트 페이지마다 감싸줌으로써 해결(해결 완료)

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
10. mainContent 내부의 MainContentPostsContainer 컴포넌트는 mainContentType을 속성으로 받으며, 이 속성을 통해 원하는 컨텐츠 목록이 보여진다.
11. 각 카테고리 탭에서 postCardUI를 누르면 /post/{카테고리명}/{고유의 slug명}으로 된 url path로 이동한다. 이는 디렉터리 내에서 카테고리 별로 UI의 디자인이 달라질 수 있기에 이렇게 작성한다
12. 각 페이지의 데이터는 pageContext로 전달된다 이는 아직 dom에 녹아들어갈 수 없으므로 잘 프로세싱 해서 사용한다 => prop으로 넘긴 것을 이용하여 만들지, 아니면 그냥 다시 graphQL 요청을 실행할지 정해야 함 : 페이지 이동을 하면 전달해준 정보를 만들어줌
13. post/{카테고리명}/{slug명} 의 url에서 기존의 UI를 유지할 수 있어야 함 => layout 구조를 활용하여 해결했음
14. / 경로에서는 내가 쓴 모든 포스팅을 날짜 순서대로 역으로 정렬하여 보여줄 수 있어야 한다. 이를 위해서 allContentEntry 관련한 쿼리를 진행하여 데이터를 가져와야 하는데, 이를 어떻게 날짜 별로 정렬할지? => graphQL 자체적으로는 내부 필드를 이용하여 정렬하는 기능을 제공하지 않음. 따라서 각 카테고리별 post를 graphQL로 여러 개를 받아와 구조 분해 방식으로 합쳐준 다음, 이들을 날짜에 따라서 정렬하는 태도가 필요함
15. post 에서 코드 블럭이 있는 경우에는 pre 태그와 code 태그를 중첩하여 내가 원하는 구조에서 code를 있는 그대로 렌더링하도록 한다. 여기에서 커스텀 스타일링은 pre와 code 태그를 이용하면 된다

# 각 post 구현 명세

- 각 post는 category 속성을 가진다. 이는 travel, sports, tech, frontend로 나뉘며 추후에 postCardUI를 클릭했을 때 /post 다음의 카테고리명으로 쓰인다.
- 실제 각 post들의 template은 /src/postTemplates 디렉터리 내부에서 정의된다
- sports post : title, slug, written time, Thumbnail Image, sports post content, tags Json, event(종목을 의미)
- frontend post : title, slug, written time, Thumbnail Image, frontend post content, tags Json(여기에서 어떤 거 관련인지 구분), reference link(not required), github link(not required)
- travel post : title, slug, written time, Thumbnail Image, travel post content, tags Json, isAbroad(boolean), city
- tech post : title, slug, written time, category(algorithm, OS, backend), Thumbnail Image(not required), tech post content, tag Json,
- 공통적으로 post가 가지는 속성들 : title, slug, written time, updatedAt, Thumbnail Image, categoryContent-raw, tagsJson

# 개인 블로그 검색 엔진 최적화(SEO) 방식

1. Gatsby Head API를 활용 vs React helmet(플러그인 활용) 방식
2. siteMap.xml 파일 using 플러그인 이용 & robot.txt 파일을 이용하기

## 만들어줘야 하는 메타 태그

1. title
2. description
3. og : description, locale, type, title, description, image
4. twitter: card, title, description, image
5. canonical : 페이지마다 달라짐 --> react-helmet을 이용해 작성
