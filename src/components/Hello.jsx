import { useContext } from 'react'
import '../styles/Hello.css'
import { PreferenceContext } from '../PreferenceContext'

export default () => {
   const prefs = useContext(PreferenceContext)
   console.log(prefs, 'prefshello')
   return  <h1 class="funky">Hello World</h1>
}