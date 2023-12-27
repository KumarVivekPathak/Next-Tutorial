import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
    // await new Promise((resolve, reject) => setTimeout(() => reject(), 2000))
    const todos = db.todo.findMany({});
    return todos;

}

const TodosPage = async () => {
    const todos = await getData();
    console.log(todos);
    return <div>
        <TodoList todos={todos} />
    </div>
}
export default TodosPage;