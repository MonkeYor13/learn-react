//pasamos lo parametros qwue vamso a necesitar
export function TwitterFollowCard ({userName, name, isFollowing}) {
  const imageSrc = `"https://th.bing.com/th/id/OIP.HJL4fbV9F53uRNZLPcRLHAHaFt?rs=1&pid=ImgDetMain${userName}`
  
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src= {imageSrc}
          alt=" Imagen-BatAvatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}