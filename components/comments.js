import {
  useState, useEffect
} from 'react'
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Comment = ({className, email, body}) => {
  return (
    <div className={className}>
      <div className="email">{email}</div>
      {body}
    </div>
  ); 
};

const StyledComment = styled(Comment)`
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: .9em;
  margin: 10px auto 10px 0;
  padding: 10px;
  .email {
    font-weight: bold;
  }
`;

const Comments = (props) => {
  const { postId } = props;  
  const [ comments, setComments ] = useState(false);

  useEffect(() => {
    if (!comments) {
      const loadComments = async() => {
        const loadedComments = await fetch(`http://localhost:3000/api/posts/${postId}/comments`).then(r=>r.json());

        setComments(loadedComments);
      }

      loadComments();
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ enter: { transition: { staggerChildren: 0.1 } } }}
      >
      {comments && comments.map(comment=> <StyledComment {...comment}/>)}
    </motion.div>
  );
}

export default Comments;