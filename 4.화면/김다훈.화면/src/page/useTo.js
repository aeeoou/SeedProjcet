import {useNavigate} from "react-router-dom";

const useTo = () => {
    const navigate = useNavigate()

    const toGet = num => navigate({
        pathname: `../${num}`
    })

    return {toGet}
}

export default useTo