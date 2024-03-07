import { useEffect, useState } from "react";
import { getAllToDoItems } from "../../services/to-do-list-services";
import ItemCard from "../../components/ItemCard/ItemCard";
import styles from "./ItemList.module.scss";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SearchableDropdown from "../../components/SearchableDropdown/SearchableDropdown";

interface Status {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface TodoItem {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  status: Status;
  description: string;
}

export const ItemList = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [statusId, setStatusId] = useState<number>(3);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    getAllToDoItems()
      .then((data) => setTodoItems(data))
      .catch((error) => console.error("Error fetching todo items:", error));
  }, [modal, todoItems]);

  const filteredTodoItems =
    statusId === 3
      ? todoItems
      : todoItems.filter((item) => item.status.id === statusId);

  return (
    <div className={styles.container}>
      <div className={styles.container__buttons}>
        <Button
          label={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => setModal(true)}
        />
        {modal && <Modal setModal={setModal} />}

        <SearchableDropdown
          options={[
            { label: "Not Started", value: 2 },
            { label: "In Progress", value: 1 },
            { label: "Completed", value: 4 },
            { label: "All", value: 3 },
          ]}
          onChange={(statusId) => setStatusId(statusId)}
          placeholder={"Search by Status"}
        />
      </div>

      {filteredTodoItems.length === 0 ? (
        <p className={styles.container__text}>You're all up to date</p>
      ) : (
        <ul>
          {filteredTodoItems.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              status={item.status}
              id={item.id}
              setTodoItems={setTodoItems}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
