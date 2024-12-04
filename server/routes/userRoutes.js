import  express  from "express";
import {registerUser, loginUser, getTeamList, logoutUser, getNotificationsList, updateUserProfile, markNotificationRead, changeUserPassword, activateUserProfile, deleteUserProfile} from "../controllers/userController.js"
import {protectRoute, isAdminRoute} from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/get-team", protectRoute, getTeamList);
router.get("/notifications", protectRoute, getNotificationsList);

router.put("/profile", protectRoute, updateUserProfile);
router.put("/read-noti", protectRoute, markNotificationRead);
router.put("/change-password", protectRoute, changeUserPassword);

router
  .route("/:id")
  .put(protectRoute, isAdminRoute, activateUserProfile)
  .delete(protectRoute, isAdminRoute, deleteUserProfile);



export default router;