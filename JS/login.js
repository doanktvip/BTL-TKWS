window.addEventListener('load',function(){
    let btnSubmit=document.getElementById("submit");
    btnSubmit.addEventListener('click',function(event) {
        event.preventDefault();//Ngăn chặn gửi form mặc định
        //Lấy giá trị tên đăng nhập và mật khẩu
        let inputUsername=document.getElementById('username');
        let inputPassword=document.getElementById('password');
        let result=document.querySelector(".Result");
        //
        const user=JSON.parse(localStorage.getItem(inputUsername.value));
        //Tìm tài khoản không tồn tại
        //Kiểm tra thông tin đăng nhập
        if(inputUsername.value===""||inputPassword.value==="") {
            result.innerHTML='<span>Vui lòng không để trống!</span>';
        } else{
            //Kiểm tra danh sách tài khoản
            if(user===null){
                result.innerHTML='<span>Tài khoản không tồn tại!</span>';
                inputUsername.value = '';
                inputPassword.value = '';
                inputUsername.focus();
            }else if (inputUsername.value === user.username && inputPassword.value === user.password) {
                // Lưu thông tin đăng nhập vào localStorage
                localStorage.setItem('username',inputUsername.value);
                localStorage.setItem('password',inputPassword.value);
                // Chuyển hướng người dùng đến trang chủ (đè lên trang trước đó)
                window.location.replace('home.html');
            }
            else{
                result.innerHTML='<span>Mật khẩu không chính xác!</span>';
                // Xóa các vùng nhập để người dùng nhập lại
                inputPassword.value = '';
                // Đưa con trỏ về ô nhập tên mật khẩu
                inputPassword.focus();
            }
        }
    });
    let signup=document.querySelector('.changepage>span:first-child');
    signup.addEventListener('click',function(){
        event.preventDefault();
        let rel=this.getAttribute('rel');
        window.location.replace(`${rel}.html`);
    });
    let eye=this.document.getElementById("eye");
    eye.addEventListener('click',function(){
        //Thay đổi thành phần kiểu input(Nếu type là password thì đổi thành text và ngược lại)
        const type=password.getAttribute('type')==='password' ? 'text' :'password';
        password.setAttribute('type', type);
        //Thay đổi biểu tượng con mắt khi click vào
        if(eye.className==="fa-regular fa-eye") {
            eye.className="fa-regular fa-eye-slash";
        } 
        else {
            eye.className="fa-regular fa-eye";
        }
    });
});