import { useContext, useRef } from "react";
import User from "../../../models/User";
import AppContext from "../../../store/AppContext";
import AddUserForm from "../../ui/AddUserForm";

const AddUsers: React.FC = () => {
  const ctx = useContext(AppContext);
  const userNameRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userNameRef.current) return;
    ctx.onNewUserEntry(new User(userNameRef.current.value));
    userNameRef.current.value = "";
    userNameRef.current.blur();
  };

  return (
    <AddUserForm
      id="people"
      title='Add people'
      onSubmitHandler={submitHandler}
      userRef={userNameRef}
      placeholder='Enter User Name'
      btnText='Add'
    />
  );
};

export default AddUsers;
