import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContent = styled(motion.a)`
  flex: 1;
  padding: 18px 18px 24px;
  margin: 10px;
  min-width: 250px;
  text-align: left;
  text-decoration: none;
  color: #434343;
  border: 1px solid #9b9b9b;

  h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }
  p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }
`;

const cardVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const Card = ({href, as, children}) => {
  return (
    <Link href={href} as={as}>
      <CardContent href={as} variants={cardVariants}>
        {children}
      </CardContent>
    </Link>
  )
}

export default Card;
