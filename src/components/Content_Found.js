import React from 'react'

function Content_Found(props) {
    const {userInfo}=props;
    const gitHub={...userInfo}

    return (
        <div className='Content_Page withData'>
            <div className='col-1'>
                    
                    <img src={gitHub.avatar_url} className='userPicture' />
                    
            </div>

            <div className='col-2'>
                <div className='data-row-one'>
                <div className='row-one-box-one'>
                        <h2 className='userName'>{
                            gitHub.name?`${gitHub.name}`:`${gitHub.login}`
                        }</h2>
                        <p className='twitterHandle'>{
                            gitHub.twitter_username?`@${gitHub.twitter_username}`:''
                        }</p>
                </div>
                <div className='row-one-box-two'>
                        <p className='joined'>Created on {
                            gitHub.created_at.slice(0,10)
                        }</p>
                </div>
                </div>
                <div className='data-row-two'>
                {
                    gitHub.bio?gitHub.bio:'This profile has no bio'
                }
               </div>   
                <div className='data-row-three'>
 
                    <div className='card'>
                        <h4 className='data-fetched-header'>Repos</h4>
                        <h2 className='data-fetched-result'>{gitHub.public_repos}</h2>
                    </div>
                    <div className='card'>
                    <h4 className='data-fetched-header'>Followers</h4>
                        <h2 className='data-fetched-result'>{gitHub.followers}</h2>
                    </div>
                    <div className='card'>
                    <h4 className='data-fetched-header'>following</h4>
                        <h2 className='data-fetched-result'>{gitHub.following}</h2>
                    </div>
               </div>
                <div className='data-row-four'>
                    <div className='row-four-box-two'>
                        <div className='info-box-four'>
                        <i class="fas fa-map-pin user-result-end"></i>
                        <p className='user-fetched-extra-info'>
                            {
                                gitHub.location?gitHub.location:'Location not mentioned'
                        }
                        </p>
                        </div>
                        <div className='info-box-four '>
                        <i class="fab fa-twitter user-result-end"></i>
                        <p className='user-fetched-extra-info'> {
                                gitHub.twitter_username?gitHub.twitter_username:'Twitter not linked'

                        }</p>

                        </div>
                    </div>
                    <div className='row-four-box-two'>
                    <div className='info-box-four'>
                    <i class="fas fa-link user-result-end"></i>
                    <p className='user-fetched-extra-info'> {
                                gitHub.blog?<a href={gitHub.blog} target="_blank">Click Me</a>:'Blog not linked'

                        }</p>
                    </div>
                    <div className='info-box-four'>
                    <i class="far fa-building user-result-end"></i>
                    <p className='user-fetched-extra-info'>{
                                gitHub.company?gitHub.company:'Status unknown'

                        }</p>

                    </div>
                    </div>
                </div>
            </div>

       
        </div>
    )
}

export default Content_Found
