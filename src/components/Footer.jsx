const Footer = () => {
    return(
        <footer className="page-footer  light-green accent-4">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" 
          href="https://github.com/AndySimonY/movies-search.git"
          target='_blank'
          rel='noreferrer'
          >Repo</a>
          </div>
        </div>
      </footer>
    )
}
export default Footer