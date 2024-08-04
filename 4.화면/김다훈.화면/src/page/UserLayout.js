import Header from './Header'
import Footer from './Footer'
import {Container} from 'react-bootstrap'

const UserLayout = ({children, userId}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header userId={userId}/>
                    <div>
                        <main>
                            {children}
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default UserLayout