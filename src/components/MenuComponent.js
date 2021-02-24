

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />



export default function MenuComponent(){
    return (
        
      <nav>
          <ul>
              <li>  
              <i
                className="fa fa-female"></i>
            </li>
            <li>  
              <i
                className="fa fa-graduation-cap"></i>
            </li>
            <li>  
              <i
                className="fa fa-trophy"></i>
            </li>
            <li>  
              <i
                className="fa fa-question"></i>
            </li>
            <li>  
              <i
                className="fa fa-history"></i>
            </li>

          </ul>
          
      </nav>
      
    )
}