const quotes = [
  {"id":1,"quotes":"The best time for a new beginning is now.","author":"Unknown"},
  {"id":2,"quotes":"Don't put off until tomorrow what you can do today.","author":"Benjamin Franklin"},
  {"id":3,"quotes":"The journey is the destination.","author":"Confucius"},
  {"id":4,"quotes":"In the middle of difficulty lies opportunity.","author":"Albert Einstein"},
  {"id":5,"quotes":"Don't dream your life, live your dream.","author":"Unknown"},
  {"id":6,"quotes":"If you can't find a way, create a new one!","author":"Unknown"}
];

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');
  
  // Return all quotes
  res.status(200).json(quotes);
};
