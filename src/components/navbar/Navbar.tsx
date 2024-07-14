import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin-Dashboard-Panel</span>
      </div>

      <div className="icons">
        <img src="/search.svg" alt="" className='icon' />
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className='notification'>
          <img src="notifications.svg" alt="" />
          <span>2</span>
        </div>
        <div className='user'>
         
          <img src="https://img.freepik.com/premium-vector/vector-illustration-man-avatar-simple-minimalist-flat-design-style_844724-7066.jpg?w=740" alt="" />
       <span>Amit</span>  </div>
        <img src="/settings.svg" alt="" className='icon' />
      </div>
    </div>
  );
}

export default Navbar;
