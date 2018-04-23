import React, {Component} from "react";
import BookList from './BookList';

class Home extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.state = {
			working: false,
		}
	}

	onClick() {
		this.setState({
			working: true,
		});
	}

	render() {
		return (
			<div>
			    <h1>Book App</h1>
			    <h2>Some instructions blah blah blah</h2>
			    <h2>Choose a list to look at:</h2>

			    <div id="form">
					<form action="">
						<div>
							<input type="radio" id="paperback" name="list" value="paperback" />
							<label for="paperback">Paperback fiction</label>
						</div>
						
						<div>	
							<input type="radio" id="hardback" name="list" value="hardback"  />
							<label>Hardback fiction</label>
						</div>
						
						<div>	
							<input type="radio" id="non-fiction" name="list" value="non-fiction" />
							<label>Paperback non-fiction</label> 
						</div>
						<input type="submit" value="Submit" onClick={ this.onClick } working={ this.state.value } />
						{ this.state.working ? <BookList working={this.state.working} /> : null }

					</form>
				</div>
			</div>	
		);
	}

}

// export our component
export default Home;