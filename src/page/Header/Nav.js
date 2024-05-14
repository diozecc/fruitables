
function Nav(){
    return (
        <div className="navbar-nav mx-auto">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="shop.html" className="nav-item nav-link">Shop</a>
            <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
            <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <a href="cart.html" className="dropdown-item">Cart</a>
                    <a href="chackout.html" className="dropdown-item">Chackout</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
        </div>
    )

}
export default Nav;