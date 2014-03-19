App.Product = DS.Model.extend({
  artist: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("number"),
  image: DS.attr("string")
});


// App.Product.FIXTURES = [
//   {
//     id: 1,
//     artist: "Dresses",
//     price: 10,
//     image: "http://fj.pt80.net/data/attachment/forum/201307/27/225421wnm9s00rsgbpwhmd.jpg",
//     description: "Portland Oregon musicians JaredRyan Landonado and Timothy Heller",
//   }, {
//     id: 2,
//     artist: "The White Stripes",
//     price: 10,
//     image: "http://userserve-ak.last.fm/serve/500/8206327/The+White+Stripes+White+Stripes.jpg",
//     description: "The White Stripes were an American rock duo, formed in 1997 in Detroit, Michigan. The group consisted of Jack and Meg White, who were married from 1996 to 2000",
//   },
//   {
//     id: 3,
//     artist: "Lindsey Stirling",
//     price: 10,
//     image: "http://up.com.vn/v3/wp-content/uploads/2013/08/Lindsey-Stirling-1.jpg",
//     description: "Lindsey Stirling 1986 is an American violinist, dancer, performance artist, and composer."
//   }
// ]