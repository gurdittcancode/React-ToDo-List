import {v4 as uuidv4} from "uuid";

const initialTasks = [
  { id: uuidv4(), task: "feed the cat" },
  { id: uuidv4(), task: "walk the dog" },
  { id: uuidv4(), task: "get groceries" },
];

export default initialTasks;