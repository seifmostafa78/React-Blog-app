import './contact.css'
import SideBar from '../../components/sidebar/SideBar'
import { useState } from 'react';

export default function Contact() {
  const characterLimit = 600;

  const [MessageText, setMesssageText] = useState('')

  const handleLimitChange = (event) => {
    if(characterLimit - event.target.value.length >= 0){
        setMesssageText(event.target.value)
    }
  }

  return (
    <div className='contact'>
        <div className="contactWrapper">
            <span className='contactTitle'>Contact Us</span>
            <form className='contactForm'>
                <div className='contactInps'>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='your name' autoFocus={true}/>
                </div>
 
                <div className='contactInps'>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='your email'/>
                </div>

                <div className='contactInps'>
                    <label>Address</label>
                    <input type="text" name="address" placeholder='your address'/>
                </div>

                <div className='contactInps'>
                    <label>Phone Number</label>
                    <input type="number" name="phonenumber" placeholder='your phone number'/>
                </div>
                
                <div className='subject contactInps'>
                    <label>Subject</label>
                    <input type="text" name="subject" placeholder='your subject' />
                </div>
                  
                <div className='message contactInps'>
                    <label>Message</label>
                    <textarea onChange={handleLimitChange} value={MessageText} name="message" placeholder='your message...'></textarea>
                    <div className='char'>
                        <span>{characterLimit - MessageText.length} remaining</span>
                    </div>
                </div>

                <button className='contactBtn'>Submit</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}
