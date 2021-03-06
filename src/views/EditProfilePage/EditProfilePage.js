import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import Layout from "../../components/Layout/Layout";
import Input from "../../components/Input/Input";
import WhiteContainer from "../../components/WhiteContainer/WhiteContainer";
import {
  getUserInfo,
  updateUserDetails,
  updateUserPassword,
} from "../../redux/actions";
import Button from "../../components/Button/Button";
import { passwordValidation } from "../../config";

const EditProfilePage = (props) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [position, setPosition] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isEditingDetails, setIsEditingDetails] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState(null);

  const updateUserHandler = () => {
    props.updateUserDetails({
      email: email !== null ? email : props.user.email,
      firstName: firstName !== null ? firstName : props.user.firstName,
      jobTitle: position !== null ? position : props.user.jobTitle,
      lastName: lastName !== null ? lastName : props.user.lastName,
    });
    setIsEditingDetails(false);
  };

  const updatePasswordHandler = () => {
    let isPasswordCorrect = true;

    if (!password.match(passwordValidation)) {
      toast.error("New password doesn't meet the requirements");
      isPasswordCorrect = false;
    }

    if (password !== confirmPassword) {
      toast.error("New passwords don't match");
      isPasswordCorrect = false;
    }

    if (isPasswordCorrect) {
      props.updateUserPassword({
        currentPassword: oldPassword,
        newPassword: password !== null ? password : props.user.password,
      });
      setIsEditingPassword(false);
    }
  };

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-2 items-start">
        <div className="col-span-1">
          <WhiteContainer
            title="Your details"
            button={true}
            onButtonClick={(e) => setIsEditingDetails(true)}
            buttonColor="transparent"
            buttonSize="xs"
            buttonText="Edit"
            buttonIcon="edit"
          >
            <div className="px-4">
              <form>
                <div className="grid gap-x-4 grid-cols-2">
                  <div className="col-span-1">
                    <Input
                      type="text"
                      label="Name"
                      value={
                        firstName === null ? props.user.firstName : firstName
                      }
                      onChange={(e) => setFirstName(e.target.value)}
                      disabled={isEditingDetails ? false : true}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      type="text"
                      label="Last name"
                      value={lastName === null ? props.user.lastName : lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      disabled={isEditingDetails ? false : true}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      type="text"
                      label="Position"
                      value={position === null ? props.user.jobTitle : position}
                      onChange={(e) => setPosition(e.target.value)}
                      disabled={isEditingDetails ? false : true}
                    />
                  </div>
                  <div className="col-span-1">
                    <Input
                      type="email"
                      label="E-mail"
                      value={email === null ? props.user.email : email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isEditingDetails ? false : true}
                    />
                  </div>
                </div>
                <div
                  className={` items-center justify-start ${
                    isEditingDetails ? "flex" : "hidden"
                  }`}
                >
                  <Button
                    type="button"
                    onClick={updateUserHandler}
                    color="green"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    type="button"
                    color="redTransparent"
                    size="sm"
                    onClick={(e) => setIsEditingDetails(false)}
                    className="ml-4"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </WhiteContainer>
        </div>
        <div className="col-span-1">
          <WhiteContainer
            title="Password settings"
            button={true}
            onButtonClick={(e) => setIsEditingPassword(true)}
            buttonColor="transparent"
            buttonSize="xs"
            buttonText="Edit"
            buttonIcon="edit"
          >
            <div className="px-4">
              <form>
                <div>
                  <Input
                    type="password"
                    placeholder="**********"
                    label="Current password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    disabled={isEditingPassword ? false : true}
                  />
                  <Input
                    type="password"
                    label="New password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isEditingPassword ? false : true}
                  />
                  <Input
                    type="password"
                    label="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isEditingPassword ? false : true}
                  />
                </div>
                <div
                  className={` items-center justify-start ${
                    isEditingPassword ? "flex" : "hidden"
                  }`}
                >
                  <Button
                    type="button"
                    onClick={updatePasswordHandler}
                    color="green"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    type="button"
                    color="redTransparent"
                    size="sm"
                    onClick={(e) => setIsEditingPassword(false)}
                    className="ml-4"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </WhiteContainer>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.userReducer.user,
    updateUserDetails: state.updateUserDetails,
    updateUserPassword: state.updateUserPassword,
  };
};

export default connect(mapStateToProps, {
  getUserInfo,
  updateUserDetails,
  updateUserPassword,
})(EditProfilePage);
