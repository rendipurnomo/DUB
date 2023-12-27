

const Helmet = ({title, children}) => {
  document.title = "Digital UMKM - " + title;
  return (
    <main>{children}</main>
  )
}

export default Helmet