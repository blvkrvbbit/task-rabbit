import ITask from '../../types/task.type';
import Task from '../task/task.component';
import { MouseEvent } from 'react';

type Props = {
  tasks: ITask[];
  toggleComplete: (e: MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
};

const TaskList = ({ tasks, toggleComplete, handleDelete }: Props) => {
  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
