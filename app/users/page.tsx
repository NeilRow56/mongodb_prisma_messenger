import Container from './components/Container'
import UserMenu from './components/UserMenu'

const People = () => {
  return (
    <Container>
      <div
        className='
            mt-8 
            flex 
            flex-row 
            items-center
            justify-center
            gap-3
            md:gap-0
          '
      >
        <UserMenu />
      </div>
    </Container>
  )
}

export default People
