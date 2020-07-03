import {
  Router
} from "express";
const router = Router();

/* GET home page. */
function basicApi (req, res) {
  res.status(200).json(
    {
      "success": true
    }
  )
}

function testAPI (req, res) {
  res.status(200).json({
    "message": "hi"
  })
};

function postTestAPI (req, res) {
  const user_message = req.body.message;
  res.status(200).json({
    "message": user_message
  });
};


module.exports = {
  basicAPI: basicApi,
  testAPI: testAPI,
  postTestAPI: postTestAPI,
};