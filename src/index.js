import { Select } from '../select/select'
import './style/style.scss'

const listOptions = [
   { id: 1, text: 'text 1' },
   { id: 2, text: 'text 2' },
   { id: 3, text: 'text 3' },
   { id: 4, text: 'text 4' },
   { id: 5, text: 'text 5' },
   { id: 6, text: 'text 6' },
   { id: 7, text: 'text 7' },
   { id: 8, text: 'text 8' }
]

const select = new Select('select', {
   list: listOptions,
   placeholder: 'placeholder'
})

window.select = select