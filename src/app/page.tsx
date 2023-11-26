import store from './redux/store'
import { bugAdded, bugRemoved, bugResolved} from './action'

export default function Home() {

 const unsubscribe =  store.subscribe(()=> {
    console.log("store changed!",store.getState());
    
  })

  store.dispatch(bugAdded("Bug 1"))

  store.dispatch(bugResolved(1));

  unsubscribe();

  console.log(store.getState());   

  return (
    <div>Hello</div>
  )
}
