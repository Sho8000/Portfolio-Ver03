import EmailIcon from "@/../public/Email.png"
import GithubIcon from "@/../public/github.png"
import InstagramIcon from "@/../public/instagramLogo.png"
import LinkedInIcon from "@/../public/LinkedIn.png"
import myImg from "@/../public/TeachingSqare.png"
import SparkImg from "@/../public/SparkCard.png"
import MovieImg from "@/../public/MovieSuggestingApp.png"
import PokemonImg from "@/../public/PokemonImgPC.png"
import HoribaImg from "@/../public/Horiba.png"
import NorsatImg from "@/../public/Norsat.png"
import CommingSoonImg from "@/../public/commingSoon.png"
import AKiFAiRWAY from "@/../public/AKiFAiRWAY.png"
import GSAP_Logo from "@/../public/GSAP_Logo_90_90.png"
import JQuery_Logo from "@/../public/JQuery_Logo_90_90.png"

export const MainDBEng = [
  {
    myImg:myImg,
    mainComment:`I was working as an engineer in the Semiconductor industry for 13 years in Japan. And my expertise are suggesting other employees efficiency and removing unproductive processes. \n\nI started learning web development in 2024. I can use React, NextJS, NodeJS, Postgres SQL and mongoDB. So I can work as a full stack engineer.\n\nI keep continuing to learn programming, then I want to combine those skills to provide useful web applications and great websites for my clients.\n\nPlease contact me if you have any interest in me.`,
    project:[
      {
        projectName:"AKiF AiRWAY",
        imgUrl:AKiFAiRWAY,
        type:"Client's Project",
        explain:"This is my first client's website. I created this website based on my designer's Mockup. I created this website with OOP, and I used GSAP for the animation. My client was very satisfied with this website.",
        url:"https://akifairway-englishsite.netlify.app/",
        githubUrl:"https://github.com/Sho8000/Client-s-Detox-English-Conversation-EnglishVersion",
        skillImg:[GSAP_Logo,JQuery_Logo],
      },
      {
        projectName:"SparkCard",
        imgUrl:SparkImg,
        type:"Personal Project",
        explain:"This is my school project. I created this with NextJS.",
        url:"https://",
        githubUrl:"",
        skillImg:[GSAP_Logo],
      },
      {
        projectName:"MovieSuggestingApp",
        imgUrl:MovieImg,
        type:"Personal Project",
        explain:"This is my school project. I created this webApp with NodeJS.",
        url:"https://sho8000.github.io/movie-suggestion-app/",
        githubUrl:"",
        skillImg:[GSAP_Logo],
      },
      {
        projectName:"Pokemon Valorant Charactor",
        imgUrl:PokemonImg,
        type:"Personal Project",
        explain:"thisis,,,",
        url:"https://sho8000.github.io/Pokemon-Valorant/",
        githubUrl:"",
        skillImg:[GSAP_Logo],
      },
    ],
    workExperience:[
      {
        companyName:"HORIBA STEC",
        companyImg:HoribaImg,
        contents:"",
      },
      {
        companyName:"Norsat Intarnational",
        companyImg:NorsatImg,
        contents:"",
      },
    ],
    footerInfo:[
      {
        iconName:"instagramIcon",
        img:InstagramIcon,
        url:"https://www.instagram.com/yoshi_kun_8000?igsh=MWMxOXhiaW1kdzZjdQ==",
      },
      {
        iconName:"linkedInIcon",
        img:LinkedInIcon,
        url:"https://www.linkedin.com/in/sho-yoshimura-885001261/",
      },
      {
        iconName:"githubIcon",
        img:GithubIcon,
        url:"https://github.com/Sho8000",
      },
      {
        iconName:"emailIcon",
        img:EmailIcon,
        url:"mailto:yoshikichi8000@gmail.com",
      },    
    ]
  },
]
