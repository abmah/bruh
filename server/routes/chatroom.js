const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatroomController");

const auth = require("../middleware/auth");

router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));
router.post("/", auth, catchErrors(chatroomController.createChatroom));
router.get("/messages", auth, catchErrors(chatroomController.getAllMessages));
module.exports = router;
