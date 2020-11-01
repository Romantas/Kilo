import React, { useEffect, useRef } from 'react';

//Redux
import { useSelector } from 'react-redux';
import { getMessages } from '../services/chat/selectors';

//Material ui
import { makeStyles } from '@material-ui/core/styles';

//Components
import Message from '../components/Message';

const useStyles = makeStyles((theme) => ({
  messageContainer: {
    height: 'calc(100vh - 120px)',
    width: '100%',
    overflowY: 'auto',
    paddingTop: theme.spacing(2),
  },
}));

export default function MessageBox() {
  //redux selectors
  const messages = getMessages(useSelector((state) => state));
  const user = useSelector((state) => state.user);

  //reference
  const messagesEndRef = useRef(null);

  //side effect
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  //styles
  const classes = useStyles();
  return (
    <div className={classes.messageContainer}>
      {messages.map((message, index) => (
        <div key={`${index}_${message.user}`}>
          <Message currentUser={user.email} user={message.user}>
            {message.message}
          </Message>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
