import React from 'react';
import {CourseList} from './CourseList';

function CourseListContainer() {
  return (
    <div className="general min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-center text-darkmagenta pb-4">Available Courses</h1>
        <CourseList />
    </div>
  );
}

export {CourseListContainer};
