const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer", "").trim();
  console.log("Token: ", token);
  try {
    /* To be done
1) Verify JWT
2) Set req.user_id, req.token and req.user values
*/
    let data = await jwt.verify(token, process.env.JWT_KEY);
    req.user = data;
    next();

    jwtToken = jwt.verify(token, "my-secret");
    User.next();
  } catch (error) {
    console.log(JSON.stringify(error));
    console.log(error.stack);
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = auth;
