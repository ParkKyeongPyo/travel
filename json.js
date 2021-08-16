let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(['a','b']);
console.log(json);

const rabbit = {
    name: 'tori',
    age: '3',
    size: null,
    birthday: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    }
};
json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit, ['name','age']);
console.log(json);
json = JSON.stringify(rabbit, (key, value) => { 
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;  
    // Q. 여기서 value는 객체 근데 리턴값 value가 어떻게 작동하고 이 콜백함수가 어떻게 돌아가는지 이해가 가지 않는다.
    // A. 출처 MDN > 객체를 반환하면 그 객체는 각각의 프로퍼티에 대해 replacer함수를 호출하며 순환적으로 JSON 문자열로 문자열화 , 함수면 아무것도 추가 X.
    // Q. return 구문에서 ? 와 : 은 새로운 문법인가 api에 있는 ? 와 :랑은 다른 것인가? A. 조건 연산자.
    
} );
console.log(json);
console.clear();

//parse
let obj = JSON.parse(json);
console.log(json);

obj = JSON.parse(json, (key,value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthday' ? new Date() : value;
});
console.log(obj.birthday.getDate());
console.log(obj);
