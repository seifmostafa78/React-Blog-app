import './sidebar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>

      <div className="sidebarItems">
          <span className="sidebarTitle">About me</span>
          <img className="sideImg" src="https://images.pexels.com/photos/18884059/pexels-photo-18884059/free-photo-of-woman-lying-on-bed-with-laptop-and-candle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <p className='sideDesc'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illo possimus ipsum pariatur ab, 
            nobis laborum quam perferendis? 
            Eius, obcaecati.
          </p>
      </div>

      <div className="sidebarItems">
        <span className="sidebarTitle">Categories</span>
        <ul className='sideListItems'>
          <li>Life</li>
          <li>Music</li>
          <li>Sport</li>
          <li>Style</li>
          <li>Tech</li>
          <li>Cenima</li>
        </ul>
      </div>

      <div className="sidebarItems">
        <span className="sidebarTitle">Follow us</span>
        <div className="sideIcons">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-pinterest"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>

    </div>
  )
}