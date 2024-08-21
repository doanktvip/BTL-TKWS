window.onload=function(){
    const btnsignup=document.getElementById("signup-submit");
    const inputUsername=document.getElementById("username");
    const inputPassword=document.getElementById("password");
    const inputConfirmPassword=document.getElementById("confirmpassword");
    let result=document.querySelector(".Result");
    btnsignup.addEventListener("click",function(event) {
        event.preventDefault();
        if(inputUsername.value===""||inputPassword.value===""||inputConfirmPassword.value==="") {
            result.innerHTML='<span>Vui lòng không để trống!</span>';
        } 
        else {
            //khi xác nhận mật khẩu chính xác
            if(inputConfirmPassword.value===inputPassword.value) {
            //     mảng thông tin người dùng
            const user= {
                username:inputUsername.value,
                password:inputPassword.value,
            };
            // chuyển đối tượng người dùng thành chuỗi JSON
            const json=JSON.stringify(user);
            // lưu chuỗi JSON với từ khóa là tên người dùng
            localStorage.setItem(inputUsername.value,json);
            window.location.replace('login.html');
            }
            else {
                //Thông báo nhập lại bị sai mật khẩu 
                result.innerHTML='<span>Vui lòng nhập đúng mật khẩu</span>';
                //Xóa vùng nhập lại để người dùng nhập lại mật khẩu
                document.getElementById("confirmpassword").value="";
                //Đưa con trỏ về vùng confirm password
                document.getElementById('confirmpassword').focus();
            }
        }
    });

    //link liên kết hai trang
    let login=document.querySelector('.changepage>span:first-child');
    login.addEventListener('click',function(){
        let rel=this.getAttribute('rel');
        window.location.replace(`${rel}.html`);
    });


    let eye1=document.getElementById('eye1');
    eye1.onclick=function(){
        //Thay đổi biểu tượng con mắt khi click vào
        if(eye1.className==="fa-regular fa-eye") {
            eye1.className="fa-regular fa-eye-slash";
        } 
        else {
            eye1.className="fa-regular fa-eye";
        }
        //Thay đổi thành phần kiểu input(Nếu type là password thì đổi thành text và ngược lại)
        const type=password.getAttribute('type')==='password' ? 'text' :'password';
        password.setAttribute('type', type);
    }
    let eye2=document.getElementById('eye2');
    eye2.onclick=function(){
        if(eye2.className==="fa-regular fa-eye") {
            eye2.className="fa-regular fa-eye-slash";
        } 
        else {
            eye2.className="fa-regular fa-eye";
        }
        const type1=confirmpassword.getAttribute('type')==='password' ? 'text' :'password';
            confirmpassword.setAttribute('type', type1);
    }
}