export interface Employee {
    name: string;
  }
  
  export interface SubManager {
    name: string;
    children: Employee[];
  }
  
  export interface MainManager {
    name: string;
    children: SubManager[];
  }
  