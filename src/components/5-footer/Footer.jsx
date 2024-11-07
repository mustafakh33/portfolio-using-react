import "./footer.css"
const Footer = () => {
  return (
    <div className="container">
      <footer className="flex">
        <ul className="flex">
          <li><a href="">about</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">speaking</a></li>
          <li><a href="">uses</a></li>
        </ul>
        <p>@ 2023 spencer sharp. all rights reserved</p>
      </footer>
    </div>
  )
}

export default Footer