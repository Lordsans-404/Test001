const quotes = [
  {"id":1,"quote":"The best time for a new beginning is now.","author":"Unknown"},
  {"id":2,"quote":"Don't put off until tomorrow what you can do today.","author":"Benjamin Franklin"},
  {"id":3,"quote":"The journey is the destination.","author":"Confucius"},
  {"id":4,"quote":"In the middle of difficulty lies opportunity.","author":"Albert Einstein"},
  {"id":5,"quote":"Don't dream your life, live your dream.","author":"Unknown"}
];

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');
  
  // Return all quotes
  res.status(200).json(quotes);
};