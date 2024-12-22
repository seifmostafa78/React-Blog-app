import { useState } from 'react'
import './write.css'

export default function Write() {

  const [ImageSrc, setImageSrc] = useState(null)


  const handleFileChange = (event) => {
    const file = event.target.files[0] // الحصول على الملف الذي اختاره المستخدم

    if(file){
      const objectUrl = URL.createObjectURL(file) // إنشاء رابط مؤقت للملف
      setImageSrc(objectUrl)
    }
  }

  return (
    <div className='write'>

      <form className='writeForm'>
        {ImageSrc && <img className='writeImg' src={ImageSrc} alt='uploaded'/>}
        
        <div className='writeInputs'>
          <label className='add' htmlFor="fileInput">+</label>

          <input onChange={handleFileChange} accept='image/*' type="file" id="fileInput" style={{display: 'none'}} />

          <input className='writeTitleInp' type="text" placeholder='Title' autoFocus={true}/>
        </div>

        <textarea className='writeDescInp' placeholder='Tell your story...'></textarea>

        <button className='writeBtn'>Publish</button>
      </form>
    </div>
  )
}

