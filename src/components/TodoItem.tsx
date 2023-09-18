import "./todo-item.css";

type TodoItemProps = {
  title: string;
  description: string;
  onDelete: () => void;
};

export default function TodoItem({
  title,
  description,
  onDelete,
}: TodoItemProps) {
  return (
    <details className="todo-item">
      <summary>
        <div>
          <input type="checkbox" />
          <p className="todo-title">{title}</p>
        </div>
        <button className="delete-todo" onClick={onDelete}>
          delete
        </button>
      </summary>
      <p className="todo-description">{description}</p>
    </details>
  );
}
