const items = [{
  id:"401",
  name:"Box",
  description:"It's just an ordinary box, or is it?",
  price:34.95
},{
  id:"402",
  name:"Camera",
  description:"This small, lightweight camera can hold over 1000 high definition images.",
  price:155.95
},{
  id:"403",
  name:"Magazine",
  description:"One can't help but be distracted by this magazine.",
  price:9
}];



const getInitialState = () => {
  return items;
};

export default getInitialState;