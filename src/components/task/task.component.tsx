import { Icon } from '@iconify/react/dist/iconify.js';
import { useState, MouseEvent } from 'react';

type Props = {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
  toggleComplete: (e: MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Task = ({ task, toggleComplete, handleDelete }: Props) => {
  const [cOpen, setCOpen] = useState<boolean>(false);
  const handleClick = () => {
    setCOpen(!cOpen);
  };
  return (
    <li className='task p-5'>
      <div className='flex justify-between items-center'>
        <div className={`text-lg ${task.completed ? 'line-through' : ''}`}>
          {task.name}
        </div>
        <div onClick={handleClick}>
          <Icon
            className={`icon ${
              cOpen ? 'chevron-down chevron-down-rotate' : 'chevron-down'
            } `}
            icon='carbon:chevron-down-outline'
          />
        </div>
      </div>
      <div
        className={`flex justify-end mt-4 controls ${
          cOpen ? ' controls-open' : ''
        }`}
      >
        <button
          value={task.id}
          className='btn delete-btn mr-2'
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          value={task.id}
          className='btn primary-btn'
          onClick={(e) => {
            toggleComplete(e);
            handleClick();
          }}
        >
          Complete
        </button>
      </div>
    </li>
  );
};

export default Task;
