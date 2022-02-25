import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({users: json}));
  }

  render(){

    const usersClone = this.state.users;
    const searchField = this.state.searchField;

		const filteredUsers = usersClone.filter(user =>
			user.name.toLowerCase().includes(searchField.toLowerCase())
		)

    return (
      <div className="App">
        <Search
				 	placeholder='Search users'
				 	handleChange= { e => this.setState({ searchField: e.target.value }) }>
				</Search>
        <CardList users={ filteredUsers }>
        </CardList>
      </div>
    );
  } 
}

export default App;
