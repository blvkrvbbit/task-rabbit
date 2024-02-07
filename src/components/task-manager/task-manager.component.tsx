import { useState, MouseEvent, ChangeEvent, FormEvent } from 'react';
import ITask from '../../types/task.type';
import './task-manager.styles.scss';
import { Icon } from '@iconify/react';
import TaskList from '../task-list/task-list.component';
import TaskForm from '../task-form/task-form.component';

const TaskManager = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [task, setTask] = useState<string>('');
  const [createOpen, setCreateOpen] = useState(false);

  const toggleCreate = () => {
    setCreateOpen(!createOpen);
  };

  const createTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.length > 0) {
      const updatedTasks = [
        ...tasks,
        {
          id: tasks.length + 1,
          name: task,
          completed: false,
        },
      ];
      setTasks(updatedTasks);
      resetForm();
    }
  };

  const resetForm = () => {
    setTask('');
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTask(value);
  };

  const toggleComplete = (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number((e.target as HTMLButtonElement).value);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number((e.target as HTMLButtonElement).value);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className='container mx-auto '>
      <div className='flex justify-end gap-2 p-5'>
        <button onClick={toggleCreate}>
          <Icon className='icon' icon='icons8:plus' />
        </button>
      </div>
      <TaskForm
        createTask={createTask}
        handleChange={handleChange}
        createOpen={createOpen}
        task={task}
      />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TaskManager;
