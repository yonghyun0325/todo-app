# 프론트앤드 개발자 과제(할일_ToDo 앱)

# 1. 자신이 개발한 앱에 대한 설명
- 이 프로젝트는 Spring Boot와 React를 활용한 To-Do List 애플리케이션입니다.
사용자는 할 일을 추가, 삭제 할 수 있으며, MySQL을 사용하여 데이터를 영구적으로 저장합니다.

✅ 프론트엔드: React + Fetch API

# 2. 소스 빌드 및 실행 방법 메뉴얼
- 프론트엔드 (React) 실행 방법

1️⃣ 프로젝트 폴더로 이동 - cd todo-app<br>
2️⃣ 필요한 패키지 설치 - npm install<br>
3️⃣ React 프로젝트 실행 - npm start

✅ 정상적으로 실행되면 http://localhost:3000 에서 To-Do List 화면을 볼 수 있습니다.

# 3. 주력으로 사용한 컴포넌트에대한 설명 및 사용 이유 기입
1️⃣ React 컴포넌트<br>
📌 TodoApp.jsx

✅ TodoApp.jsx는 To-Do List의 메인 컴포넌트이며, 할 일 추가, 삭제를 관리합니다.

✅ useState → 할 일 목록과 입력값을 관리<br>
✅ useEffect → 백엔드 API에서 데이터를 불러올 때 사용<br>
✅ fetch API → Spring Boot API와 통신

📌 기능 요약

할 일 목록 불러오기 (GET /api/todos)<br>
새로운 할 일 추가 (POST /api/todos)<br>
할 일 삭제 (DELETE /api/todos)
