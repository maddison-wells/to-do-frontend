import { useState } from "react";
import { addToDoItem } from "../../services/to-do-list-services";
import styles from "./Modal.module.scss";
import { toast } from "react-toastify";

const Modal = ({ setModal }: { setModal: any }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    statusId: 2,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await addToDoItem(formData);
      setFormData({ title: "", description: "", statusId: 2 });
      setModal(false);
      toast.success("Item added to your To-Do list");
    } catch (error) {
      console.error("Failed to add item:", error);
      toast.error("Item failed to be added");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button
        className={styles.container__close}
        onClick={() => {
          setModal(false);
        }}
      >
        x
      </button>
      <h2 className={styles.container__title}>New To-Do Item</h2>

      <div>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={styles.container__input}
          placeholder="Task"
          required
        />
      </div>

      <div>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={styles.container__input}
          placeholder="Notes"
          required
        />
      </div>

      <div className={styles.container__radio}>
        <label>
          <input
            type="radio"
            name="statusId"
            value={1}
            checked={formData.statusId === 1}
            onChange={handleChange}
          />
          In Progress
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="statusId"
            value={2}
            checked={formData.statusId === 2}
            onChange={handleChange}
          />
          Not Started
        </label>
      </div>

      <button className={styles.container__button} type="submit">
        Add
      </button>
    </form>
  );
};

export default Modal;
