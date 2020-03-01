const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../server/models/User");
const keys = require("../config/keys");
const validateInputs = require("../validation/register");
const validateLoginInput = require("../validation/login")

// here we'll register a new user
const register = async data => {
  try {
    const { message, isValid } = validateInputs(data);
    if (!isValid) {
      throw new Error(message);
    }

    const { fname, lname, email, password, city } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("This user already exists");
    }

    const user = new User(
      {
        fname,
        lname,
        email,
        password: hashedPassword,
        city
      },
      err => {
        if (err) throw err;
      }
    );

    user.save();

    const token = jwt.sign({ id: user._id }, keys.secretOrKey);
    const id = user._doc._id;
    return { token, loggedIn: true, ...user._doc, id, password: null };
  } catch (err) {
    throw err;
  }
};

// here will get the user logout
const logout = async data => {
    const token = "";
    const { _id } = data;
    const existingUser = await User.findOne({ _id });
    return { token, loggedIn: false, ...existingUser._doc, password: null };
}


//login the user
const login = async data => {
  try {
    // use our other validator we wrote to validate this data
    const { message, isValid } = validateLoginInput(data);
    if (!isValid) {
      throw new Error(message);
    }
    const { name, email, password } = data;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("This user doesn't exists");
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    const result = bcrypt.compareSync(password, existingUser.password);
    if (!result) {
      throw new Error("Wrong password.")
    }
    const token = jwt.sign({ id: existingUser._id }, keys.secretOrKey);
    return { token, loggedIn: true, ...existingUser._doc, password: null };
  } catch (err) {
    throw err;
  }
};

//verify user is logged in
const verifyUser = async data => {
    try {
        // we take in the token from our mutation
        const { token } = data;
        // we decode the token using our secret password to get the
        // user's id
        const decoded = jwt.verify(token, keys.secretOrKey);
        const { id } = decoded;
        // then we try to use the User with the id we just decoded
        // making sure we await the response
        const loggedIn = await User.findById(id).then(user => {
            return user ? true : false;
        });
        return { loggedIn };
    } catch (err) {
        return { loggedIn: false };
    }
};

module.exports = { register, login, logout };