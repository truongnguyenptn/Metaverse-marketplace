import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LeftContent() {
    return (<div className='left-content'>
        <ul className='left-list'>
            <li>
                <p>
                    <FontAwesomeIcon icon="fa-solid fa-headset" />
                {" Support"}
                </p>

            </li>
            <li>
                <p>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    {" thanhtm78@akagames.io"}
                </p>
            </li>
            <li>
                <div className="language-selector">
                    <select name="language" className="language">
                        <option value="1">English</option>
                        <option value="2">France</option>
                        <option value="3">Japan</option>
                    </select>
                </div>
            </li>
        </ul>
    </div>);
}

export default LeftContent;