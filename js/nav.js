
const createNav = ()=> {
    let nav = document.querySelector('.navbar');
    nav.innerHTML=`<div class="nav">
    <img src="img/brandlogo.png" class="brand-logo" alt="brand logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand...">
            <button class="search-btn"><img src= "img/search-icon.png" class= "search-icon"></button>
            <a href="#"><img src="img/user-icon.png" class="user-icon" alt="image user"></a>
 <a href="#"><img src="img/cart.png" class="cart-icon" alt="image cart"></a>

        </div>
    </div>
 </div>
 <ul class="links-container">
     <li class="link-item"><a href="index.html" class="link">home</a></li>
     <li class="link-item"><a href="product.html" class="link">women</a></li>
     <li class="link-item"><a href="404.html" class="link">men</a></li>
     <li class="link-item"><a href="404.html" class="link">lingerie</a></li>
     <li class="link-item"><a href="404.html" class="link">accessories</a></li>
 </ul>
 `;
}
createNav();