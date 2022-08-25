import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function LeftContent({ content,languages, changeLanguage }) {
    return (<div className='left-content'>
        <ul className='left-list'>
       
            <li>
                <p>
                    <FontAwesomeIcon icon="fa-solid fa-headset" />
                    {content}
                </p>

            </li>
            {/* <li>
                <p>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    {" thanhtm78@akagames.io"}
                </p>
            </li> */}
            <li>
                <div onChange={(e) => { changeLanguage(e.target.value); }} className="language-selector">
                    <select name="language" className="language">
                        {languages.map(({ code, name, country_code }) => {
                            return(
                                        <option key={code} value={code}>
                                            <p>{name}</p>
                                         <span className={`fi fi-gr ${country_code}`}>
                                         </span>
                                         </option>
                            )
                        })}
                    </select>
                </div>
            </li>
        </ul>
    </div>);
}

export default LeftContent;