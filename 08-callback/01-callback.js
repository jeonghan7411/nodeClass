/*
    1. blocking 방식
        - 순차적으로 진행
        - 이전 작업이 끝날 때까지 기다렸다가 다음 작업을 진행


    2. non-blocking 방식
        - 여러 작업을 동시에 진행
        - 다른 작업이 끝날 때까지 기다리지 않고 다음 작업을 동시에 진행
        - 파일 입출력 같은 대용량 처리 작업 시 사용
        - call back 함수를 활용 : call back 함수를 많이 사용하면 오히려 단점이 더 많다.
        - setTimeout()
*/

function one() {
  //시간이 오래 걸리는 작업
  //setTimeout(()=>작업내용, 시간)
  //setTimeout(() => console.log("One"), 3000); // 1 -> 1000
  setTimeout(() => {
    console.log("One...");
  }, 3000);
}

function two() {
  //적은 시간이 걸리는 작업
  setTimeout(() => {
    console.log("Two...");
  }, 1000);
}

one();
two();
