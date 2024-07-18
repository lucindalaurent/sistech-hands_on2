import React from 'react';
import Image from "next/image";
import { Course } from './Course';

interface CourseCardProps {
  course: Course;
}

function CourseCard ({ course }: CourseCardProps) {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl space-y-4 mb-4 border border-lightPink border-solid shadow-md text-purple">
      <h2 className="text-2xl font-bold">{course.course}</h2>
      <p>{course.description}</p>
      <Image src={course.imgUrl} alt={course.course} width={400} height={400} className="w-full h-48 object-cover rounded-md" />
      <div>
        <h3 className="text-xl font-semibold">Topics ({course.totalTopics}):</h3>
        {course.topics && course.topics.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {course.topics.map((topic) => (
              <li key={topic.topicId}>
                <strong>{topic.name}:</strong> {topic.content}
              </li>
            ))}
          </ul>
        ) : (
          <p>No topics available.</p>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold">Lecturers:</h3>
        {course.lecturers && course.lecturers.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {course.lecturers.map((lecturer, index) => (
              <li key={index}>{lecturer}</li>
            ))}
          </ul>
        ) : (
          <p>No lecturers available.</p>
        )}
      </div>
    </div>
  );
}

export {CourseCard};
