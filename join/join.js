const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')

join.addEventListener('click', () => {
    if (id.value == 'acid') {
        if (password.value == '0000') {
            alert('회원가입 되었습니다.')
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
            errStack ++;
        }
    }
})