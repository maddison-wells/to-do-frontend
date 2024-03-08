import { useState } from "react";
import { updateById } from "../../services/to-do-list-services";
import styles from "./UpdateModal.module.scss";
import { toast } from "react-toastify";

interface UpdateModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: any;
  description: string;
  title: string;
  status: string;
}

const UpdateModal = ({
  setShowModal,
  id,
  description,
  title,
  status,
}: UpdateModalProps) => {
  const [formData, setFormData] = useState({
    title: `${title}`,
    description: `${description}`,
    statusId: 2,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    if (name === "statusId") {
      setFormData({
        ...formData,
        [name]: parseInt(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await updateById(id, formData);
      setFormData({
        title: "",
        description: "",
        statusId: 2,
      });
      setShowModal(false);
      toast.success("Item updated");
    } catch (error) {
      console.error("Failed to update item:", error);
      toast.error("Item failed to be updated");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button
        className={styles.container__close}
        onClick={() => {
          setShowModal(false);
        }}
      >
        x
      </button>
      <h2 className={styles.container__title}>Update To-Do Item</h2>

      <div>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={styles.container__input}
          placeholder="Task"
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
        />
      </div>

      <div>
        <select
          id="statusId"
          name="statusId"
          value={formData.statusId}
          onChange={handleChange}
          className={styles.container__input}
        >
          <option value={2}>Not Started</option>
          <option value={1}>In Progress</option>
          <option value={4}>Completed</option>
        </select>
      </div>

      <button className={styles.container__button} type="submit">
        Update
      </button>
    </form>
  );
};

export default UpdateModal;
