// const names = [
//   'Aaran',
//   'Aaren',
//   'Aarez',
//   'Aarman',
//   'Aaron',
//   'Aaron-James',
//   'Aarron',
//   'Aaryan',
//   'Aaryn',
//   'Aayan',
//   'Aazaan',
//   'Abaan',
//   'Abbas',
//   'Abdallah',
//   'Abdalroof',
//   'Abdihakim',
//   'Abdirahman',
//   'Abdisalam',
//   'Abdul',
//   'Abdul-Aziz',
//   'Abdulbasir',
//   'Abdulkadir',
//   'Abdulkarem',
//   'Ze',
//   'Zechariah',
//   'Zeek',
//   'Zeeshan',
//   'Zeid',
//   'Zein',
//   'Zen',
//   'Zendel',
//   'Zenith',
//   'Zennon',
//   'Zeph',
//   'Zerah',
//   'Zhen',
//   'Zhi',
//   'Zhong',
//   'Zhuo',
//   'Zi',
//   'Zidane',
//   'Zijie',
//   'Zinedine',
//   'Zion',
//   'Zishan',
//   'Ziya',
//   'Ziyaan',
//   'Zohaib',
//   'Zohair',
//   'Zoubaeir',
//   'Zubair',
//   'Zubayr',
//   'Zuriel',
//   ``,
// ];

// const descriptionsBodies = [
//   'How to disagree with someone',
//   'iPhone review',
//   'how-to',
//   'video essay on the history of video games',
//   'How to make money on the App Store',
//   'Learn NextJS in five minutes (Not clickbate)',
//   'Movie trailer',
//   'Hello world',
//   'Another possible solution to the algorithm',
//   'Apology video',
//   'Submission for startup pitch',
// ];

// const possibleReactions = [
//   'I disagree!',
//   'I tried your algorithm, here were the results',
//   'This was awesome',
//   'Thank you for the great content',
//   'Please check out my video response',
//   'Like and subscribe to my channel please',
//   'Reply: The side effects of in app purchases on digital marketplaces',
// ];

// const users = [];

// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// const getRandomName = () =>
//   `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// const getRandomThoughts = (int) => {
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       published: Math.random() < 0.5,
//       description: getRandomArrItem(descriptionsBodies),
//       advertiserFriendly: Math.random() < 0.5,
//       responses: [...getRandomThoughts(3)],
//     });
//   }
//   return results;
// };

// const getRandomReactions = (int) => {
//   if (int === 1) {
//     return getRandomArrItem(possibleReactions);
//   }
//   let results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       responseBody: getRandomArrItem(possibleReactions),
//       username: getRandomName(),
//     });
//   }
//   return results;
// };

// module.exports = { getRandomName, getRandomThoughts, getRandomReactions };
