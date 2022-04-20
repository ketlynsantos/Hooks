import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <div className="container-title">    
                <span className="title-logo">React Rooks</span>
            </div>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/useState">useState()</Link></li>
                <li><Link to="/useEffect">useEffect()</Link></li>
                <li><Link to="/useRef">useRef()</Link></li>
                <li><Link to="/useMemo">useMemo()</Link></li>
                <li><Link to="/useCallback">useCallback()</Link></li>
                <li><Link to="/useContext">useContext()</Link></li>
                <li><Link to="/useReducer">useReducer()</Link></li>
                <li><Link to="/useCustom">useMyHook()</Link></li>
            </ul>
        </nav>
    </aside>
)

export default Menu