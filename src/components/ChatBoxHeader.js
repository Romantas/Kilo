import React from 'react';

//Redux
import { useSelector } from 'react-redux';
import { getChatName } from '../services/chat/selectors';

//Material ui
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Components
import NewChatForm from '../containers/NewChatForm';

const useStyles = makeStyles((theme) => ({
  header: {
    background: 'rgba(97,97,97, 0.2)',
    ...theme.mixins.appBar,
  },
  title: {
    marginLeft: theme.spacing(4),
    color: '#616161',
  },
  image: {
    borderRadius: '50%',
  },
}));

const headerComponents = (classes, currentChat, chats, newChat) => {
  if (newChat) {
    return <NewChatForm />;
  } else if (chats > 0) {
    return (
      <>
        <img
          className={classes.image}
          width="38"
          height="38"
          src={`https://avatars.dicebear.com/api/avataaars/${currentChat}.svg`}
          alt="avatar"
        />
        <Typography variant={'h5'} className={classes.title}>
          {currentChat}
        </Typography>
      </>
    );
  } else {
    return;
  }
};

export default function ChatBoxHeader() {
  //redux selectors
  const chats = useSelector((state) => state.chatsStore.chats);
  const currentChat = getChatName(useSelector((state) => state));
  const newChat = useSelector((state) => state.chatsStore.createNewChat);

  //styles
  const classes = useStyles();
  return (
    <>
      <div position="static" className={classes.header}>
        <Toolbar>
          {headerComponents(classes, currentChat, chats.length, newChat)}
        </Toolbar>
      </div>
    </>
  );
}
