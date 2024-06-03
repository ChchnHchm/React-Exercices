import  React  from 'react'
import GitUser from './GitUser'

const API_URL = "https://api.github.com";

class SearchUser extends React.Component<{},{UsersList:any}> {
    constructor(props:any){
        super(props)
        this.HandleSearch = this.HandleSearch.bind(this)
        this.state = {
            UsersList: []
        }
    }

    async ApiCall(query:string) {
        try {
            await fetch(`${API_URL}/search/users?q=${query}`).then(response => response.json()).then(async (data) => {
                // total_count: 1164221, incomplete_results: false, items: (30) 
                await this.setState({UsersList:data.items.map((user:any)=> { return <GitUser  key={user.login} avatar={user.avatar_url} url={user.html_url} username={user.login}/>})})
            })
        } catch (error:any) {
            throw new Error(error);
        }
    }

     HandleSearch(event:any){
        event.preventDefault();
        const input = event.currentTarget[0]
         this.ApiCall(input.value)
    }

    render(): React.ReactNode {
        return (
            <>
                <form className='search-form' onSubmit={this.HandleSearch}   >
                    <input type="text" name="Search" placeholder="Enter username or email" required/>
                    <button>Search</button>
                </form>
                <h3>Results</h3>
                {this.state.UsersList}
            </>
          )
    }

}

export default SearchUser
