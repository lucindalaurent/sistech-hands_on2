interface Topic {
    topicId: number;
    name: string;
    content: string;
}
  
interface Course {
    id: number;
    course: string;
    description: string;
    imgUrl: string;
    totalTopics: number;
    topics: Topic[];
    lecturers: string[];
}

export type { Course };