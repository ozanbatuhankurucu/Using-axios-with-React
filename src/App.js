import Title from './components/Title'
import Setup from './examples/1-first-request'
import Setup2 from './examples/2-headers'
import Setup3 from './examples/3-post-request'
import Setup4 from './examples/4-global-instance'
import Setup5 from './examples/5-custom-instance'
function App() {
  return (
    <main>
      <Title />
      {/* <Setup /> */}
      {/* <Setup2 /> */}
      {/* <Setup3 /> */}
      {/* <Setup4 /> */}
      <Setup5 />
    </main>
  )
}

export default App
