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
        createdDate:"9th September, 2024"
      },
      {
        projectName:"SparkCard",
        imgUrl:SparkImg,
        type:"Personal Project",
        explain:"This is my first project that I used NextJS. This was a good training to think about how to create reusable components. This is from school project, so it doesn't have button action except email sending part.",
        url:"https://",
        githubUrl:"",
        skillImg:[GSAP_Logo],
        createdDate:"9th Febrary, 2025"
      },
      {
        projectName:"MovieSuggestingApp",
        imgUrl:MovieImg,
        type:"Personal Project",
        explain:"This is my first school project that using typescript. This app can search the movie information from the API. Let's check your favorite movie!",
        url:"https://sho8000.github.io/movie-suggestion-app/",
        githubUrl:"https://github.com/Sho8000/movie-suggestion-app",
        skillImg:[GSAP_Logo,JQuery_Logo],
        createdDate:"25th October, 2024"
      },
      {
        projectName:"Pokemon Valorant Charactor",
        imgUrl:PokemonImg,
        type:"Personal Project",
        explain:"I created this website to understand fetching and gsap collaboration. When I fetch some data from API, I was not sure how to decide the target class. But through this project, I could understand how those work.",
        url:"https://sho8000.github.io/Pokemon-Valorant/",
        githubUrl:"",
        skillImg:[GSAP_Logo,JQuery_Logo],
        createdDate:"9th September, 2024"
      },
    ],
    workExperience:[
      {
        companyName:"Norsat Intarnational",
        companyImg:NorsatImg,
        contents:"I work here as a Production Engineer. I have knowledge of electric schematic, so I not only test the products, but also troubleshoot if there are issues with the product.",
      },
      {
        companyName:"HORIBA STEC",
        companyImg:HoribaImg,
        contents:"I worked here for 13 years. I had experiences of production, customer service, trainer, efficient engineer and team management. I was an experte of suggesting solutions for our products and producting process, so I was providing trouble shooting and efficiency to the other emproyees and our customer as an efficient Engineer.",
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
