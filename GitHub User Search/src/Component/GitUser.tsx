import  React  from 'react'
interface UserInfo {
    avatar:string 
    url:string
    username:string
}
class GitUser extends React.Component<UserInfo,{}> {
    constructor(props:any){
        super(props) 
    }

    render(): React.ReactNode {
        return (
            <>
                <div className='User'>
                    <img src={this.props.avatar} alt="Profile Picture" width={50} height={50}></img>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        {this.props.username}
                    </a>
                </div>
            </>
          )
    }

}

export default GitUser
