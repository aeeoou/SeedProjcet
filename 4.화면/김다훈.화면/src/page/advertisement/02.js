import UserLayout from '../UserLayout'
import MyBackButton from '../navigation/02'

{/* ADVERTISEMENT.02 광고조회 */}
const SelectAdvertisement = ({children}) => {
    return (
        <>
            <UserLayout>
                <MyBackButton pageName={'광고조회'}/>
                    <div>
                        <main>
                            {children}
                            <br/>
                            <div className='my-5 text-start'>
                                <div className='fw-bold fs-4'>
                                    삼원가든 충무로점
                                </div>
                                <div>
                                    2024-07-19 23:59:59
                                </div>
                            </div>
                            <hr/>
                            
                            <div className='border w-72 h-96 mb-4 p-4 advertisementImg d-flex align-items-center justify-content-center'>
                                식당이미지
                            </div>
                            <div className='border h-96 mb-4 p-4 text-start'>
                                50여 년 전통의 우리나라 대표 갈빗집. 대표 메뉴인 양념 갈비와 함께 나오는 반찬도 정갈하며 갈비 외에
                                등심이나 불고기, 단품 요리도 수준급이다. 예약제로 운영되는 특실에서는 다양한 한정식과, 한우 모둠 구
                                이가 나오는 차별화된 코스로 진행된다. 특실 예약은 02-548-3037로 문의하면 된다.<br/>
                            </div>
                            <hr/>                        
                            <div className='p-1 mb-4'>
                                이 게시물은 (주)맛있당에 관리 권한이 있음.
                            </div>
                        </main>
                    </div>
            </UserLayout>
        </>
    )
}

export default SelectAdvertisement