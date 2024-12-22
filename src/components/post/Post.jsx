import { Link } from 'react-router-dom'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <img className='postImg' src='https://images.pexels.com/photos/225203/pexels-photo-225203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div className="postInfo">

          <div className="postCats">
            <span>Music - </span>
            <span>Life</span>
          </div>

          <span className="postTitle"><Link className='link' to="/post/1">Lorem ipsum dolor sit amet.</Link></span>

          <span className="postDate">1 hour ago</span>

          <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Praesentium tempore aspernatur natus consequatur voluptatibus 
            dolorum illo officiis, quisquam, perspiciatis error alias similique. 
            Numquam ea assumenda ut iste itaque. Quae fugit vel voluptates sint 
            dolores unde fugiat nostrum necessitatibus est corrupti quidem quis quos at, 
            inventore earum obcaecati quibusdam nesciunt cum ex debitis omnis a provident 
            ipsum aliquid? Neque delectus doloribus voluptas explicabo veniam sit, omnis 
            tempora repellendus rem, repellat dicta harum enim nihil in dolore soluta eos 
            mollitia nostrum fugit?
          </p>
        </div>
      </div>
    </div>
  )
}
