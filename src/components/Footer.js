import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import SvgIcon from '@material-ui/core/SvgIcon';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typist from 'react-typist';
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      padding: '0',
    }
  },
  typo: {
    paddingTop: theme.spacing(2),
  },
  typoFont: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  typoBold: {
    backgroundColor: "#bbdefb",
  }
}));

const KakaoIcon = <SvgIcon fontSize="large"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 191.94"><g><polygo points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49" /><path d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z" /></g></svg></SvgIcon>

export default function Home(props) {
  const classes = useStyles();
  const [linkValue, setLinkValue] = useState('');
  const [contactValue, setContactValue] = useState('');

  const handleLinkChange = (event) => {
    setLinkValue(event.target.innerText);
  };
  const handleContactChange = (event) => {
    setContactValue(event.target.innerText);
  };
  return (
    <div>
      <Typography variant="h5"> {"<Footer />"} </Typography>
      <Box flex={1} className={classes.main} maxWidth={600} >

        {/* <Fireworks /> */}
        {props.start && <Typist style={{ display: 'block' }} className={classes.typoFont} avgTypingDelay={50}>
          <Typist.Delay ms={1000} />
          "하루하루 성장하는 재미를 가지고 있는 개발자!"
        </Typist>}

        <Typography variant="body1">
          <div className={classes.typo}>안녕하세요! 백엔드 개발자 공지혁입니다.</div>
          <div className={classes.typo}>대학교 생활동안 다양한 활동을 하고 공부하면서 백엔드 개발자라는 길을 걷게 되었습니다.</div>
          <div className={classes.typo}>개발을 하면서 언제나 좀 더 효율적이고 새로운 방법을 고민하고 도전합니다. </div>
          <div className={classes.typo}>하루하루 열심히 도전하고 실패를 거듭하면서 <b className={classes.typoBold}>어제보다 더 나은 제 자신이 되고자 합니다.</b> </div>
        </Typography>
      </Box>
      <Typography variant="h5" style={{ marginTop: '30px' }} > {"<Link />"} </Typography>

      <Box onMouseLeave={() => setLinkValue("")} textAlign="center" maxWidth={600} >
        <BottomNavigation value={linkValue}>
          <BottomNavigationAction target="_blank" href="https://github.com/Kongji82" onMouseEnter={handleLinkChange} label="Github" value="Github" icon={<GitHubIcon fontSize="large" />} />
          <BottomNavigationAction target="_blank" href="https://kongji82.github.io/" onMouseEnter={handleLinkChange} label="Blog" value="Blog" icon={<HomeIcon fontSize="large" />} />
        </BottomNavigation>
      </Box>
      <Typography variant="h5"> {"<Contact />"} </Typography>
      <Box onMouseLeave={() => setContactValue("")} textAlign="center" maxWidth={600} >
        <BottomNavigation value={contactValue}>
          {/*<BottomNavigationAction target="_blank" href="https://open.kakao.com/o/sdBmKM8c" onMouseEnter={handleContactChange} label="Kakaotalk" value="Kakaotalk" icon={KakaoIcon} />*/}
          <BottomNavigationAction href="mailto:kongji4092@gmail.com" target="_blank" onMouseEnter={handleContactChange} label="Email" value="Email" icon={<EmailIcon fontSize="large" />} />
        </BottomNavigation>
      </Box>
    </div>
  )
}
