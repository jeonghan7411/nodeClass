//.getFullYear();
//.getMonth()+1;
//.getDate();
const today = new Date();
//console.log(today);

const yy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
console.log(`${yy}년${mm}월${dd}일`);

//.getTime() : 날짜를 초로 변환해서 사용할 때 - Log file , attachment(첨부파일)
const log_name = "Log";
const attach_name = "image";
//console.log(new Date().getTime());
console.log(`Log file을 생성합니다 : ${log_name}_${new Date().getTime()}.txt`);

//.jpg .jpeg : 사진 배경이 흰색  원본이 photo.jpg 라 가정
//.png 뒷 배경이 투명 사진이나 이미지

console.log(
  "업로드 된 첨부파일 : " +
    attach_name +
    "_" +
    new Date().getTime() +
    "_photo " +
    ".jpg"
);
