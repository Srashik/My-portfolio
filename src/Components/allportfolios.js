import lineP from '../Img/lineP.jpeg';
import BCP from '../Img/BCP.png';
import cryptotk from '../Img/cryptotk.png';
import placeholder from '../Img/placeholder.jpeg';
import placeholder2 from '../Img/placeholder2.jpeg';
import placeholder3 from '../Img/placeholder3.jpeg';
import tictactoe from '../Img/tictactoe.jpeg';
import sudoku from '../Img/sudoku.jpeg';
import G from '../Img/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png';


const portfolios = [
    {
        id: 1,
        category:'ReactJS',
        link1: 'https://github.com/Srashik/My-portfolio.git',
        link2: 'shehrebanurashik.com',
        icon1: G ,
       // icon2: ,
        image: placeholder,
        title: 'Personal Website',
        description: 'A personal website created with ReactJS and SCSS hosted on an AWS S3 bucket. The purpose of this website is to display skills, and accomplishments in a visual and descriptive manner.',
    },
    {
        id: 2,
        category: 'ReactJS',
        link1:'https://github.com/Srashik/cryptoproducts.tk.git' ,
        link2:'cryptoproducts.tk' ,
        icon1: 'G',
        //icon2: ,
        image: cryptotk,
        title: 'cryptoproducts.tk',
        description: 'This online marketplace is a platform where users can find the latest crypto hardware products. They can also receive timely news updates and latest product release alerts. This website is hosted on AWS and it features custom login using Amazon Cognito, DynamoDB, CloudFront, and Route53.',
    },{
        id: 1,
        category: 'AWS-CloudComputing',
        link1:'BestCryptoProducts.com' ,
        link2: 'https://github.com/Srashik/BestBitcoinProducts.git',
        icon1:'G' ,
       // icon2:'G',
        image: BCP ,
        title:'BestCryptoProducts.com' ,
        description: 'BCP is an online marketplace for crypto hardware products. This website is hosted on AWS using AWS Amplify and features custom login and user security along with a SSL certified domain registered with Route53.',
    },
    {
        id: 1,
        category: 'ARM Processor',
        link1: 'https://github.com/USF-CS315-F21/project04-Srashik.git',
        link2: '',
        icon1: 'G',
       // icon2: ,
        image:placeholder2,
        title: 'Arm Emulator' ,
        description: '',
    },
    {
        id: 1,
        category: 'Search Engine',
        link1: 'https://github.com/usf-cs212-spring2021/project-Srashik.git',
        link2:'' ,
        icon1: 'G',
       // icon2: ,
        image: placeholder3,
        title:'Web-based Search Engine' ,
        description: '',
    },
    {
        id: 1,
        category: 'NFT Collection',
        link1: 'https://github.com/Srashik/GenerateNFT.git',
        link2:'https://opensea.io/assets/nine-lines-crazy-vibes?search[query]=nine%20lines',
        icon1: 'G',
       // icon2: ,
        image: lineP,
        title: 'Nine Lines Project' ,
        description: '',
    },
    {
        id: 1,
        category: 'Xcode',
        link1: 'https://github.com/Srashik/AffordFinance.git',
        link2: '' ,
        icon1:'G' ,
       // icon2: ,
        image: placeholder,
        title: 'Afford',
        description: '',
    },
    {
        id: 1,
        category: 'Data Structures and Algorithm' ,
        link1: 'https://github.com/Srashik/Data-Structures-and-Algorithms.git',
        link2:'' ,
        icon1: 'G',
        //icon2: ,
        image: placeholder2,
        title: 'Data Structures and Algorithm Implementation',
        description: '',
    },
    {
        id: 1,
        category: 'Data Structures and Algorithm' ,
        link1: 'https://github.com/2020-cs112-USF-01/project2-tictactoe-Srashik.git',
        link2: '',
        icon1:'G' ,
       // icon2: ,
        image: tictactoe,
        title: 'Tic-Tac-Toe',
        description: '',
    },
    {
        id: 1,
        category: 'Data Structures and Algorithm' ,
        link1: 'https://github.com/Srashik/Data-Structures-and-Algorithms.git',
        link2: '',
        icon1: 'G',
       // icon2: ,
        image: sudoku,
        title: 'Sudoku',
        description: '',
    }
    
]

export default portfolios;
