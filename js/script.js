/* 
    class name을 가지고 와서 처리
*/

var text = document.getElementsByClassName('textHide');

text.addEventListner('click', function () {
    if (text.style.visibility !== 'hidden') {
        text.style.visibility = 'hidden';
    } else {
        text.style.visibility = 'visible';
    }
});


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

var clearCheck = true;
function clearMessage(frm) {
    if (clearCheck) {
        frm.messagebox.value='';
        clearCheck = false;
    }
}