import MyBackButton from '../navigation/02'
import UserLayout from '../UserLayout'
import UserCheckModal from './UserCheckModal'
import {useCallback, useState} from "react";
import {Button, Row} from "react-bootstrap";
import {fixUserPw} from "../../api/userApi";
import {useParams} from 'react-router-dom';

/* USER.06 회원 비밀번호 재설정 */
const UserPwUpdate = ({children}) => {
    const [passwordFix, setPasswordFix] = useState({
        userId: '',
        userPw: ''
    })

    const onChange = e => {
        passwordFix[e.target.name] = e.target.value
        setPasswordFix({...passwordFix})
    }

    const {userId} = useParams();
    passwordFix.userId = userId

    const onClickSave = () => {
        fixUserPw(passwordFix).then((response) => {
            alert("비밀번호가 변경되었습니다.")
        }).catch((error) => {
            console.log(error);
        });
    }

    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const onChangePassword = useCallback(e => {
        const passwordRegex = /^[a-zA-z0-9ㄱ-ㅎ가-힣]{4,12}$/ // 영문, 숫자, 한글 조합 4~12자 이내
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)

        if(!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('영문,숫자,한글 조합의 4~12자리로 입력해주세요.')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호에요 :)')
            setIsPassword(true)
        }
    }, [])

    // 비밀번호 확인
    const onChangePasswordConfirm = useCallback(e => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 :)')
            setIsPasswordConfirm(true)
        } else {
            setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요')
            setIsPasswordConfirm(false)
        }
    }, [password])

    return (
        <UserLayout>
            <MyBackButton pageName={'회원 수정'}/>
            <div>
                <main>
                    {children}
                    <form className='mt-5 d-flex flex-column align-items-center'>
                        <div className="mb-3 w-75">
                            <p className='fw-bold'>비밀번호</p> 
                            <input type="password" className="form-control" id="pWUpdate1" placeholder='4~12자리의 영문,숫자' name={"userPw"} onChange={(event) => {
                                onChangePassword(event); onChange(event)}
                            }></input>
                            <Row className={'mt-3'}>{
                                <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}</Row>
                            <br/>
                            <p className='fw-bold'>비밀번호 확인</p> 
                            <input type="password" className="form-control" id="pWUpdate2" placeholder='4~12자리의 영문,숫자' name={"userPwConfirm"} onChange={(event) => {
                                onChangePasswordConfirm(event);}}></input>
                            <Row className={'mt-3'}>{
                                <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>}</Row>
                            <br/>
                        </div>
                        <Button variant={'warning'} className={'w-75 mt-3'}  disabled={!(isPassword && isPasswordConfirm)}
                            onClick={onClickSave}>비밀번호 변경</Button>
                        {/*href={'/userLogin'}*/}
                    </form>
                </main>
            </div>
        </UserLayout>
    )
}

export default UserPwUpdate