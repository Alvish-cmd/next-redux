import Image from 'next/image'

import store from './redux/store'


export default function Home() {
  console.log(store.getState());

  return (
    <div>Hello</div>
  )
}
