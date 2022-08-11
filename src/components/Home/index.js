import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-area">
          <h1>
            Hello, <br />
            I'm
            <img src={LogoTitle} alt="developer" />
            leekmaster
            <br />
            Web Developer
          </h1>
          <div> 
          <h2>FullStack Developer | ReactDeveloper | NodejsDeveloper</h2>
          </div>
        </div>
        <Link to="/contact" className="contact-button">
          CONTACT ME
        </Link>
      </div>
    </>
  )
}

export default Home
