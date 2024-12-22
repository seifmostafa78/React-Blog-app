import './singlepost.css'
import SideBar from '../../components/sidebar/SideBar'


export default function SinglePost() {
  return (
    <div className='singlePost'>
        <img className='singlePostImg' src='https://images.pexels.com/photos/225203/pexels-photo-225203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostUpdates">
                <i className="edit far fa-edit"></i>
                <i className="delete far fa-trash-alt"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Seif</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A assumenda, mollitia amet explicabo odio, nostrum aperiam
            voluptas soluta ipsum similique architecto tempora veritatis
            enim ratione dolore? Laboriosam aliquid quos porro vitae totam
            veniam optio odio consectetur voluptatem illo. Perferendis sit
            iure aut dolorum ullam ratione, non iusto dolores amet tempora. 
            Quo ducimus officia soluta alias beatae amet labore maxime placeat 
            tempora est, magnam molestiae saepe sapiente in commodi repellendus 
            mollitia distinctio optio explicabo, illum accusamus nesciunt unde nam. 
            Recusandae suscipit voluptatem, facere, atque vero consequuntur fugiat 
            ipsum facilis veniam ipsam architecto placeat sunt saepe porro dolor autem 
            consectetur impedit omnis! Recusandae suscipit voluptatem, facere, atque vero 
            consequuntur fugiat
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A assumenda, mollitia amet explicabo odio, nostrum aperiam
            voluptas soluta ipsum similique architecto tempora veritatis
            enim ratione dolore? Laboriosam aliquid quos porro vitae totam
            veniam optio odio consectetur voluptatem illo. Perferendis sit
            iure aut dolorum ullam ratione, non iusto dolores amet tempora. 
            Quo ducimus officia soluta alias beatae amet labore maxime placeat 
            tempora est, magnam molestiae saepe sapiente in commodi repellendus 
            mollitia distinctio optio explicabo, illum accusamus nesciunt unde nam. 
            Recusandae suscipit voluptatem, facere, atque vero consequuntur fugiat 
            ipsum facilis veniam ipsam architecto placeat sunt saepe porro dolor autem 
            consectetur impedit omnis! Recusandae suscipit voluptatem, facere, atque vero 
            consequuntur fugiat  
        </p>
    </div>
  )
}