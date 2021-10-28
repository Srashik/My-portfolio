import lineP from '../Img/lineP.jpeg';
import BCP from '../Img/BCP.png';
import cryptotk from '../Img/cryptotk.png';
import placeholder from '../Img/placeholder.jpeg';
import placeholder2 from '../Img/placeholder2.jpeg';
import placeholder3 from '../Img/placeholder3.jpeg';
import tictactoe from '../Img/tictactoe.jpeg';
import sudoku from '../Img/sudoku.jpeg';

const portfolios = [
    {
        id: 1,
        category:'ReactJS',
        link1: 'https://github.com/Srashik/My-portfolio.git',
        link2: 'https://shehrebanurashik.com',
        icon1: 'Github',
        icon2: 'Website' ,
        image: placeholder,
        title: 'Personal Website',
        description: 'My personal website created with ReactJS and SCSS hosted on an AWS S3 bucket. The purpose of this website is to display skills, and accomplishments in a visual and descriptive manner.',
    },
    {
        id: 2,
        category: 'AWS-CloudComputing',
        link1: 'https://github.com/Srashik/BestBitcoinProducts.git',
        link2:'https://BestCryptoProducts.com' ,
        icon1:'Github' ,
        icon2:'Website',
        image: BCP ,
        title:'Best Crypto Products',
        description: 'BCP is an online marketplace for crypto hardware products. This website is hosted on AWS using AWS Amplify and features custom login and user security along with a SSL certified domain registered with Route53.',
    },
    {
        id: 3,
        category: 'ReactJS',
        link1:'https://github.com/Srashik/cryptoproducts.tk.git' ,
        link2:'https://cryptoproducts.tk' ,
        icon1: 'Github',
        icon2: 'Website',
        image: cryptotk,
        title: 'cryptoproducts.tk',
        description: 'This online marketplace is a platform where users can find the latest crypto hardware products. They can also receive timely news updates and latest product release alerts. This website is hosted on AWS and it features custom login using Amazon Cognito, DynamoDB, CloudFront, and Route53.',
    },
    {
        id: 4,
        category: 'ARM Processor',
        link1: 'https://github.com/USF-CS315-F21/project04-Srashik.git',
        link2: '',
        icon1: 'Github',
        icon2: '',
        image:placeholder2,
        title: 'Arm Emulator' ,
        description: 'A program written in C and assembly language that is able to execute ARM machine code in order to emulate the ARM register state. This emulation results in the execution of ARM assembly instructions and can also emulate a memory cache used to store instruction words read by the processor. This cache can be mapped by two different methods; Direct-Mapped Cache and 4-Way Set Associative Cache.',
    },
    {
        id: 5,
        category: 'Search Engine',
        link1: 'https://github.com/usf-cs212-spring2021/project-Srashik.git',
        link2:'' ,
        icon1: 'Github',
        icon2: '',
        image: placeholder3,
        title:'Search Engine',
        description: 'A multithreaded search engine that uses a custom inverted index data structure to store word indices and uses multithreaded partial and exact searches in order to query over a thousand search results from a seed URL.',
    },
    {
        id: 6,
        category: 'NFT Collection',
        link1: 'https://github.com/Srashik/GenerateNFT.git',
        link2:'https://opensea.io/assets/nine-lines-crazy-vibes?search[query]=nine%20lines',
        icon1: 'Github',
        icon2: 'Opensea.io' ,
        image: lineP,
        title: 'Nine Lines Project' ,
        description: 'An NFT collection sold on the Ethereum blockchain using the online marketplace platofrm Opensea.io. This collection is made using Adobe Photoshop and NodeJS to randomize the creation of several NFT editions and is then uploaded using the Macro scripting to automate the task of uploading and selling.',
    },
    {
        id: 7,
        category: 'Xcode',
        link1: 'https://github.com/Srashik/AffordFinance.git',
        link2: '' ,
        icon1:'Github' ,
        icon2:'' ,
        image: placeholder,
        title: 'Afford',
        description: 'An app that utilizes the Coinranking REST API to receive data about different crypto markets, coins, and exchanges. Afford is written in Swift using the program Xcode for IOS Mobile Development.',
    },
    {
        id: 8,
        category: 'Data Structures and Algorithm' ,
        link1: 'https://github.com/Srashik/Data-Structures-and-Algorithms.git',
        link2:'' ,
        icon1: 'Github',
        icon2: '' ,
        image: placeholder2,
        title: 'Data Structures and Algorithm Implementation',
        description: 'Various implementations of data structures and algorithms.',
    },
    {
        id: 9,
        category: 'Data Structures and Algorithm' ,
        link1: 'https://github.com/2020-cs112-USF-01/project2-tictactoe-Srashik.git',
        link2: '',
        icon1:'Github' ,
        icon2: '',
        image: tictactoe,
        title: 'Tic-Tac-Toe',
        description: '',
    },
    {
        id: 10,
        category: 'Data Structures and Algorithm' ,
        link1: 'https://github.com/Srashik/Data-Structures-and-Algorithms.git',
        link2: '',
        icon1: 'Github',
        icon2: '',
        image: sudoku,
        title: 'Sudoku',
        description: '',
    }
    
]

export default portfolios;
