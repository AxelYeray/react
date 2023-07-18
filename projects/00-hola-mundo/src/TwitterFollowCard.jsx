export function TwitterFollowCard ({ children, userName,  isFollowing }) {
  return (
      <article className="tw-followCard">
          <header className="tw-followCard-header">
              <img 
              className="tw-followCard-avatar"
              alt="aqui debe ir una foto" 
              src={`https://unavatar.io/${userName}`} />
           <div className="tw-followCard-info">
            {children} 
            <span className="tw-followCard-infoUsername">
           @{userName}
            </span>
           </div>
          </header>
        
          <aside>
            <button className="tw-followCard-button">
            Seguir  {/*<== children*/ }
            </button>  
          </aside>
      </article>
  )
}