# TODO
동계 인턴 과제



http://23.20.145.133:3000 으로 접속합니다.
(aws ec2를 이용하여 웹서버를 구동중입니다.)

1. todo 제목, 설명, 마감 기한, 우선 순위를 설정하여 submit 버튼을 누릅니다.
(마감 기한은 input type을 date를 사용합니다. chrome은 이 type을 지원하지만 다른 브라우저는 지원하지 않을 수 있으니  마감 기한은 yyyy-mm-dd 형태를 지켜주세요. 지키지 않을 경우 submit하지 않습니다. 19**,20**년도, 1 ~ 12월, 1 ~ 31일 범위에 기한을 입력하세요.)

2. 저장한 일이 todo list에 보여집니다. priority에 따라 색이 다릅니다. deadline 순으로 정렬됩니다.

3. 마감 기한이 지났거나, 지난 일을 등록할 경우, 삭제한다는 경고와 함께 삭제됩니다.

4. todoList에서 삭제하고 싶은 경우 Done 버튼을 누르면 삭제됩니다.

5. update할 경우 update 버튼을 누르면 화면이 바뀝니다. 



사용 플래폼 
1. nodejs: npm module(express,mysql,ejs등)
2. mysql server 
3. aws ec2 
