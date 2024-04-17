// import Nav from "./Nav"
import { Dispatch, SetStateAction } from "react"

type HeaderProps = {
    reload: Dispatch<SetStateAction<number>>
}

const Header: React.FC<HeaderProps> = ({reload}) => {
    return <header>
        {/* <h1>Testing grounds</h1> */}
        <button id='rand-btn' onClick={() => reload(pre => pre +1)}>Regenerate</button>
    </header>
}

export default Header