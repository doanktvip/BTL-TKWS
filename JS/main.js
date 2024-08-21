window.onload=function(){
    //bắt sự kiện tài khoản
    let butLog=document.querySelector('.button-login');
    let login=document.querySelector('.login');
    butLog.onclick=function(){
    //toggle thêm xóa class
    //add thêm class
    //remove xóa class
        login.classList.toggle('block');
    }
    //bắt sự kiện nút search
    let butSea=document.querySelector('.button-search');
    let search=document.querySelector('.search');
    butSea.onclick=function(){
        search.classList.toggle('block');
    }
    //bắt sự kiện nút menu
    let butMenu=document.querySelector('.content-but');
    let nav=document.querySelector('.content-nav');
    let menuNav=document.querySelector('.content-nav .menu');
    let head=document.querySelector('.content-header');
    let contentNav=document.querySelector('.content-navs');
    let close=document.querySelector('.close');
    setInterval(window.onload=function(){
        head.scrollHeight;
        // console.log(head.scrollHeight);
    },100);
    //bắt sự kiện trượt màn hình
    //cố định nav và xuất hiện go to top
    let goto=document.querySelector('.gototop');
    close.onclick=function(){
        nav.classList.remove('block');
        nav.classList.remove('popup');
    }
    butMenu.onclick=function(){
        nav.classList.add('block');
        nav.classList.add('popup');
        menuNav.classList.remove('flex');
    }
    window.onscroll=function(){
        if(this.scrollY>=head.scrollHeight){
            goto.classList.add('block');
            contentNav.classList.add('menu-nav');
        }else{
            goto.classList.remove('block');
            contentNav.classList.remove('menu-nav');
        }
    }
    //chuyển sang trang web chủ từng tab
    let link=document.querySelectorAll('.content-nav .menu>li>a');
    for(let l of link){
        l.onclick=function(){
            event.preventDefault();
            let rel=this.getAttribute('rel');
            window.location.replace(`${rel}.html`);
        }
    }
    // Lấy thông tin đăng nhập từ localStorage
    const username = localStorage.getItem('username');
    const password=localStorage.getItem('password');
    if(username){
        document.getElementById('message').innerHTML=`${username} `;
        document.querySelector('.login .menu>li:last-child').innerHTML=`<p id="logout" rel='home'><i class="fa-solid fa-user-minus"></i><span> Đăng xuất</span></p>`
    }
    let log=document.querySelectorAll('.login .menu>li>p');
    for(let l of log){
        l.addEventListener('click',function(){
            let rel=this.getAttribute('rel');
            window.location.replace(`${rel}.html`);
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        });
    }
}