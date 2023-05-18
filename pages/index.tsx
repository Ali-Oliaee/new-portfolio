import {BottomRightGradient, Container, Glass, TopLeftGradient} from '@styles/index'

const HomePage: React.FC = ()  =>{
  return (
   <Container>
    <TopLeftGradient/>
    <Glass>
      <div className="header"></div>
      <div className="content">
        <div className="image"></div>
        <div className="info-container">
          <div className="title"></div>
          <div className="description"></div>
        </div>
      </div>
        </Glass>
        <BottomRightGradient/>
    </Container>
  )
}

export default  HomePage