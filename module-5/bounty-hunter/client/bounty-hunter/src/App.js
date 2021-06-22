import { GlobalStyle } from "./components/StyledComponents"
import Header from "./components/Header"
import Main from "./components/Main"
import Bounties from "./components/Bounties"
import AddBounty from "./components/AddBounty"

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<Main>
				<AddBounty />
				<Bounties />
			</Main>
		</div>
	)
}

export default App
