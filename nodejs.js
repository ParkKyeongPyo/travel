const http = require('http'); //require은 모듈을 가져오는 함수 , node.js는 내장 라이브러리를 포함하고 있다.
const url = require('url');

const hostname = "127.0.0.1"; // 사용할 서버 호스트네임
const port = 5000; // 사용할 서버 포트
//서버를 만든다.
const server = http.createServer((req,res) => { //서버를 만듦 , function 함수는 (요청에 대한) 이벤트 리스너 역할
    //요청이 오면 실행되는 콜백 함수
    console.clear();
    console.log("hihi");
    const queryData = url.parse(req.url,true).query;
    const job = queryData['직업'];
    console.log(queryData);
    console.log(job);
    

    res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'}); //res 객체에 대한 함수 , 응답으로 보낼 헤더 만들기
    res.write(`${job} 모두 모여랏!`);
    res.end('\nAloha!'); //응답 데이터 전송
});

//서버를 연결 대기 상태로 만든다.
server.listen(port, hostname, () => { //위에서 서버를 만들면 listen이 포트를 할당하고 서버와 클라이언트를 연결해주는 콜백함수
    // 연결 받으면 실행되는 콜백 함수

    // 터미널에 로그를 기록한다.
    console.log(`Server running at http://${hostname}:${port}/`);
});



