export interface ICreateUser {
    username: string,
    password: string,
    email: string,
}

export interface IUserDto {
    id: number,
    username: string,
    password: string,
    email: string,
}

export interface ICreateProject {
    name: string;              
    description: string;      
    startDate: Date;          
    endDate: Date;            
    status: string;           
}

export interface IProjectDto {
    id: number,
    name: string;              
    description: string;      
    startDate: Date;          
    endDate: Date;            
    status: string;           
}

export interface ICreateTeam {
    name: string,
    project_id: number,
}

export interface ITeamDto {
    id: number,
    name: string,
    project_id: number,
}

export interface ICreateSprint {
    name: string;               
    durationInWeeks: number;    
    sprintState: string;        
    startDate?: Date;           
}

export interface ISprintDto {
    id: number;                 
    name: string;               
    durationInWeeks: number;    
    sprintState: string;        
    startDate?: Date;           
}

export interface ICreateTask {
    name: string;       
    description: string;
    comment?: string;   
    taskType: string;   
    taskState: string;  
    userId?: number;    
    sprintId?: number;  
}

export interface ITaskDto {
    id: number;         
    name: string;       
    description: string;
    comment?: string;   
    taskType: string;   
    taskState: string;  
    userId?: number;    
    sprintId?: number;  
}