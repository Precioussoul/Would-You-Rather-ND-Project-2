// data was collected randomly from online sources for testing purpose, just incase you found it related

export const QuestionPolls = {
  unanswered: [
    {
      qid: 2,
      author: "Jack grealish",
      avatar: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
      question: "visit me a playing ground",
    },
    {
      qid: 1,
      author: "John doe",
      avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
      question: "let do pair programming",
    },
    {
      qid: 5,
      author: "Desire lingard",
      avatar: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg",

      question: "please go ahead , am with you",
    },
  ],
  answered: [
    {
      qid: 4,
      author: "Christiano",
      avatar: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",

      question: "Teach me how to code",
    },
    {
      qid: 3,
      author: "Matt Rivera",
      avatar: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",

      question: "Run your own dev company",
    },
    {
      qid: 6,
      author: "Justen Kutriene",
      avatar: "https://react.semantic-ui.com/images/avatar/small/justen.jpg",

      question: "do i own you Money",
    },
  ],
};
// data was collected randomly from online sources for testing purpose, just incase you found it related

export const questionData = {
  qid: 2,
  author: "Sofiyullah Adullah",
  avatar: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
  optionOne: {
    votes: ["abdullah", "aminat"],
    text: "fall in love with football",
  },
  optionTwo: {
    votes: ["brittinibryant"],
    text: "Play with girls.",
  },
};

export const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
    },
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
    },
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/stevie.jpg",
    },
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
    },
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
    },
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/justen.jpg",
    },
  },
];
// data was collected randomly from online sources for testing purpose, just incase you found it related

export const leaderboardData = [
  {
    id: "Justen Kitsune",
    name: "Justen Kitsune",
    avatar: "https://react.semantic-ui.com/images/avatar/small/justen.jpg",

    answerCount: 7,
    questionCount: 3,
  },
  {
    id: "Christian",
    name: "Christian",
    avatar: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
    answerCount: 6,
    questionCount: 3,
  },
  {
    id: "JennyHess",
    name: "Jenny Hess",
    avatar: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
    answerCount: 4,
    questionCount: 4,
  },
];

// data drafted from data provided in util/data.js

export const users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    // avatarURL: ,
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    // avatarURL: ,
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    // avatarURL: ,
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};
