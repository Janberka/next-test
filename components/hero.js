import styled from 'styled-components';

const HeroStyled = styled.div`
  color: #333;
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
`;

const Hero = ({children, title, description}) => {
  return (
    <HeroStyled>
      <h1 className='title'>{title}</h1>
      <p className='description'>
        {description}
      </p>
      {children}
    </HeroStyled>
  )
};

export default Hero;
