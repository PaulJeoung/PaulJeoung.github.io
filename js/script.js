/* 
    메인화면 메뉴 상단 백그라운드 이미지가 순환 할수 있게 처리
    bg_container 에서 백그라운드 이미지를 사용 할 수 있어야 함
*/
const images = [
    'images/mainslide01.jpg',
    'images/mainslide02.jpg',
    'images/mainslide03.jpg'
];
let nowIndex = 0;
const bgContainer = document.querySelector('#bg_container');

function changeBackground() {
    bgContainer.style.backgroundImage = `url(${images[nowIndex]})`;
    console.log(images[nowIndex]);
    // nowIndex = (nowIndex + 1) % images.length;
    nowIndex =  ++nowIndex % images.length;
    
}

setInterval(changeBackground, 5000);
changeBackground();

/* 
    셀렉트를 선택 하는 경우, 수동입력창을 disabled 처리
    셀렉트 선택시, 수동 입력창에 셀렉트 값을 채우도록 처리
    수동 선택 시 수동 입력창 입력 가능
    onchanege() 일때 동작 하게 처리
*/
function toggleDomain() {
    const manual = document.getElementById('email_rear');
    const domain = document.getElementById('email_domain').value;

    if (domain == 'naver.com') {
        manual.value = domain;
        manual.disabled = true;
        console.log('네이버 확인', );
    } else if (domain == 'hanmail.net') {
        manual.value = domain;
        manual.disabled = true;
        console.log('한메일 확인');
    } else {
        manual.value = "";
        manual.disabled = false;
        console.log('메뉴얼');
    }
}

/* 
    패스워드 재 입력을 하는 경우, 패스워드 값과 비교 하여 correct 처리
    oninput() 을 사용 하여, 키보드에 입력 될때 마다 비교 값을 확인
    오리지날 값과 동일 하면, 매치처리 하고 다를 경우 다르다는 메시지 하단에 출력
*/
function toggleVaildPwd() {
    const pwd_origin = document.getElementById('pwd').value;;
    const pwd_re = document.getElementById('pwd-check').value;;
    const vailPwddMsg = document.getElementById('vailPwddMsg');
    var html = '';

    // if (pwd_origin === pwd_re) {
    //     console.log('일치');
    //     html += '<span style="color: blue; font-size: 0.9rem;">패스워드가 일치 합니다.</span>';
    // } else {
    //     console.log('불일치');
    //     html += '<span style="color: red; font-size: 0.9rem;">패스워드가 일치하지 않습니다.</span>';
    // }
    
    const testResult = pwd_origin === pwd_re; 
    const color = testResult ? 'blue' : 'red';
    const message = testResult ? '일치 합니다' : '일치 하지 않습니다';
    
    html = `<span style="color: ${color}; font-size: 0.9rem;">패스워드가 ${message}.</span>`;

    
    vailPwddMsg.innerHTML = html;
}

/* 
    연락처 입력 후 정규식으로 입력된 값을 확인 
    숫자가 아닌 다른 문자가 입력되는 경우 하단에 메시지 출력
    oninput()을 사용하여 입력될 때마다 정규식에 적용
*/
function toggleVaildContacts() {
    const numbers = document.getElementById('contacts').value;
    const regex = /^\d+$/; // 숫자만 허용
    const numbersMsg = document.getElementById('numbersMsg');
    var html = '';

    if (regex.test(numbers) === false) {
        console.log ('다른 문자가 입력되고 있습니다');
        html += '<span style="color: red; font-size: 0.9rem;">숫자만 입력해 주세요</span>';
    } else {
        console.log ('숫자만 입력되고 있습니다');
    }
    numbersMsg.innerHTML = html;
}

/* 
    form 태그에서 onsubmit 속성을 사용 해 등록버튼을 클릭하면, form 유효성을 확인
    * required 항목이 입력 되었는지 확인 (앞에 있는 입력창에서 모두 유효성 확인)
    * required 항목이 입력 되지 않는 경우 alert 이 뜨고 false 를 return
    email을 조합 하여 full email을 생성 하고, 
    모두 입력이 제대로 되었으면 등록 완료 alert이 나오고, value 값을 출력
*/
function signinForm() {
    const email_f = document.getElementById('email_front').value;
    const email_r = document.getElementById('email_rear').value;
    const email_d = document.getElementById('email_domain').value;
    const user = document.getElementById('user').value;
    const pwd = document.getElementById('pwd').value;
    const contacts = document.getElementById('contacts').value;
    
    if (email_d === "manual") {
        var full_email = email_f + '@' + email_r;
    } else {
        var full_email = email_f + '@' + email_d;
    }
    console.log ('이메일 생성이 완료 되었습니다.', full_email);
/*
    if (user === '' || full_email === '' || pwd === '' || contacts === '') {
        alert ("필수항목을 확인해 주세요");
        return false;
    } else {
        alert ('등록이 완료 되었습니다.\n작성자명 : ' + user + '\n비밀번호 : ' + pwd + '\n이메일 : ' + full_email + '\n연락처 : ' + contacts);
        return true;
    }
    */

      alert ('등록이 완료 되었습니다.\n작성자명 : ' + user + '\n비밀번호 : ' + pwd + '\n이메일 : ' + full_email + '\n연락처 : ' + contacts);
        return true;
}
