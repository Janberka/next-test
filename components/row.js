export default ({children}) => {
  return (
    <div className="row">
      {children}
      <style jsx>{`
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}