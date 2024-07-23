import MyBackButton from '../navigation/02'
import UserLayout from '../UserLayout'
import UserCheckModal from './UserCheckModal'

/* USER.06 회원 비밀번호 재설정 */
const UserPwUpdate = ({children}) => {
    return (
        <UserLayout>
            <MyBackButton pageName={'회원 수정'}/>
            <div>
                <main>
                    {children}
                    <form className='mt-4 d-flex flex-column align-items-center'>
                        <div className="mb-3">
                            <p className='fw-bold'>비밀번호</p> 
                            <input type="password" class="form-control" id="pWUpdate" placeholder='4~12자리의 영문,숫자'></input>
                            <br/>
                            <p className='fw-bold'>비밀번호 확인</p> 
                            <input type="password" class="form-control" id="pWUpdate" placeholder='4~12자리의 영문,숫자'></input>
                        </div>
                        <UserCheckModal btnName={'비밀번호 변경'} btnWidth={'w-75 mt-3'} completeBtn={'/userLogin'} modalBody={'비밀번호 변경이 완료되었습니다.'}/>
                    </form>
                </main>
            </div>
        </UserLayout>
    )
}

export default UserPwUpdate