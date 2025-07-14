import Header from "@layout/Header/Header"
import Todo from "@layout/Todo/Todo"
import Main from "@layout/Main/Main"
import Aside from "@layout/Aside/Aside"

function App() {
  return (
    <>
      <Header />
      <Main>
        <Todo />
        <Aside />
      </Main>
    </>
  )
}

export default App
