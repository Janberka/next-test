export default ({children, title, description}) => {
  return (
    <div className='hero'>
      <h1 className='title'>{title}</h1>
      <p className='description'>
        {description}
      </p>
      {children}
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  )
};
