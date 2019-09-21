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
  border-radius: 3px;

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
  hidden: { opacity: 0, scale: .9 },
  show: { opacity: 1, scale: 1 }
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
