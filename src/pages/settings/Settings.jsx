import './settings.css'
import SideBar from '../../components/sidebar/SideBar'
import { useState } from 'react'

export default function Settings() {

    const [ImageSrc, setImageSrc] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]

        if(file){
            const objectUrl = URL.createObjectURL(file)
            setImageSrc(objectUrl)
        }
    }

  return (
    <div className='settings'>
      <div className="settingsWrapper">

        <div className="settingsEdit">
            <span className='updateAcc'>Update Your Account</span>
            <span className='deleteAcc'>Delete Account</span>
        </div>
       
       <form className="settingsForm">

        <label>Profile Picture</label>
        <div className="settingsPP">
            {ImageSrc? <img className='settingsImg' src={ImageSrc}/>
             : <img className='settingsImg' src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
            }
            <label htmlFor="fileInp">
                <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input onChange={handleFileChange} type="file" id="fileInp" style={{display: 'none'}} />
        </div>

        <label>Username</label>
        <input type="text" name="username" placeholder='Seif'/>
        <label>Email</label>
        <input type="email" name="email" placeholder='Seif@gmail.com'/>
        <label>Password</label>
        <input type="password" name="password" placeholder='Password'/>        

        <button className='settingsBtn'>Update</button>
       </form>

      </div>

      <SideBar />
    </div>
  )
}
