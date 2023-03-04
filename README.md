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
