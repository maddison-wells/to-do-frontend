import Button from "../Button/Button";
import styles from "./ItemCard.module.scss";
import { deleteById } from "../../services/to-do-list-services";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import UpdateModal from "../UpdateModal/UpdateModal";
import { useState } from "react";

function formatDate(timestamp: string | number | Date) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const ItemCard = ({
  title,
  createdAt,
  updatedAt,
  status,
  description,
  id,
  setTodoItems,
}: {
  key: any;
  title: any;
  createdAt: any;
  updatedAt: any;
  status: any;
  description: any;
  id: any;
  setTodoItems: any;
}) => {
  const handleDelete = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (!confirmed) {
        return;
      }
      await deleteById(id);
      toast.success("Item deleted!");
      setTodoItems(true);
    } catch (error) {
      toast.success("Item deleted!");
    }
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__details}>
          <h2 className={styles.card__title}>{title}</h2>

          <p className={styles.card__status}>{status.name.toUpperCase()}</p>
          <p>{description}</p>
          <div className={styles.card__created}>
            <p>Created {formatDate(createdAt)}</p>
            {createdAt !== updatedAt && (
              <p>Last updated {formatDate(updatedAt)}</p>
            )}
          </div>
        </div>
        <div className={styles.card__button}>
          <Button
            label={<FontAwesomeIcon icon={faTrash} />}
            onClick={handleDelete}
          />

          <Button
            label={<FontAwesomeIcon icon={faPencil} />}
            onClick={() => setShowModal(true)}
          />
          {showModal && (
            <UpdateModal
              setShowModal={setShowModal}
              id={id}
              title={title}
              description={description}
              status={status.name}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCard;
