import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import NotionIcon from '/notion.svg';
// import { ReactComponent as Logo } from '/notion.svg';
import Typography from '@material-ui/core/Typography';

import Cards from './Cards'
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const projects = [
  {
    name: "줍깅",
    subtitle: `플로깅을 도와주는 애플리케이션 제작.\n (K-해커톤 참가)`,
    description: `프로젝트에서 서버파트 PL(Project Leader)를 맡아,\n 서버부분 총괄하는 역할을 맡았습니다.`,
    mypart: [` springboot, JWT를 이용한 로그인 구현`,
      ` 이메일 인증 서비스 구현`,
      ` Jpa를 이용하여 DB사용`,
      ` AWS EC2, RDS를 이용하여 배포`,
    ],
    github: `To-be-young/Jubging_back`,
    stacks: ['springboot', 'mysql', 'aws'],
    // img: "jubgging.png",
    img: "https://github.com/Kongji82/basic-web-programming-blog/blob/release/public/jubgging.png?raw=true",
    link: {
      github: "https://github.com/To-be-young/Jubging_back",
      news: "https://jnuhongbo.jejunu.ac.kr/boards/hongbo_jnunews/16686619975957?page=3",
    },
    task: ["front", "design"],
  },

  {
    name: "Coanda효과를 사용한 무인 스텔스 군용 드론 연구",
    subtitle: `Coanda효과를 사용한 무인 스텔스 군용 드론 연구 및 논문 공동저자 등재\n IITP-Purdue Summer Program을 통해 진행`,
    description: `데이터 수집 및 자료조사 역할을 맡았습니다.`,
    mypart: [` 사례조사 및 레퍼런스 조사`,
      ` 실험 데이터 수집`,],
    github: ``,
    stacks: ['3D-printer', 'raspberry pi'],
    // img: "purdue.png",
    img: "https://github.com/Kongji82/basic-web-programming-blog/blob/release/public/purdue.png?raw=true",
    link: {
      homepage: "https://arxiv.org/abs/2005.14629",
    }
  },

  {
    name: "제주 QFI 어떵하지",
    subtitle: `QR코드를 이용한 제주 카페 와이파이 자동 로그인 프로젝트, 데이터를 이용하여 카페 추천 웹 개발`,
    description: `2021년 Project-Lab 수업을 통해 와이파이 로그인이 가능한 QR코드 프로그램을 제주 카페에 홍보, 그리고 모인 접속 기록을 통해 검색 카페와 비슷한 카페, 비슷하지 않는 카페를 추천해주는 웹 페이지를 개발했습니다.`,
    mypart: [` chart.js를 이용해 데이터 시각화`,
      ` Django를 이용하여 네이버 OpenAPI연동`,],
    github: `https://github.com/PLAB-ROOF-TOP/Eotteohaji`,
    stacks: [`django`, `javascript`],
    // img: "QFI.jpg",
    img: "https://github.com/Kongji82/basic-web-programming-blog/blob/release/public/QFI.jpg?raw=true",
    link: {
      github: "https://github.com/PLAB-ROOF-TOP/Eotteohaji",
    }
  },
]



const Cprojects = [
  {
    name: "Factagora",
    subtitle: `온라인으로 부조금을 송금 및 관리할 수 있는 \n웹 어플리케이션 (NH 농협 핀테크 공모전 참가)`,
    description: `프로젝트를 기획하고 웹 UI 디자인과 퍼블리싱을 진행하였습니다.
    모바일 어플리케이션으로 실행시키기 위하여 웹 어플리케이션 형태로 제작하였습니다`,
    mypart: [` vuex와 JWT 토큰으로 로그인 상태 관리 구현`,
      ` eslint, prettier 통한 코딩컨벤션의 지속적인 통합`,
      ` webpack, babel을 활용하여 es6도입 및 scss파일 번들링, 배포`,]
  },
]
const proj2 = [
  { name: "코테공부중" },
  { name: "시소보" },
  { name: "창소입" },
  { name: "소응보" },
  { name: "네보" },
  { name: "운체" },
  { name: "자구" },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
};


export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5"> {"<Project />"} </Typography>
      <Slider {...settings} >
        {projects.map((i, index) =>
          <Box className="custom-slick" key={index.toString()} >
            <Cards  {...projects[index]} />
          </Box>
        )}
      </Slider>
      {/* <Cards {...projects[1]}/> */}
      {/* 갠 프로젝트 뭐했는지 쓰자
      <Grid container>
        <Grid item xs={3}>
          <Paper>코테공부중</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>시소보</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>창소입</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>소응보</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>네보</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>운체</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>자구</Paper>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          프로젝트 기능 1. 확대 기능 2. carosel 기능 3. 링크 기능 4. 보기란
          기능 5. hits
          </Paper>
      </Grid> */}
    </div>
  );
}
