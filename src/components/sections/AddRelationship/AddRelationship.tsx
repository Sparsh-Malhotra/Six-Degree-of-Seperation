import { useContext, useRef } from "react";
import AppContext from "../../../store/AppContext";
import AddRelationForm from "../../ui/AddRelationForm";

const AddRelationship: React.FC = (props) => {
  const ctx = useContext(AppContext);
  const user1Ref = useRef<HTMLParagraphElement>(null);
  const user2Ref = useRef<HTMLParagraphElement>(null);
  const options = ctx.users.map((user) => ({
    value: user.name,
    label: user.name,
  }));

  const newRelationshipEntryHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !user1Ref.current ||
      !user2Ref.current ||
      !user1Ref.current.textContent ||
      !user2Ref.current.textContent
    )
      return;
    ctx.onNewRelationshipEntry(
      user1Ref.current.textContent,
      user2Ref.current.textContent
    );
    user1Ref.current.innerHTML = "";
    user1Ref.current.blur();
    user2Ref.current.innerText = "";
    user2Ref.current.blur();
    console.log(user1Ref);
  };

  return (
    <AddRelationForm
      id='relationship'
      title='Set Relation'
      onSubmitHandler={newRelationshipEntryHandler}
      user1Ref={user1Ref}
      user1Placeholder='User 1'
      user2Ref={user2Ref}
      user2Placeholder='User 2'
      btnText='Set'
      hasReadonlyInput={true}
      options={options}
    />
  );
};

export default AddRelationship;
