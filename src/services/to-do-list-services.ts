export const getAllToDoItems = async () => {
  const response = await fetch("http://localhost:8080/todoitem");
  if (!response.ok) {
    throw new Error("Failed to get to-do items");
  }
  const data = await response.json();
  return data;
};

export const getAllStatusNames = async () => {
  const response = await fetch("http://localhost:8080/status");
  if (!response.ok) {
    throw new Error("Failed to get to-do items");
  }
  const data = await response.json();
  return data;
};

export const addToDoItem = async (formData: any) => {
  const response = await fetch("http://localhost:8080/todoitem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log(JSON.stringify(formData));

  if (!response.ok) {
    throw new Error("Failed to add new item");
  }

  const data = await response.json();
  return data;
};

export const updateById = async (id: any, formData: object) => {
  const response = await fetch(`http://localhost:8080/todoitem/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update item with id ${id}`);
  }
  const data = await response.json();
  return data;
};

export const deleteById = async (id: any) => {
  const response = await fetch(`http://localhost:8080/todoitem/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete item with id ${id}`);
  }
  const data = await response.json();
  return data;
};
