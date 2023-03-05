# **1. useInput**

useInput은 반복적인 input 태그의 값 변경 구문을 묶어놓은 훅이다.

# **2. useTabs**

useTabs는 디폴트 인덱스와 tab 배열을 받고 현재 탭과 탭 변경 함수를 반환하는 훅이다.<br>
텝 변경함수의 인자엔 텝 리스트에 변경할 텝의 인덱스가 들어간다.

# **3. useTitle**

useTitle은 html에 title태그의 글자를 바꿔주는 함수를 반환하는 훅이다.

# **4. useClick**

useClick은 요소에 클릭 이벤트 부여해주는 훅이다.<br>
addEventListener 메소드를 이용하고, 컴포넌트가 사라질 때 이벤트가 사라진다.

# **5. useConfirm**

useConfirm은 confirm을 띄워주는 함수를 반환하는 훅이다.<br>
첫번째 인자로 메세지, 두번째는 확인 시 실행할 콜백함수, 세번째는 취소 시 실행할 콜백함수가 들어간다.

# **6. usePreventLeave**

usePreventLeave는 사용자에게 페이지를 떠날지 묻는 창을 활성화하는 함수와 비활성화하는 함수를 반환하는 훅이다.<br>
API 요청을 보내고 기다리고 있거나 등등 페이지 닫는 것을 막고 싶을 때 사용할 수 있다.

# **7. useBeforeLeave**

useBeforeLeave는 마우스가 창에서 벗어나면 첫번째 인자의 콜백함수를 실행시키는 훅이다.

# **8. useFadeIn**

useFadeIn은 특정 요소에 fade in 애니메이션을 줄 수 있는 훅이다.<br>
파라미터로 duration과 delay를 받는다.

# **9. useNetwork**

useNetwork는 온라인/오프라인이 전환될 때마다 특정함수를 실행하고 온라인지 아닌지 boolean 값을 반환해주는 훅이다.

# **10. useScroll**

useScroll은 스크롤을 감지해서 window.scrollX, window.scrollY 값을 반환하는 훅이다.

# **11. useFullScreen**

useFullScreen은 특정 요소를 크게 키우거나 원래데로 돌리는 함수를 반환하고 그때 실행할 함수를 인자로 받는 훅이다.

# **12. useNotification**

useNotification은 브라우저에서 유저에게 알림 권한을 요청하는 창을 띄우는 함수를 반환하는 훅입니다.<br>
첫번째 인자에 Notification 클래스의 title, 두번째 인자의 Notification 클래스의 options를 달 수 있습니다.

# **13. useAxios**

useAxios는 옵션과 axios 또는 axios 인스턴스를 받는 훅으로, laoding과 데이터, error와 refetch 함수를 반환한다.

# **후기**

노마드코더 강의 사이트에서 위 훅들을 따라 만들어봤는데 확실히 커스텀 훅을 이해하는데 도움이 많이 되었다.<br>
다음에 배운 훅들을 응용해서 커스텀 훅 디자인 패턴으로 프로젝트를 한번 만들어봐야겠다.

# **14. npm에 커스텀 훅 배포하기**

먼저 배포할 훅의 폴더에 `npm init`으로 package.json을 만들어준다.<br>
패키지 명은 @(나중에 만들 npm organization 이름)/패지지명 형식으로 하면 된다.<br>
keywords는 쉼표로 구분해서 관련 키워드를 넣으면 된다.<br>
만들어진 package.json에 scrinpts 부분은 필요없으니 삭제한다.

그리고 해당 폴더에 새로 package.json을 만들었으므로 npm install로 react와 react-dom을 설치해야한다.<br>
그리고 설치된 react와 react-dom 정보가 있는 dependencies 이름을 peerDependencies로 바꿔주는데 이 설정은 이 패키지들은 요구되지만 설치할 필요가 없다는 설정이다.

[https://www.npmjs.com/org/create](https://www.npmjs.com/org/create) 주소로 들어가서 Organization을 만들고 (이때 npm init을 통해 만들었던 패키지 명에 슬래쉬 앞에 이름으로 만들면 된다.) 터미널로 돌아와서 npm login을 통해 위 사이트에서 만들었던 계정으로 로그인한다.

터미널에서 배포하려는 폴더에 들어간 후 npm publish --access public을 하면 배포가 된다.<br>
배포된 패키지는 만든 npm 사이트에 Organization에 들어있는데 npm i로 설치하면 사용할 수 있다.
