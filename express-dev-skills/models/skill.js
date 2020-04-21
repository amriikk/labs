const skills = [
    {skill: 'HTML', acquired: true},
    {skill: 'CSS', acquired: true},
    {skill: 'React', acquired: false},
    {skill: 'Node.js', acquired: false},
    {skill: 'Express', acquired: true},
    {skill: 'MongoDb', acquired: false},
    {skill: 'Javascript', acquired: true}
  ];
  
  module.exports = {
    getAll: () => {
      return skills;
    }
  };
  
 