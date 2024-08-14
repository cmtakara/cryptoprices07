import { Link } from 'react-router-dom';

// we are going to use the Link in a similar manner 
// to the way we used <a> and href in multipage applications 
//      (when we were only using html and css with no framework)
// you need to add the 'to=' attribute to tell the Link where to go
//      that needs to match one of my Routes in my Router

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
            <div>WELCOME</div>
        </Link>
        <Link to='/currencies'>
            <div>CURRENCIES</div>
        </Link>
    </div>
  )
}

export default Nav