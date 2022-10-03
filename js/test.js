"use strict";

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "физика"] },
//   { name: "Поли", score: 59, courses: ["информатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["физика", "биология"] },
//   { name: "Киви", score: 94, courses: ["литература", "информатика"] },
// ];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']