import { ChangeEvent, MouseEvent } from 'react';

type Props = {
  createTask: (e: MouseEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  createOpen: boolean;
  task: string;
};

const TaskForm = ({ createTask, handleChange, createOpen, task }: Props) => {
  return (
    <form
      onSubmit={createTask}
      className={`create-form  ${
        createOpen ? 'create-form-open py-5 mb-2' : ''
      }`}
    >
      <input
        type='text'
        placeholder='Task to do.'
        className=' w-full border-b border-box pb-2 outline-none'
        onChange={handleChange}
        value={task}
      />
      <button className='btn primary-btn ml-auto block'>Create</button>
    </form>
  );
};

export default TaskForm;
