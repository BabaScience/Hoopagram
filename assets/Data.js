
const courts =  [
    {
        id: '1',
        name: 'San Andreas',
        photo :  require('./Images/court1.jpg')
    },
    {
        id: '2',
        name: 'Beach Ball',
        photo : require('./Images/court2.jpg')
    },
    {
        id: '3',
        name: 'Maristes 1',
        photo : require('./Images/court3.jpg')
    },
    {
        id: '4',
        name: 'Poetto',
        photo : require('./Images/court4.jpg')
    },
    {
        id: '5',
        name: 'San Andreas',
        photo :  require('./Images/court1.jpg')
    },
    {
        id: '6',
        name: 'Tennis Table',
        photo : require('./Images/court2.jpg')
    },
    {
        id: '7',
        name: 'Booling One',
        photo : require('./Images/court3.jpg')
    },
    {
        id: '8',
        name: 'Arizona',
        photo : require('./Images/court4.jpg')
    }
]

const posts = [
    {
        id: '1',
        post: require('./Images/court1.jpg'),
        type: 0,
        views: '12.9k'
    },
    {
        id: '2',
        post: require('./Images/court3.jpg'),
        type: 0,
        views: '124.9k'
    },
    {
        id: '3',
        post: require('./Images/court2.jpg'),
        type: 0,
        views: '1.9k'
    },
    {
        id: '4',
        post: require('./Images/court1.jpg'),
        type: 0,
        views: '120.9k'
    },
    {
        id: '5',
        post: require('./Images/court4.jpg'),
        type: 0,
        views: '100k'
    },
    {
        id: '6',
        post: require('./Images/court1.jpg'),
        type: 0,
        views: '12.9k'
    },
    {
        id: '7',
        post: require('./Images/court3.jpg'),
        type: 0,
        views: '124.9k'
    },
    {
        id: '8',
        post: require('./Images/court2.jpg'),
        type: 0,
        views: '1.9k'
    },
    {
        id: '9',
        post: require('./Images/court3.jpg'),
        type: 1,
        views: '120.9k'
    },
]

const players = [
    {
        id : '1',
        name: 'SmartMind',
        image: require('./Images/basketball.png')
    },
    {
        id : '2',
        name: 'Malick',
        image: require('./Images/basketball.png')
    },
    {
        id : '3',
        name: 'OpenAI',
        image: require('./Images/soccer.png')
    },
    {
        id : '4',
        name: 'Mark',
        image: require('./Images/basketball.png')
    },
    {
        id : '5',
        name: 'Elon',
        image: require('./Images/soccer.png')
    },
    {
        id : '6',
        name: 'Billy',
        image: require('./Images/basketball.png')
    },
    {
        id : '7',
        name: 'Elon',
        image: require('./Images/basketball.png')
    },
    {
        id : '8',
        name: 'Billy',
        image: require('./Images/basketball.png')
    },
    {
        id : '9',
        name: 'Nordine',
        image: require('./Images/basketball.png')
    },
    {
        id : '11',
        name: 'Jul',
        image: require('./Images/basketball.png')
    },
    {
        id : '12',
        name: 'Oussama',
        image: require('./Images/basketball.png')
    },

]

const teams = [
    {
        id: '1',
        name: 'Dream Team',
        image: require('./Images/dream-team.jpeg')
    },
    {
        id: '2',
        name: 'Barca',
        image: require('./Images/barca-team.jpeg')
    },
    {
        id: '3',
        name: 'Lakers',
        image: require('./Images/lakers-team.jpg')
    },
    {
        id: '4',
        name: 'React Native',
        image: require('./Images/court4.jpg')
    },
    {
        id: '5',
        name: 'BabaScience',
        image: require('./Images/court1.jpg')
    },
    {
        id: '6',
        name: 'Milan',
        image: require('./Images/milan-team.jpg')
    },
]

const sports = [
    {
        id: '1',
        name: 'basketball',
        icon: require('./Images/Sports/basketball-ball.png')
    },
    {
        id: '2',
        name: 'gym',
        icon: require('./Images/Sports/gym.png')
    },
    {
        id: '3',
        name: 'bicycle',
        icon: require('./Images/Sports/bicycle.png')
    },
    {
        id: '4',
        name: 'Soccer',
        icon: require('./Images/Sports/soccer.png')
    },
    {
        id: '5',
        name: 'martial-arts',
        icon: require('./Images/Sports/martial-arts.png')
    },
    {
        id: '6',
        name: 'rugby',
        icon: require('./Images/Sports/rugby.png')
    },
    {
        id: '7',
        name: 'jogging',
        icon: require('./Images/Sports/jogging.png')
    },
    {
        id: '8',
        name: 'tennis',
        icon: require('./Images/Sports/tennis.png')
    },
    {
        id: '9',
        name: 'yoga',
        icon: require('./Images/Sports/yoga.png')
    },
    {
        id: '10',
        name: 'golf',
        icon: require('./Images/Sports/golf.png')
    },
    {
        id: '11',
        name: 'strategy',
        icon: require('./Images/Sports/strategy.png')
    },
    {
        id: '12',
        name: 'bowling',
        icon: require('./Images/Sports/bowling.png')
    },
    {
        id: '13',
        name: 'dance',
        icon: require('./Images/Sports/dance.png')
    },
    {
        id: '14',
        name: 'others',
        icon: require('./Images/Sports/controller.png')
    },
]

const lives = [
    {
        ...courts[0],
        viewers: '2.4k'
    },
    {
        ...courts[1],
        viewers: '2.4k'
    },
    {
        ...courts[2],
        viewers: '250'
    },
    {
        ...courts[3],
        viewers: '2.4k'
    },
    {
        ...courts[4],
        viewers: '1k'
    },
    {
        ...courts[5],
        viewers: '2.4k'
    },
    {
        ...courts[6],
        viewers: '29.4k'
    },
    {
        ...courts[7],
        viewers: '2.4k'
    },

]
export {
    courts,
    posts,
    players,
    teams,
    sports,
    lives
}